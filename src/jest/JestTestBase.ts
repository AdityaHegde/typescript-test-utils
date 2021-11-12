import "jest";
import {TestBase} from "../TestBase";

declare function beforeAll(callback: () => Promise<void>): void;
declare function afterAll(callback: () => Promise<void>): void;

export class JestTestBase extends TestBase {
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
    beforeAll(async () => {
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
    afterAll(async () => {
      await afterCallback();
    });
  }
}
