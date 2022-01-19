import {chromium, Page, Browser} from "playwright";
import {TestSuiteSetup} from "../TestSuiteSetup";
import {TestSuiteParameter} from "../TestBase";
import {LaunchOptions} from "@playwright/test";

export type PlaywrightTestParameter = TestSuiteParameter & {
  browserLaunchOptions?: LaunchOptions;
}

export class PlaywrightSuiteSetup extends TestSuiteSetup<PlaywrightTestParameter> {
  private browser: Browser;

  /**
   */
  public async setupSuite(testSuiteParameter: PlaywrightTestParameter): Promise<void> {
    this.browser = await chromium.launch(testSuiteParameter.browserLaunchOptions ?? {});
  }

  /**
   */
  public async setupTest(testSuiteParameter: PlaywrightTestParameter, testContext: Record<any, any>): Promise<void> {
    testContext.page = await this.browser.newPage();
  }

  /**
   */
  public async teardownTest(testSuiteParameter: PlaywrightTestParameter, {page}: {page: Page}): Promise<void> {
    await page?.close();
  }

  /**
   */
  public async teardownSuite(testSuiteParameter: PlaywrightTestParameter): Promise<void> {
    await this.browser?.close();
  }
}
