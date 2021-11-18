import {DataProviderData, TestBase} from "../../src";
import {PlaywrightTestLibrary} from "../../src/playwright/PlaywrightTestLibrary";
import {startServer} from "../server/server";
import {expect, Page, PlaywrightTestArgs} from "@playwright/test";
import should from "should";

@TestBase.Suite
@TestBase.TestLibrary(PlaywrightTestLibrary)
export class PlaywrightTest extends TestBase {
  private setupCalled = false;
  private setupTestCalled = false;
  private teardownTestCalled = false;
  private dataProviderArgs = [];

  private static readonly PORT = 8000;
  private static readonly URL = `http://localhost:${PlaywrightTest.PORT}/`;
  private static readonly DATA_CSS = ".data";

  @TestBase.BeforeSuite()
  public async setup() {
    this.setupCalled = true;
    await startServer(PlaywrightTest.PORT);
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
    await page.goto(PlaywrightTest.URL);

    const input = page.locator(".input");
    await input.fill(arg0);

    const button = page.locator(".button");
    await button.click();

    await PlaywrightTest.assertDataText(page, arg1);

    this.dataProviderArgs.push([arg0, arg1]);
  }

  @TestBase.Test()
  public testLifecycle() {
    should(this.setupCalled).be.ok();
    should(this.setupTestCalled).be.ok();
  }

  @TestBase.AfterEachTest()
  public async teardownTest({page}) {
    await page.goto(PlaywrightTest.URL);
    await PlaywrightTest.assertDataText(page, "Page Loaded");

    this.teardownTestCalled = true;
  }

  @TestBase.AfterSuite()
  public teardown() {
    should(this.teardownTestCalled).be.ok();
    should(this.dataProviderArgs).be.eql([
      ["arg0010", "arg0011"],
      ["arg0020", "arg0021"],
      ["arg010", "arg011"],
      ["arg10", "arg11"],
    ]);
  }

  private static async assertDataText(page: Page, expected: string) {
    const data = page.locator(PlaywrightTest.DATA_CSS);
    await expect(data).toHaveText(expected);
  }
}
