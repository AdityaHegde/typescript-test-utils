import should from "should";
import {MochaTestCommonBase} from "./MochaTestCommonBase";

@MochaTestCommonBase.Suite
export class MochaTestBaseSpec extends MochaTestCommonBase {
  private setupCalled = false;
  private setupTestCalled = false;
  private teardownTestCalled = false;
  private dataProviderArgs = [];

  @MochaTestCommonBase.BeforeSuite()
  public setupMochaTestBaseSpec() {
    this.setupCalled = true;
    should(this.baseSetupCalled).be.ok();
  }

  @MochaTestCommonBase.BeforeEachTest()
  public setupTestMochaTestBaseSpec() {
    this.setupTestCalled = true;
  }

  public dataProvider() {
    return {
      subData: [{
        title: "level0",
        subData: [{
          title: "level00",
          subData: [{
            title: "level001",
            args: ["arg0010", "arg0011"],
          }, {
            title: "level002",
            args: ["arg0020", "arg0021"],
          }],
        }, {
          args: ["arg010", "arg011"],
        }],
      }, {
        args: ["arg10", "arg11"],
      }],
    };
  }

  @MochaTestCommonBase.Test("dataProvider")
  public testDataProvider(arg0, arg1) {
    should(arg0).not.be.undefined();
    should(arg1).not.be.undefined();
    this.dataProviderArgs.push([arg0, arg1]);
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
    should(this.dataProviderArgs).be.eql([
      ["arg10", "arg11"],
      ["arg010", "arg011"],
      ["arg0010", "arg0011"],
      ["arg0020", "arg0021"],
    ]);
  }
}
