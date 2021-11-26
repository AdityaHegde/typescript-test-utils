[@adityahegde/typescript-test-utils](../README.md) / [Modules](../modules.md) / TestSuiteSetup

# Class: TestSuiteSetup

## Table of contents

### Constructors

- [constructor](TestSuiteSetup.md#constructor)

### Methods

- [setupSuite](TestSuiteSetup.md#setupsuite)
- [setupTest](TestSuiteSetup.md#setuptest)
- [teardownSuite](TestSuiteSetup.md#teardownsuite)
- [teardownTest](TestSuiteSetup.md#teardowntest)

## Constructors

### constructor

• **new TestSuiteSetup**()

## Methods

### setupSuite

▸ **setupSuite**(`testSuiteParameter`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `testSuiteParameter` | [`TestSuiteParameter`](../modules.md#testsuiteparameter) |

#### Returns

`Promise`<`void`\>

#### Defined in

[TestSuiteSetup.ts:6](https://github.com/AdityaHegde/typescript-test-utils/blob/b5280ad/src/TestSuiteSetup.ts#L6)

___

### setupTest

▸ **setupTest**(`testSuiteParameter`, `testContext`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `testSuiteParameter` | [`TestSuiteParameter`](../modules.md#testsuiteparameter) |
| `testContext` | `Record`<`any`, `any`\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[TestSuiteSetup.ts:12](https://github.com/AdityaHegde/typescript-test-utils/blob/b5280ad/src/TestSuiteSetup.ts#L12)

___

### teardownSuite

▸ **teardownSuite**(`testSuiteParameter`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `testSuiteParameter` | [`TestSuiteParameter`](../modules.md#testsuiteparameter) |

#### Returns

`Promise`<`void`\>

#### Defined in

[TestSuiteSetup.ts:24](https://github.com/AdityaHegde/typescript-test-utils/blob/b5280ad/src/TestSuiteSetup.ts#L24)

___

### teardownTest

▸ **teardownTest**(`testSuiteParameter`, `testContext`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `testSuiteParameter` | [`TestSuiteParameter`](../modules.md#testsuiteparameter) |
| `testContext` | `Record`<`any`, `any`\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[TestSuiteSetup.ts:18](https://github.com/AdityaHegde/typescript-test-utils/blob/b5280ad/src/TestSuiteSetup.ts#L18)
