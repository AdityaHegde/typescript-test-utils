import should from "should";
import {TestBase} from "../../src";
import {MochaTestLibrary} from "../../src/mocha/MochaTestLibrary";

@TestBase.ParameterizedSuite([0, 1, 2].map(idx => [`ParameterizedTest${idx}`, `ParameterizedTest${idx}`]))
@TestBase.TestLibrary(MochaTestLibrary)
export class ParameterizedTestPw extends TestBase {
  private readonly expectedTitle: string;

  private setupCalled = false;
  private setupTestCalled = false;
  private teardownTestCalled = false;

  constructor(suiteTitle: string, expectedTitle: string) {
    super(suiteTitle);
    this.expectedTitle = expectedTitle;
  }

  @TestBase.BeforeSuite()
  public setupMochaTestBaseSpec() {
    this.setupCalled = true;
  }

  @TestBase.BeforeEachTest()
  public setupTestMochaTestBaseSpec() {
    this.setupTestCalled = true;
  }

  @TestBase.Test()
  public testLifecycle() {
    should(this.setupCalled).be.ok();
    should(this.setupTestCalled).be.ok();
    should(this.suiteTitle).be.equal(this.expectedTitle);
  }

  @TestBase.AfterEachTest()
  public teardownTestMochaTestBaseSpec() {
    this.teardownTestCalled = true;
  }
}
