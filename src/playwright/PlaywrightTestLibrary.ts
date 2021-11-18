import { test } from '@playwright/test';
import {TestLibrary} from "../TestLibrary";

export class PlaywrightTestLibrary extends TestLibrary {
  public declareSuite(suiteTitle: string, suiteCallback: () => void) {
    test.describe(suiteTitle, suiteCallback);
  }

  public declareBefore(beforeCallback: () => Promise<void>) {
    test.beforeAll(beforeCallback);
  }

  public declareBeforeEach(beforeEachCallback: () => Promise<void>) {
    test.beforeEach(beforeEachCallback);
  }

  public declareTest(testTitle: string, testCallback: () => Promise<void>) {
    test(testTitle, testCallback);
  }

  public declareAfterEach(afterEachCallback: () => Promise<void>) {
    test.afterEach(afterEachCallback);
  }

  public declareAfter(afterCallback: () => Promise<void>) {
    test.afterAll(afterCallback);
  }
}
