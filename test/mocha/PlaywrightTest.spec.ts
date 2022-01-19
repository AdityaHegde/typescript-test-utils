import {DataProviderData, TestBase, TestSuiteSetup} from "../../src";
import {startServer} from "../server/server";
import {expect, Page, PlaywrightTestArgs} from "@playwright/test";
import should from "should";
import {Server} from "http";
import {MochaTestLibrary} from "../../src/mocha/MochaTestLibrary";
import {PlaywrightSuiteSetup} from "../../src/playwright/PlaywrightSuiteSetup";
import {TestSuiteParameter} from "../../src";

const PORT = 8000;
const URL = `http://localhost:${PORT}/`;

class ServerSetup extends TestSuiteSetup {
  private server: Server;

  public async setupSuite(testSuiteParameter: TestSuiteParameter): Promise<void> {
    this.server = await startServer(PORT);
  }

  public async teardownSuite(testSuiteParameter: TestSuiteParameter): Promise<void> {
    await new Promise(resolve => {
      this.server.close(resolve);
    });
  }

  public setupTest(testSuiteParameter: TestSuiteParameter, testContext: Record<any, any>): Promise<void> {
    return Promise.resolve(undefined);
  }

  public teardownTest(testSuiteParameter: TestSuiteParameter, testContext: Record<any, any>): Promise<void> {
    return Promise.resolve(undefined);
  }
}

@TestBase.Suite
@TestBase.TestLibrary(MochaTestLibrary)
// Multiple TestSuiteSetup can be added
@TestBase.TestSuiteSetup(ServerSetup)
@TestBase.TestSuiteSetup(PlaywrightSuiteSetup)
export class PlaywrightTest extends TestBase {
  private setupCalled = false;
  private setupTestCalled = false;
  private teardownTestCalled = false;
  private dataProviderArgs = [];

  @TestBase.BeforeSuite()
  public async setup() {
    this.setupCalled = true;
  }

  @TestBase.BeforeEachTest()
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
            args: ["arg0010", "Data:arg0010"],
          }, {
            title: "level002",
            args: ["arg0020", "Data:arg0020"],
          }],
        }, {
          args: ["arg010", "Data:arg010"],
        }],
      }, {
        args: ["arg10", "Data:arg10"],
      }],
    };
  }

  @TestBase.Test("dataProvider")
  public async testDataProvider(arg0: string, arg1: string, {page}: PlaywrightTestArgs) {
    await page.goto(URL);

    const input = page.locator(".input");
    await input.fill(arg0);

    const button = page.locator(".enter");
    await button.click();

    await PlaywrightTest.assertDataText(page, arg1);

    this.dataProviderArgs.push([arg0, arg1]);
  }

  @TestBase.Test()
  public async testLifecycle({page}) {
    should(this.setupCalled).be.ok();
    should(this.setupTestCalled).be.ok();

    await page.goto(URL);
    await PlaywrightTest.assertDataText(page, "Page Loaded");
  }

  @TestBase.AfterEachTest()
  public teardownTest() {
    this.teardownTestCalled = true;
  }

  @TestBase.AfterSuite()
  public teardown() {
    should(this.teardownTestCalled).be.ok();
    should(this.dataProviderArgs).be.eql([
      ["arg10", "Data:arg10"],
      ["arg010", "Data:arg010"],
      ["arg0010", "Data:arg0010"],
      ["arg0020", "Data:arg0020"],
    ]);
  }

  private static async assertDataText(page: Page, expected: string) {
    const data = page.locator(".data");
    await expect(data).toHaveText(expected);
  }
}
