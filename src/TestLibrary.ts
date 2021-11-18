/**
 *
 */
export abstract class TestLibrary {
  /**
   */
  public abstract declareSuite(suiteTitle: string, suiteCallback: () => void);

  /**
   */
  public abstract declareBefore(beforeCallback: () => Promise<void>);

  /**
   */
  public abstract declareBeforeEach(beforeEachCallback: () => Promise<void>);

  /**
   */
  public abstract declareTest(testTitle: string, testCallback: () => Promise<void>);

  /**
   */
  public abstract declareAfterEach(afterEachCallback: () => Promise<void>);

  /**
   */
  public abstract declareAfter(afterCallback: () => Promise<void>);
}
