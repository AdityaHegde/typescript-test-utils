import {MochaTestCommonBase} from "./MochaTestCommonBase";
import should from "should";

@MochaTestCommonBase.ParameterizedSuite([0, 1, 2].map(idx => [`ParameterizedTest${idx}`, `ParameterizedTest${idx}`]))
export class ParameterizedTestSpec extends MochaTestCommonBase {
  private readonly expectedTitle: string;

  private setupCalled = false;
  private setupTestCalled = false;
  private teardownTestCalled = false;

  constructor(suiteTitle: string, expectedTitle: string) {
    super(suiteTitle);
    this.expectedTitle = expectedTitle;
  }

  @MochaTestCommonBase.BeforeSuite()
  public setupMochaTestBaseSpec() {
    this.setupCalled = true;
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
    should(this.suiteTitle).be.equal(this.expectedTitle);
  }

  @MochaTestCommonBase.AfterEachTest()
  public teardownTestMochaTestBaseSpec() {
    this.teardownTestCalled = true;
  }
}
