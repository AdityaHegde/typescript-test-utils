import {JestTestLibrary} from "./jest/JestTestLibrary";
import {MochaTestLibrary} from "./mocha/MochaTestLibrary";
import {PlaywrightTestLibrary} from "./playwright/PlaywrightTestLibrary";
import {TestSuiteSetup} from "./TestSuiteSetup";

export type TestParams = {
  propertyKey: string,
  dataProvider: string,
};

export type TestLibraryClassType = typeof JestTestLibrary | typeof MochaTestLibrary | typeof PlaywrightTestLibrary;

export class TestHookData {
  public before = new Array<string>();
  public beforeEach = new Array<string>();
  public tests = new Array<TestParams>();
  public after = new Array<string>();
  public afterEach = new Array<string>();
  public TestLibraryClass: TestLibraryClassType;
  public TestSuiteSetupClasses = new Set<typeof TestSuiteSetup>();

  constructor(copyFrom?: TestHookData) {
    if (copyFrom) {
      this.before = [...copyFrom.before];
      this.beforeEach = [...copyFrom.beforeEach];
      this.tests = [...copyFrom.tests];
      this.after = [...copyFrom.after];
      this.afterEach = [...copyFrom.afterEach];
      this.TestLibraryClass = copyFrom.TestLibraryClass;
      this.TestSuiteSetupClasses = new Set(copyFrom.TestSuiteSetupClasses);
    }
  }
}
