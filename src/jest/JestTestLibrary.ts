import "jest";
import {TestLibrary} from "../TestLibrary";

declare function beforeAll(callback: () => Promise<void>): void;
declare function afterAll(callback: () => Promise<void>): void;

export class JestTestLibrary extends TestLibrary {
  /**
   */
  public declareSuite(suiteTitle: string, suiteCallback: () => void) {
    describe(suiteTitle, suiteCallback);
  }

  /**
   */
  public declareBefore(beforeCallback: () => Promise<void>) {
    beforeAll(beforeCallback);
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
    afterAll(afterCallback);
  }
}
