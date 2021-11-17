@adityahegde/typescript-test-utils / [Modules](modules.md)

# typescript-test-utils

Has decorator based utils for writing tests in TypeScript.
<br>Supports mocha and jest tests.

## Usage
Install using `npm i @adityahegde/typescript-test-utils --save-dev`
<br>Packages for mocha and jest need to be installed separately.

### mocha
Install mocha related packages `npm i mocha @types/mocha --save-dev`

```typescript
import should from "should";
import {MochaTestBase} from "@adityahegde/typescript-test-utils/dist/mocha";
import {DataProviderData} from "@adityahegde/typescript-test-utils";

@MochaTestBase.Suite
export class SampleMochaTest extends MochaTestBase {
  @MochaTestBase.BeforeSuite()
  public setupSuite() {
    // code to setup suite
  }

  @MochaTestBase.BeforeEachTest()
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

  @MochaTestBase.Test("dataProvider")
  public someTestUsingDataProvidor(arg0: string, arg1: string) {
    // test using args from data provider
  }

  @MochaTestBase.Test()
  public someTest() {
    // a single test
  }

  @MochaTestBase.AfterEachTest()
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
import {JestTestBase} from "@adityahegde/typescript-test-utils/dist/jest";
import {DataProviderData} from "@adityahegde/typescript-test-utils";

@JestTestBase.Suite
export class SampleMochaTest extends JestTestBase {
  @JestTestBase.BeforeSuite()
  public setupSuite() {
    // code to setup suite
  }

  @JestTestBase.BeforeEachTest()
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

  @JestTestBase.Test("dataProvider")
  public someTestUsingDataProvidor(arg0: string, arg1: string) {
    // test using args from data provider
  }

  @JestTestBase.Test()
  public someTest() {
    // a single test
  }

  @JestTestBase.AfterEachTest()
  public teardownTest() {
    // code to teardown test
  }

  @JestTestBase.AfterSuite()
  public teardownSuite() {
    // code to teardown suite
  }
}
```

## Parameterized Test
It is possible to create a single test class with parameters.
<br>This is helpful in integration tests of a composition based component. Real world example: https://github.com/AdityaHegde/typescript-framework/blob/main/test/functional/server/ResourceRestriction.test.ts#L23

```typescript
import {MochaTestBase} from "@adityahegde/typescript-test-utils/dist/mocha";
import should from "should";

// This class compares test title and expected title.
// Can be anything here but should match the constructor of this class
@MochaTestBase.ParameterizedSuite([0, 1, 2].map(idx => [`ParameterizedTest${idx}`, `ParameterizedTest${idx}`]))
export class ParameterizedTestSpec extends MochaTestCommonBase {
  private readonly expectedTitle: string;

  constructor(suiteTitle: string, expectedTitle: string) {
    super(suiteTitle);
    this.expectedTitle = expectedTitle;
  }
  
  @MochaTestBase.BeforeSuite()
  public setupSuite() {
    // code to setup suite
  }

  @MochaTestBase.BeforeEachTest()
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

  @MochaTestBase.Test("dataProvider")
  public someTestUsingDataProvidor(arg0: string, arg1: string) {
    // test using args from data provider
  }

  @MochaTestBase.Test()
  public someTest() {
    // a single test
    should(this.suiteTitle).be.equal(this.expectedTitle);
  }

  @MochaTestBase.AfterEachTest()
  public teardownTest() {
    // code to teardown test
  }

  @MochaTestBase.AfterSuite()
  public teardownSuite() {
    // code to teardown suite
  }
}
```
