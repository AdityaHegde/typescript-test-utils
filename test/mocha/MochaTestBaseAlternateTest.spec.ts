import should from "should";
import {MochaTestCommonBase} from "./MochaTestCommonBase";

@MochaTestCommonBase.Suite
export class MochaTestBaseAlternateTest extends MochaTestCommonBase {
  private setupCalled = false;
  private setupTestCalled = false;
  private teardownTestCalled = false;

  @MochaTestCommonBase.BeforeSuite()
  public setupMochaTestBaseSpec() {
    this.setupCalled = true;
    should(this.baseSetupCalled).be.ok();
  }

  @MochaTestCommonBase.BeforeEachTest()
  public setupTestMochaTestBaseSpec() {
    this.setupTestCalled = true;
  }

  @MochaTestCommonBase.Test()
  public testLifecycle() {
    should(this.baseSetupCalled).be.ok();
    should(this.baseSetupTestCalled).be.ok();
    should(this.setupCalled).be.ok();
    should(this.setupTestCalled).be.ok();
  }

  @MochaTestCommonBase.AfterEachTest()
  public teardownTestMochaTestBaseSpec() {
    this.teardownTestCalled = true;
  }

  @MochaTestCommonBase.AfterSuite()
  public teardownMochaTestBaseSpec() {
    should(this.baseTeardownTestCalled).be.ok();
    should(this.baseTeardownCalled).not.be.ok();
    should(this.teardownTestCalled).be.ok();
  }
}
