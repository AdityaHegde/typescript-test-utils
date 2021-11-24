import should from "should";
import {TestBase} from "../../src";
import {MochaTestLibrary} from "../../src/mocha/MochaTestLibrary";

@TestBase.ParameterizedSuite([0, 1, 2].map(idx => {
  return {
    suiteTitle: `ParameterizedTest${idx}`,
    expectedTitle: `ParameterizedTest${idx}`,
  }
}))
@TestBase.TestLibrary(MochaTestLibrary)
export class ParameterizedTest extends TestBase {
  private setupCalled = false;
  private setupTestCalled = false;
  private teardownTestCalled = false;

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
    should(this.suiteTitle).be.equal(this.testSuiteParameter.expectedTitle);
  }

  @TestBase.AfterEachTest()
  public teardownTestMochaTestBaseSpec() {
    this.teardownTestCalled = true;
  }
}
