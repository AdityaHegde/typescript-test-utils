@adityahegde/typescript-test-utils / [Modules](modules.md)

# typescript-test-utils

Has decorator based utils for writing tests in TypeScript.
<br>Supports mocha and jest tests. Playwright support uses mocha to run test. Playwright is pending on https://github.com/microsoft/playwright/issues/7121

## Usage
Install using `npm i @adityahegde/typescript-test-utils --save-dev`
<br>Packages for mocha, jest and Playwright need to be installed separately.

### mocha
Install mocha related packages `npm i mocha @types/mocha --save-dev`

```typescript
import should from "should";
import {MochaTestLibrary} from "@adityahegde/typescript-test-utils/dist/mocha/MochaTestLibrary";
import {DataProviderData, TestBase} from "@adityahegde/typescript-test-utils";

// TestBase.TestLibrary dictates what underlying library to use. MochaTestLibrary for mocha
@TestBase.Suite
// TestLibrary declaration should come after TestBase.Suite
@TestBase.TestLibrary(MochaTestLibrary)
export class SampleMochaTest extends TestBase {
  @TestBase.BeforeSuite()
  public setupSuite() {
    // code to setup suite
  }

  @TestBase.BeforeEachTest()
  public setupTest() {
    // code to setup test
  }

  // return DataProviderData structure with (string, string) args
  // the args should match the one from test method
  public dataProvider(): DataProviderData<[string, string]> {
    return {
      subData: [{
        title: "level0",
        subData: [{
          title: "level00",
          subData: [{
            title: "level001",
            args: ["arg0010", "arg0011"],
          }, {
            title: "level002",
            args: ["arg0020", "arg0021"],
          }],
        }, {
          args: ["arg010", "arg011"],
        }],
      }, {
        args: ["arg10", "arg11"],
      }],
    };
  }

  @TestBase.Test("dataProvider")
  public someTestUsingDataProvidor(arg0: string, arg1: string) {
    // test using args from data provider
  }

  @TestBase.Test()
  public someTest() {
    // a single test
  }

  @TestBase.AfterEachTest()
  public teardownTest() {
    // code to teardown test
  }

  @MochaTestBase.AfterSuite()
  public teardownSuite() {
    // code to teardown suite
  }
}
```

### jest
Install jest related packages `npm i jest ts-jest @types/jest --save-dev`
<br>We can use the same test described in mocha section for jest by using JestTestBase

```typescript
import should from "should";
import {JestTestLibrary} from "@adityahegde/typescript-test-utils/dist/jest/JestTestLibrary";
import {DataProviderData, TestBase} from "@adityahegde/typescript-test-utils";

// TestBase.TestLibrary dictates what underlying library to use. MochaTestLibrary for mocha
@TestBase.Suite
// TestLibrary declaration should come after TestBase.Suite
@TestBase.TestLibrary(JestTestLibrary)
export class SampleMochaTest extends TestBase {
  @TestBase.BeforeSuite()
  public setupSuite() {
    // code to setup suite
  }

  @TestBase.BeforeEachTest()
  public setupTest() {
    // code to setup test
  }

  // return DataProviderData structure with (string, string) args
  // the args should match the one from test method
  public dataProvider(): DataProviderData<[string, string]> {
    return {
      subData: [{
        // ...
      }]
    };
  }

  @TestBase.Test("dataProvider")
  public someTestUsingDataProvidor(arg0: string, arg1: string) {
    // test using args from data provider
  }

  @TestBase.Test()
  public someTest() {
    // a single test
  }

  @TestBase.AfterEachTest()
  public teardownTest() {
    // code to teardown test
  }

  @TestBase.AfterSuite()
  public teardownSuite() {
    // code to teardown suite
  }
}
```

### playwright
Using playwright's runner is not supported until custom tsconfig is supported there. Uses mocha currently.
<br>Install playwright and mocha related packages `npm i mocha playwright @types/mocha --save-dev`

```typescript
import should from "should";
import {PlaywrightMochaTestLibrary} from "@adityahegde/typescript-test-utils/dist/playwright/PlaywrightMochaTestLibrary";
import {DataProviderData, TestBase} from "@adityahegde/typescript-test-utils";

// TestBase.TestLibrary dictates what underlying library to use. MochaTestLibrary for mocha
@TestBase.Suite
// TestLibrary declaration should come after TestBase.Suite
@TestBase.TestLibrary(PlaywrightMochaTestLibrary)
export class PlaywrightTest extends TestBase {
  @TestBase.BeforeSuite()
  public setupSuite() {
    // code to setup suite
    // optionally start a server for the tests
  }

  @TestBase.BeforeEachTest()
  public setupTest() {
    // code to setup test
  }

  // return DataProviderData structure with (string, string) args
  // the args should match the one from test method
  public dataProvider(): DataProviderData<[string, string]> {
    return {
      subData: [{
        title: "level0",
        subData: [{
          title: "level00",
          subData: [{
            title: "level001",
            args: ["arg0010", "arg0011"],
          }, {
            title: "level002",
            args: ["arg0020", "arg0021"],
          }],
        }, {
          args: ["arg010", "arg011"],
        }],
      }, {
        args: ["arg10", "arg11"],
      }],
    };
  }

  @TestBase.Test("dataProvider")
  public someTestUsingDataProvidor(arg0: string, arg1: string, {page}) {
    // test using args from data provider
    // last arg is the test context with playwright's page object
  }

  @TestBase.Test()
  public someTest({page}) {
    // a single test
    // has one arg, test context with playwright's page object
  }

  @TestBase.AfterEachTest()
  public teardownTest() {
    // code to teardown test
  }

  @MochaTestBase.AfterSuite()
  public teardownSuite() {
    // code to teardown suite
    // optionally stop the server
  }
}
```

## Parameterized Test
It is possible to create a single test class with parameters.
<br>This is helpful in integration tests of a composition based component. Real world example: https://github.com/AdityaHegde/typescript-framework/blob/main/test/functional/server/ResourceRestriction.test.ts#L23

```typescript
import should from "should";
import {MochaTestLibrary} from "@adityahegde/typescript-test-utils/dist/mocha/MochaTestLibrary";
import {DataProviderData, TestBase} from "@adityahegde/typescript-test-utils";

// This class compares test title and expected title.
// Can be anything here but should match the constructor of this class
// 1st parameter in the array is the title of the test. 2nd parameter is a free form json Record.
// Use the record through suiteData variable.
@TestBase.ParameterizedSuite([0, 1, 2].map(idx => [`ParameterizedTest${idx}`, {expectedTitle: `ParameterizedTest${idx}`}]))
// TestLibrary declaration should come after TestBase.ParameterizedSuite
@TestBase.TestLibrary(MochaTestLibrary)
export class ParameterizedTestSpec extends TestBase {
  constructor(suiteTitle: string, expectedTitle: string) {
    super(suiteTitle);
    this.expectedTitle = expectedTitle;
  }
  
  @TestBase.BeforeSuite()
  public setupSuite() {
    // code to setup suite
  }

  @TestBase.BeforeEachTest()
  public setupTest() {
    // code to setup test
  }

  // return DataProviderData structure with (string, string) args
  // the args should match the one from test method
  public dataProvider(): DataProviderData<[string, string]> {
    return {
      subData: [{
        // ...
      }],
    };
  }

  @TestBase.Test("dataProvider")
  public someTestUsingDataProvidor(arg0: string, arg1: string) {
    // test using args from data provider
  }

  @TestBase.Test()
  public someTest() {
    // a single test
    should(this.suiteTitle).be.equal(this.suiteData.expectedTitle);
  }

  @TestBase.AfterEachTest()
  public teardownTest() {
    // code to teardown test
  }

  @TestBase.AfterSuite()
  public teardownSuite() {
    // code to teardown suite
  }
}
```
