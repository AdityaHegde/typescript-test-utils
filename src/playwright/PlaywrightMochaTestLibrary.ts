import "mocha";
import {chromium, Page, Browser} from "playwright";
import {TestLibrary} from "../TestLibrary";

export class PlaywrightMochaTestLibrary extends TestLibrary {
  private browser: Browser;

  /**
   */
  public declareSuite(suiteTitle: string, suiteCallback: () => void) {
    describe(suiteTitle, suiteCallback);
  }

  /**
   */
  public declareBefore(beforeCallback: () => Promise<void>) {
    before(beforeCallback);
  }

  /**
   */
  public declareBeforeEach(beforeEachCallback: () => Promise<void>) {
    beforeEach(beforeEachCallback);
  }

  /**
   */
  public declareTest(testTitle: string, testCallback: (...args: Array<any>) => Promise<void>) {
    it(testTitle, testCallback);
  }

  /**
   */
  public declareAfterEach(afterEachCallback: () => Promise<void>) {
    afterEach(afterEachCallback);
  }

  /**
   */
  public declareAfter(afterCallback: () => Promise<void>) {
    after(afterCallback);
  }

  /**
   */
  public async setupSuite(): Promise<void> {
    this.browser = await chromium.launch();
  }

  /**
   */
  public async setupTest(): Promise<Record<any, any>> {
    return {page: await this.browser.newPage()};
  }

  /**
   */
  public async teardownTest({page}: {page: Page}): Promise<void> {
    await page?.close();
  }

  /**
   */
  public async teardownSuite(): Promise<void> {
    await this.browser?.close();
  }
}
