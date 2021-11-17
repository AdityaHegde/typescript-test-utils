import {JestTestBase} from "../src/jest";
import should from "should";
import {DataProviderData} from "../dist";

@JestTestBase.Suite
export class JestTestBaseTest extends JestTestBase {
  private setupCalled = false;
  private setupTestCalled = false;
  private teardownTestCalled = false;
  private dataProviderArgs = [];

  @JestTestBase.BeforeSuite()
  public setup() {
    this.setupCalled = true;
  }

  @JestTestBase.BeforeEachTest()
  public setupTest() {
    this.setupTestCalled = true;
  }

  public dataProvider(): DataProviderData<[string, string]> {
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

  @JestTestBase.Test("dataProvider")
  public testDataProvider(arg0: string, arg1: string) {
    should(arg0).not.be.undefined();
    should(arg1).not.be.undefined();
    this.dataProviderArgs.push([arg0, arg1]);
  }

  @JestTestBase.Test()
  public testLifecycle() {
    should(this.setupCalled).be.ok();
    should(this.setupTestCalled).be.ok();
  }

  @JestTestBase.AfterEachTest()
  public teardownTest() {
    this.teardownTestCalled = true;
  }

  @JestTestBase.AfterSuite()
  public teardown() {
    should(this.teardownTestCalled).be.ok();
    should(this.dataProviderArgs).be.eql([
      ["arg0010", "arg0011"],
      ["arg0020", "arg0021"],
      ["arg010", "arg011"],
      ["arg10", "arg11"],
    ]);
  }
}
