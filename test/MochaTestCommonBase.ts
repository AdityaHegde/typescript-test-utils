import {MochaTestBase} from "../src/mocha";

export class MochaTestCommonBase extends MochaTestBase {
  protected baseSetupCalled = false;
  protected baseSetupTestCalled = false;
  protected baseTeardownTestCalled = false;
  protected baseTeardownCalled = false;

  @MochaTestBase.BeforeSuite()
  public setupMochaTestCommonBase() {
    this.baseSetupCalled = true;
  }

  @MochaTestBase.BeforeEachTest()
  public setupTestMochaTestCommonBase() {
    this.baseSetupTestCalled = true;
  }

  @MochaTestBase.AfterEachTest()
  public teardownTestMochaTestCommonBase() {
    this.baseTeardownTestCalled = true;
  }

  @MochaTestBase.AfterSuite()
  public teardownMochaTestCommonBase() {
    this.baseTeardownCalled = true;
  }
}