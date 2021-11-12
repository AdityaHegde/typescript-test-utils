import sinon from "sinon";
import { getClassName } from "./getClassName";

type TestParams = {
  propertyKey: string,
  dataProvider: string,
};
export type DataProviderData<Type = any> = {
  title?: string;
  args?: Type;
  subData?: Array<DataProviderData<Type>>;
};

class TestHookData {
  public before = new Array<string>();
  public beforeEach = new Array<string>();
  public tests = new Array<TestParams>();
  public after = new Array<string>();
  public afterEach = new Array<string>();

  constructor(copyFrom?: TestHookData) {
    if (copyFrom) {
      this.before = [...copyFrom.before];
      this.beforeEach = [...copyFrom.beforeEach];
      this.tests = [...copyFrom.tests];
      this.after = [...copyFrom.after];
      this.afterEach = [...copyFrom.afterEach];
    }
  }
}

/**
 */
export abstract class TestBase {
  protected static _testHookData = new TestHookData();

  protected sandbox: sinon.SinonSandbox;

  private testsStarted = false;
  protected readonly suiteTitle: string;

  constructor(suiteTitle: string) {
    this.suiteTitle = suiteTitle;
  }

  /**
   * Automatically adds the tests for the class. Useful when the test class is standalone.
   */
  public static Suite(constructor: any) {
    constructor.StaticSuite(constructor);

    const instance = new constructor(getClassName(constructor));
    instance._test();
  }

  /**
   * Have to be explicitly instantiated and tests have to be started.
   * Useful when the test class is parameterised and multiple instances can exist.
   */
  public static StaticSuite(constructor: any) {
    if (!constructor._testHookData) {
      constructor._testHookData = new TestHookData();
    }
  }

  /**
   */
  public static BeforeSuite() {
    return (target: TestBase, propertyKey: string) => {
      const constructor = TestBase.createTestHookData(target);
      constructor._testHookData.before.push(propertyKey);
    };
  }

  /**
   */
  public static BeforeEachTest() {
    return (target: TestBase, propertyKey: string) => {
      const constructor = TestBase.createTestHookData(target);
      constructor._testHookData.beforeEach.push(propertyKey);
    };
  }

  /**
   */
  public static AfterSuite() {
    return (target: TestBase, propertyKey: string) => {
      const constructor = TestBase.createTestHookData(target);
      constructor._testHookData.after.push(propertyKey);
    };
  }

  /**
   */
  public static AfterEachTest() {
    return (target: TestBase, propertyKey: string) => {
      const constructor = TestBase.createTestHookData(target);
      constructor._testHookData.afterEach.push(propertyKey);
    };
  }

  /**
   */
  public static Test(dataProvider?: string) {
    return (target: TestBase, propertyKey: string) => {
      const constructor = TestBase.createTestHookData(target);
      constructor._testHookData.tests.push({
        propertyKey,
        dataProvider,
      });
    };
  }

  public test() {
    if (this.testsStarted) {
      return;
    }
    this.testsStarted = true;
    this._test();
  }

  /**
   */
  protected abstract declareSuite(suiteTitle: string, suiteCallback: () => void);

  /**
   */
  protected abstract declareBefore(beforeCallback: () => Promise<void>);

  /**
   */
  protected abstract declareBeforeEach(beforeEachCallback: () => Promise<void>);

  /**
   */
  protected abstract declareTest(testTitle: string, testCallback: () => Promise<void>);

  /**
   */
  protected abstract declareAfterEach(afterEachCallback: () => Promise<void>);

  /**
   */
  protected abstract declareAfter(afterCallback: () => Promise<void>);

  /**
   * @internal
   */
  private _test() {
    const testHookData = (this.constructor as typeof TestBase)._testHookData;
    this.declareSuite(this.suiteTitle, () => {
      this.declareBefore(async () => {
        await this._beforeWrapper();
      });

      this.declareBeforeEach(async () => {
        await this._beforeEachWrapper();
      });

      testHookData.tests.forEach((testParams: TestParams) => {
        this.registerTest(testParams);
      });

      this.declareAfterEach(async () => {
        await this._afterEachWrapper();
      });

      this.declareAfter(async () => {
        await this._afterWrapper();
      });
    });
  }

  /**
   * @internal
   */
  private async _beforeWrapper() {
    this.sandbox = sinon.createSandbox();

    const testHookData = (this.constructor as typeof TestBase)._testHookData;
    for (const beforeFunction of testHookData.before) {
      await this[beforeFunction]();
    }
  }

  /**
   * @internal
   */
  private async _beforeEachWrapper() {
    this.sandbox.reset();

    const testHookData = (this.constructor as typeof TestBase)._testHookData;
    for (const beforeEachFunction of testHookData.beforeEach) {
      await this[beforeEachFunction]();
    }
  }

  /**
   * @internal
   */
  private registerTest(testParams: TestParams) {
    if (testParams.dataProvider) {
      this.registerDataProvider(this[testParams.dataProvider](), testParams);
    } else {
      this.declareTest(testParams.propertyKey, async () => {
        await this[testParams.propertyKey]();
      });
    }
  }

  /**
   * @internal
   */
  private registerDataProvider(data: DataProviderData, testParams: TestParams) {
    if (data.args) {
      this.declareTest(data.title || `Data(${data.args.map(arg => arg.toString()).join(",")})`,
        async () => {
          await this[testParams.propertyKey](...data.args);
        });
    } else if (data.subData) {
      this.declareSuite(data.title || testParams.propertyKey, () => {
        data.subData.forEach((_data) => {
          this.registerDataProvider(_data, testParams);
        });
      });
    }
  }

  /**
   * @internal
   */
  private async _afterEachWrapper() {
    const testHookData = (this.constructor as typeof TestBase)._testHookData;
    for (let i = testHookData.afterEach.length - 1; i >= 0; i--) {
      await this[testHookData.afterEach[i]]();
    }
  }

  /**
   * @internal
   */
  private async _afterWrapper() {
    const testHookData = (this.constructor as typeof TestBase)._testHookData;
    for (let i = testHookData.after.length - 1; i >= 0; i--) {
      await this[testHookData.after[i]]();
    }

    this.sandbox.restore();
  }

  /**
   * @internal
   */
  private static createTestHookData(target: any): typeof TestBase {
    const constructor = target.constructor as typeof TestBase;

    if (!Object.prototype.hasOwnProperty.call(constructor, "_testHookData")) {
      constructor._testHookData = new TestHookData(constructor._testHookData);
    }

    return constructor;
  }
}
