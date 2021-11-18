import {TestBase} from "../../src";
import {MochaTestLibrary} from "../../src/mocha/MochaTestLibrary";

@TestBase.TestLibrary(MochaTestLibrary)
export class MochaTestCommonBase extends TestBase {
  protected baseSetupCalled = false;
  protected baseSetupTestCalled = false;
  protected baseTeardownTestCalled = false;
  protected baseTeardownCalled = false;

  @TestBase.BeforeSuite()
  public setupMochaTestCommonBase() {
    this.baseSetupCalled = true;
  }

  @TestBase.BeforeEachTest()
  public setupTestMochaTestCommonBase() {
    this.baseSetupTestCalled = true;
  }

  @TestBase.AfterEachTest()
  public teardownTestMochaTestCommonBase() {
    this.baseTeardownTestCalled = true;
  }

  @TestBase.AfterSuite()
  public teardownMochaTestCommonBase() {
    this.baseTeardownCalled = true;
  }
}
