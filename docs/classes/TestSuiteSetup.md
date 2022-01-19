[@adityahegde/typescript-test-utils](../README.md) / [Modules](../modules.md) / TestSuiteSetup

# Class: TestSuiteSetup<Parameter\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `Parameter` | extends [`TestSuiteParameter`](../modules.md#testsuiteparameter) = [`TestSuiteParameter`](../modules.md#testsuiteparameter) |

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

• **new TestSuiteSetup**<`Parameter`\>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Parameter` | extends [`TestSuiteParameter`](../modules.md#testsuiteparameter) = [`TestSuiteParameter`](../modules.md#testsuiteparameter) |

## Methods

### setupSuite

▸ `Abstract` **setupSuite**(`testSuiteParameter`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `testSuiteParameter` | `Parameter` |

#### Returns

`Promise`<`void`\>

#### Defined in

[TestSuiteSetup.ts:8](https://github.com/AdityaHegde/typescript-test-utils/blob/eefd4f7/src/TestSuiteSetup.ts#L8)

___

### setupTest

▸ `Abstract` **setupTest**(`testSuiteParameter`, `testContext`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `testSuiteParameter` | `Parameter` |
| `testContext` | `Record`<`any`, `any`\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[TestSuiteSetup.ts:12](https://github.com/AdityaHegde/typescript-test-utils/blob/eefd4f7/src/TestSuiteSetup.ts#L12)

___

### teardownSuite

▸ `Abstract` **teardownSuite**(`testSuiteParameter`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `testSuiteParameter` | `Parameter` |

#### Returns

`Promise`<`void`\>

#### Defined in

[TestSuiteSetup.ts:20](https://github.com/AdityaHegde/typescript-test-utils/blob/eefd4f7/src/TestSuiteSetup.ts#L20)

___

### teardownTest

▸ `Abstract` **teardownTest**(`testSuiteParameter`, `testContext`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `testSuiteParameter` | `Parameter` |
| `testContext` | `Record`<`any`, `any`\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[TestSuiteSetup.ts:16](https://github.com/AdityaHegde/typescript-test-utils/blob/eefd4f7/src/TestSuiteSetup.ts#L16)
