/**
 *
 */
export abstract class TestLibrary {
  /**
   */
  public abstract declareSuite(suiteTitle: string, suiteCallback: () => void): void;

  /**
   */
  public abstract declareBefore(beforeCallback: () => Promise<void>): void;

  /**
   */
  public abstract declareBeforeEach(beforeEachCallback: () => Promise<void>): void;

  /**
   */
  public abstract declareTest(testTitle: string, testCallback: (...args: Array<any>) => Promise<void>): void;

  /**
   */
  public abstract declareAfterEach(afterEachCallback: () => Promise<void>): void;

  /**
   */
  public abstract declareAfter(afterCallback: () => Promise<void>): void;

  /**
   */
  public setupSuite(): Promise<void> {
    return Promise.resolve(undefined);
  }

  /**
   */
  public setupTest(): Promise<Record<any, any>> {
    return Promise.resolve(undefined);
  }

  /**
   */
  public teardownTest(context: Record<any, any>): Promise<void> {
    return Promise.resolve(undefined);
  }

  /**
   */
  public teardownSuite(): Promise<void> {
    return Promise.resolve(undefined);
  }
}
