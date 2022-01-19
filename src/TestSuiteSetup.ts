import {TestSuiteParameter} from "./TestBase";

export type TestSuiteSetupClassType = (new (...args: Array<any>) => TestSuiteSetup);

export abstract class TestSuiteSetup<Parameter extends TestSuiteParameter = TestSuiteParameter> {
  /**
   */
  public abstract setupSuite(testSuiteParameter: Parameter): Promise<void>;

  /**
   */
  public abstract setupTest(testSuiteParameter: Parameter, testContext: Record<any, any>): Promise<void>;

  /**
   */
  public abstract teardownTest(testSuiteParameter: Parameter, testContext: Record<any, any>): Promise<void>;

  /**
   */
  public abstract teardownSuite(testSuiteParameter: Parameter): Promise<void>;
}
