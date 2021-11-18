import sinon from "sinon";
import {getClassName} from "./getClassName";
import {TestHookData, TestLibraryClassType, TestParams} from "./TestHookData";
import {TestLibrary} from "./TestLibrary";

export type DataProviderData<Type = any> = {
  title?: string;
  args?: Type;
  subData?: Array<DataProviderData<Type>>;
};
export type GetConstructorParams<T extends {new(...args: any)}> = T extends {new(...args: infer Args)} ? Args : never;

/**
 */
export class TestBase {
  protected static _testHookData = new TestHookData();

  protected sandbox: sinon.SinonSandbox;
  protected testLibrary: TestLibrary;

  private testsStarted = false;
  protected readonly suiteTitle: string;

  constructor(suiteTitle: string) {
    this.suiteTitle = suiteTitle;
    this.testLibrary = new (this.constructor as typeof TestBase)._testHookData.TestLibraryClass();
  }

  /**
   * Automatically adds the tests for the class. Useful when the test class is standalone.
   */
  public static Suite(constructor: typeof TestBase) {
    constructor.createTestHookData(constructor);
    const instance = new constructor(getClassName(constructor));
    (instance as TestBase)._test();
  }

  /**
   *
   * @param params
   */
  public static ParameterizedSuite<T extends {new(...args: any)}>(params: Array<GetConstructorParams<T>>) {
    return (constructor: any) => {
      constructor.createTestHookData(constructor as typeof TestBase);

      params.forEach(args => {
        const instance = new constructor(...(args as Array<any>));
        instance._test();
      });
    }
  }

  /**
   */
  public static BeforeSuite() {
    return (target: TestBase, propertyKey: string) => {
      const constructor = TestBase.createTestHookData(target.constructor as typeof TestBase);
      constructor._testHookData.before.push(propertyKey);
    };
  }

  /**
   */
  public static BeforeEachTest() {
    return (target: TestBase, propertyKey: string) => {
      const constructor = TestBase.createTestHookData(target.constructor as typeof TestBase);
      constructor._testHookData.beforeEach.push(propertyKey);
    };
  }

  /**
   */
  public static AfterSuite() {
    return (target: TestBase, propertyKey: string) => {
      const constructor = TestBase.createTestHookData(target.constructor as typeof TestBase);
      constructor._testHookData.after.push(propertyKey);
    };
  }

  /**
   */
  public static AfterEachTest() {
    return (target: TestBase, propertyKey: string) => {
      const constructor = TestBase.createTestHookData(target.constructor as typeof TestBase);
      constructor._testHookData.afterEach.push(propertyKey);
    };
  }

  /**
   */
  public static Test(dataProvider?: string) {
    return (target: TestBase, propertyKey: string) => {
      const constructor = TestBase.createTestHookData(target.constructor as typeof TestBase);
      constructor._testHookData.tests.push({
        propertyKey,
        dataProvider,
      });
    };
  }

  /**
   * @param TestLibraryClass
   */
  public static TestLibrary(TestLibraryClass: TestLibraryClassType) {
    return (constructor: any) => {
      TestBase.createTestHookData(constructor);
      constructor._testHookData.TestLibraryClass = TestLibraryClass;
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
  protected declareSuite(suiteTitle: string, suiteCallback: () => void) {
    this.testLibrary.declareSuite(suiteTitle, suiteCallback);
  }

  /**
   */
  protected declareTest(testTitle: string, testMethodName: string, testArgs: Array<any>) {
    this.testLibrary.declareTest(testTitle, async (...args) => {
      return this[testMethodName](...testArgs, ...args);
    });
  }

  /**
   * @internal
   */
  private _test() {
    const testHookData = (this.constructor as typeof TestBase)._testHookData;
    this.declareSuite(this.suiteTitle, () => {
      this.testLibrary.declareBefore(async (...args: Array<any>) => {
        await this._beforeWrapper(...args);
      });

      this.testLibrary.declareBeforeEach(async (...args: Array<any>) => {
        await this._beforeEachWrapper(...args);
      });

      testHookData.tests.forEach((testParams: TestParams) => {
        this.registerTest(testParams);
      });

      this.testLibrary.declareAfterEach(async (...args: Array<any>) => {
        await this._afterEachWrapper(...args);
      });

      this.testLibrary.declareAfter(async (...args: Array<any>) => {
        await this._afterWrapper(...args);
      });
    });
  }

  /**
   * @internal
   */
  private async _beforeWrapper(...args: Array<any>) {
    this.sandbox = sinon.createSandbox();

    const testHookData = (this.constructor as typeof TestBase)._testHookData;
    for (const beforeFunction of testHookData.before) {
      await this[beforeFunction](...args);
    }
  }

  /**
   * @internal
   */
  private async _beforeEachWrapper(...args: Array<any>) {
    this.sandbox.reset();

    const testHookData = (this.constructor as typeof TestBase)._testHookData;
    for (const beforeEachFunction of testHookData.beforeEach) {
      await this[beforeEachFunction](...args);
    }
  }

  /**
   * @internal
   */
  private registerTest(testParams: TestParams) {
    if (testParams.dataProvider) {
      this.registerDataProvider(this[testParams.dataProvider](), testParams);
    } else {
      this.declareTest(testParams.propertyKey, testParams.propertyKey, []);
    }
  }

  /**
   * @internal
   */
  private registerDataProvider(data: DataProviderData, testParams: TestParams) {
    if (data.args) {
      this.declareTest(data.title || `Data(${data.args.map(arg => arg.toString()).join(",")})`,
        testParams.propertyKey, data.args);
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
  private async _afterEachWrapper(...args: Array<any>) {
    const testHookData = (this.constructor as typeof TestBase)._testHookData;
    for (let i = testHookData.afterEach.length - 1; i >= 0; i--) {
      await this[testHookData.afterEach[i]](...args);
    }
  }

  /**
   * @internal
   */
  private async _afterWrapper(...args: Array<any>) {
    const testHookData = (this.constructor as typeof TestBase)._testHookData;
    for (let i = testHookData.after.length - 1; i >= 0; i--) {
      await this[testHookData.after[i]](...args);
    }

    this.sandbox.restore();
  }

  /**
   * @internal
   */
  private static createTestHookData(constructor: typeof TestBase): typeof TestBase {
    if (!Object.prototype.hasOwnProperty.call(constructor, "_testHookData")) {
      constructor._testHookData = new TestHookData(constructor._testHookData);
    }

    return constructor;
  }
}
