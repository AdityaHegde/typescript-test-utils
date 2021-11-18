import "mocha";
import {TestLibrary} from "../TestLibrary";

export class MochaTestLibrary extends TestLibrary {
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
  declareTest(testTitle: string, testCallback: () => Promise<void>) {
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
}