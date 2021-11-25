import {chromium, Page, Browser} from "playwright";
import {TestSuiteSetup} from "../TestSuiteSetup";
import {TestSuiteParameter} from "../TestBase";

export class PlaywrightSuiteSetup extends TestSuiteSetup {
  private browser: Browser;

  /**
   */
  public async setupSuite(testSuiteParameter: TestSuiteParameter): Promise<void> {
    this.browser = await chromium.launch();
  }

  /**
   */
  public async setupTest(testSuiteParameter: TestSuiteParameter, testContext: Record<any, any>): Promise<void> {
    testContext.page = await this.browser.newPage();
  }

  /**
   */
  public async teardownTest(testSuiteParameter: TestSuiteParameter, {page}: {page: Page}): Promise<void> {
    await page?.close();
  }

  /**
   */
  public async teardownSuite(testSuiteParameter: TestSuiteParameter): Promise<void> {
    await this.browser?.close();
  }
}
