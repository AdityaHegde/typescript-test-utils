import {TestSuiteParameter} from "./TestBase";

export class TestSuiteSetup {
  /**
   */
  public setupSuite(testSuiteParameter: TestSuiteParameter): Promise<void> {
    return Promise.resolve();
  }

  /**
   */
  public setupTest(testSuiteParameter: TestSuiteParameter, testContext: Record<any, any>): Promise<void> {
    return Promise.resolve();
  }

  /**
   */
  public teardownTest(testSuiteParameter: TestSuiteParameter, testContext: Record<any, any>): Promise<void> {
    return Promise.resolve();
  }

  /**
   */
  public teardownSuite(testSuiteParameter: TestSuiteParameter): Promise<void> {
    return Promise.resolve();
  }
}
