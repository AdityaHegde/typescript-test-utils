import "mocha";
import {TestBase} from "../TestBase";

export class MochaTestBase extends TestBase {
  /**
   */
  protected declareSuite(suiteTitle: string, suiteCallback: () => void) {
    describe(suiteTitle, () => {
      suiteCallback();
    });
  }

  /**
   */
  protected declareBefore(beforeCallback: () => Promise<void>) {
    before(async () => {
      await beforeCallback();
    });
  }

  /**
   */
  protected declareBeforeEach(beforeEachCallback: () => Promise<void>) {
    beforeEach(async () => {
      await beforeEachCallback();
    });
  }

  /**
   */
  protected declareTest(testTitle: string, testCallback: () => Promise<void>) {
    it(testTitle, async () => {
      await testCallback();
    });
  }

  /**
   */
  protected declareAfterEach(afterEachCallback: () => Promise<void>) {
    afterEach(async () => {
      await afterEachCallback();
    });
  }

  /**
   */
  protected declareAfter(afterCallback: () => Promise<void>) {
    after(async () => {
      await afterCallback();
    });
  }
}
