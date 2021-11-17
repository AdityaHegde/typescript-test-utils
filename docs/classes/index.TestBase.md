[@adityahegde/typescript-test-utils](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / TestBase

# Class: TestBase

[index](../modules/index.md).TestBase

## Hierarchy

- **`TestBase`**

  ↳ [`JestTestBase`](jest.JestTestBase.md)

  ↳ [`MochaTestBase`](mocha.MochaTestBase.md)

## Table of contents

### Constructors

- [constructor](index.TestBase.md#constructor)

### Properties

- [sandbox](index.TestBase.md#sandbox)
- [suiteTitle](index.TestBase.md#suitetitle)
- [testsStarted](index.TestBase.md#testsstarted)
- [\_testHookData](index.TestBase.md#_testhookdata)

### Methods

- [\_afterEachWrapper](index.TestBase.md#_aftereachwrapper)
- [\_afterWrapper](index.TestBase.md#_afterwrapper)
- [\_beforeEachWrapper](index.TestBase.md#_beforeeachwrapper)
- [\_beforeWrapper](index.TestBase.md#_beforewrapper)
- [\_test](index.TestBase.md#_test)
- [declareAfter](index.TestBase.md#declareafter)
- [declareAfterEach](index.TestBase.md#declareaftereach)
- [declareBefore](index.TestBase.md#declarebefore)
- [declareBeforeEach](index.TestBase.md#declarebeforeeach)
- [declareSuite](index.TestBase.md#declaresuite)
- [declareTest](index.TestBase.md#declaretest)
- [registerDataProvider](index.TestBase.md#registerdataprovider)
- [registerTest](index.TestBase.md#registertest)
- [test](index.TestBase.md#test)
- [AfterEachTest](index.TestBase.md#aftereachtest)
- [AfterSuite](index.TestBase.md#aftersuite)
- [BeforeEachTest](index.TestBase.md#beforeeachtest)
- [BeforeSuite](index.TestBase.md#beforesuite)
- [ParameterizedSuite](index.TestBase.md#parameterizedsuite)
- [Suite](index.TestBase.md#suite)
- [Test](index.TestBase.md#test)
- [createTestHookData](index.TestBase.md#createtesthookdata)

## Constructors

### constructor

• **new TestBase**(`suiteTitle`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `suiteTitle` | `string` |

#### Defined in

[TestBase.ts:42](https://github.com/AdityaHegde/typescript-test-utils/blob/d427cc5/src/TestBase.ts#L42)

## Properties

### sandbox

• `Protected` **sandbox**: `any`

#### Defined in

[TestBase.ts:37](https://github.com/AdityaHegde/typescript-test-utils/blob/d427cc5/src/TestBase.ts#L37)

___

### suiteTitle

• `Protected` `Readonly` **suiteTitle**: `string`

#### Defined in

[TestBase.ts:40](https://github.com/AdityaHegde/typescript-test-utils/blob/d427cc5/src/TestBase.ts#L40)

___

### testsStarted

• `Private` **testsStarted**: `boolean` = `false`

#### Defined in

[TestBase.ts:39](https://github.com/AdityaHegde/typescript-test-utils/blob/d427cc5/src/TestBase.ts#L39)

___

### \_testHookData

▪ `Static` `Protected` **\_testHookData**: `TestHookData`

#### Defined in

[TestBase.ts:35](https://github.com/AdityaHegde/typescript-test-utils/blob/d427cc5/src/TestBase.ts#L35)

## Methods

### \_afterEachWrapper

▸ `Private` **_afterEachWrapper**(): `Promise`<`void`\>

**`internal`**

#### Returns

`Promise`<`void`\>

#### Defined in

[TestBase.ts:238](https://github.com/AdityaHegde/typescript-test-utils/blob/d427cc5/src/TestBase.ts#L238)

___

### \_afterWrapper

▸ `Private` **_afterWrapper**(): `Promise`<`void`\>

**`internal`**

#### Returns

`Promise`<`void`\>

#### Defined in

[TestBase.ts:248](https://github.com/AdityaHegde/typescript-test-utils/blob/d427cc5/src/TestBase.ts#L248)

___

### \_beforeEachWrapper

▸ `Private` **_beforeEachWrapper**(): `Promise`<`void`\>

**`internal`**

#### Returns

`Promise`<`void`\>

#### Defined in

[TestBase.ts:195](https://github.com/AdityaHegde/typescript-test-utils/blob/d427cc5/src/TestBase.ts#L195)

___

### \_beforeWrapper

▸ `Private` **_beforeWrapper**(): `Promise`<`void`\>

**`internal`**

#### Returns

`Promise`<`void`\>

#### Defined in

[TestBase.ts:183](https://github.com/AdityaHegde/typescript-test-utils/blob/d427cc5/src/TestBase.ts#L183)

___

### \_test

▸ `Private` **_test**(): `void`

**`internal`**

#### Returns

`void`

#### Defined in

[TestBase.ts:155](https://github.com/AdityaHegde/typescript-test-utils/blob/d427cc5/src/TestBase.ts#L155)

___

### declareAfter

▸ `Protected` `Abstract` **declareAfter**(`afterCallback`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `afterCallback` | () => `Promise`<`void`\> |

#### Returns

`any`

#### Defined in

[TestBase.ts:150](https://github.com/AdityaHegde/typescript-test-utils/blob/d427cc5/src/TestBase.ts#L150)

___

### declareAfterEach

▸ `Protected` `Abstract` **declareAfterEach**(`afterEachCallback`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `afterEachCallback` | () => `Promise`<`void`\> |

#### Returns

`any`

#### Defined in

[TestBase.ts:146](https://github.com/AdityaHegde/typescript-test-utils/blob/d427cc5/src/TestBase.ts#L146)

___

### declareBefore

▸ `Protected` `Abstract` **declareBefore**(`beforeCallback`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `beforeCallback` | () => `Promise`<`void`\> |

#### Returns

`any`

#### Defined in

[TestBase.ts:134](https://github.com/AdityaHegde/typescript-test-utils/blob/d427cc5/src/TestBase.ts#L134)

___

### declareBeforeEach

▸ `Protected` `Abstract` **declareBeforeEach**(`beforeEachCallback`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `beforeEachCallback` | () => `Promise`<`void`\> |

#### Returns

`any`

#### Defined in

[TestBase.ts:138](https://github.com/AdityaHegde/typescript-test-utils/blob/d427cc5/src/TestBase.ts#L138)

___

### declareSuite

▸ `Protected` `Abstract` **declareSuite**(`suiteTitle`, `suiteCallback`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `suiteTitle` | `string` |
| `suiteCallback` | () => `void` |

#### Returns

`any`

#### Defined in

[TestBase.ts:130](https://github.com/AdityaHegde/typescript-test-utils/blob/d427cc5/src/TestBase.ts#L130)

___

### declareTest

▸ `Protected` `Abstract` **declareTest**(`testTitle`, `testCallback`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `testTitle` | `string` |
| `testCallback` | () => `Promise`<`void`\> |

#### Returns

`any`

#### Defined in

[TestBase.ts:142](https://github.com/AdityaHegde/typescript-test-utils/blob/d427cc5/src/TestBase.ts#L142)

___

### registerDataProvider

▸ `Private` **registerDataProvider**(`data`, `testParams`): `void`

**`internal`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`DataProviderData`](../modules/index.md#dataproviderdata)<`any`\> |
| `testParams` | `TestParams` |

#### Returns

`void`

#### Defined in

[TestBase.ts:220](https://github.com/AdityaHegde/typescript-test-utils/blob/d427cc5/src/TestBase.ts#L220)

___

### registerTest

▸ `Private` **registerTest**(`testParams`): `void`

**`internal`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `testParams` | `TestParams` |

#### Returns

`void`

#### Defined in

[TestBase.ts:207](https://github.com/AdityaHegde/typescript-test-utils/blob/d427cc5/src/TestBase.ts#L207)

___

### test

▸ **test**(): `void`

#### Returns

`void`

#### Defined in

[TestBase.ts:120](https://github.com/AdityaHegde/typescript-test-utils/blob/d427cc5/src/TestBase.ts#L120)

___

### AfterEachTest

▸ `Static` **AfterEachTest**(): (`target`: [`TestBase`](index.TestBase.md), `propertyKey`: `string`) => `void`

#### Returns

`fn`

▸ (`target`, `propertyKey`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`TestBase`](index.TestBase.md) |
| `propertyKey` | `string` |

##### Returns

`void`

#### Defined in

[TestBase.ts:101](https://github.com/AdityaHegde/typescript-test-utils/blob/d427cc5/src/TestBase.ts#L101)

___

### AfterSuite

▸ `Static` **AfterSuite**(): (`target`: [`TestBase`](index.TestBase.md), `propertyKey`: `string`) => `void`

#### Returns

`fn`

▸ (`target`, `propertyKey`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`TestBase`](index.TestBase.md) |
| `propertyKey` | `string` |

##### Returns

`void`

#### Defined in

[TestBase.ts:92](https://github.com/AdityaHegde/typescript-test-utils/blob/d427cc5/src/TestBase.ts#L92)

___

### BeforeEachTest

▸ `Static` **BeforeEachTest**(): (`target`: [`TestBase`](index.TestBase.md), `propertyKey`: `string`) => `void`

#### Returns

`fn`

▸ (`target`, `propertyKey`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`TestBase`](index.TestBase.md) |
| `propertyKey` | `string` |

##### Returns

`void`

#### Defined in

[TestBase.ts:83](https://github.com/AdityaHegde/typescript-test-utils/blob/d427cc5/src/TestBase.ts#L83)

___

### BeforeSuite

▸ `Static` **BeforeSuite**(): (`target`: [`TestBase`](index.TestBase.md), `propertyKey`: `string`) => `void`

#### Returns

`fn`

▸ (`target`, `propertyKey`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`TestBase`](index.TestBase.md) |
| `propertyKey` | `string` |

##### Returns

`void`

#### Defined in

[TestBase.ts:74](https://github.com/AdityaHegde/typescript-test-utils/blob/d427cc5/src/TestBase.ts#L74)

___

### ParameterizedSuite

▸ `Static` **ParameterizedSuite**(`params`): (`constructor`: `any`) => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `any`[] |

#### Returns

`fn`

▸ (`constructor`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `constructor` | `any` |

##### Returns

`void`

#### Defined in

[TestBase.ts:58](https://github.com/AdityaHegde/typescript-test-utils/blob/d427cc5/src/TestBase.ts#L58)

___

### Suite

▸ `Static` **Suite**(`constructor`): `void`

Automatically adds the tests for the class. Useful when the test class is standalone.

#### Parameters

| Name | Type |
| :------ | :------ |
| `constructor` | `any` |

#### Returns

`void`

#### Defined in

[TestBase.ts:49](https://github.com/AdityaHegde/typescript-test-utils/blob/d427cc5/src/TestBase.ts#L49)

___

### Test

▸ `Static` **Test**(`dataProvider?`): (`target`: [`TestBase`](index.TestBase.md), `propertyKey`: `string`) => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dataProvider?` | `string` |

#### Returns

`fn`

▸ (`target`, `propertyKey`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`TestBase`](index.TestBase.md) |
| `propertyKey` | `string` |

##### Returns

`void`

#### Defined in

[TestBase.ts:110](https://github.com/AdityaHegde/typescript-test-utils/blob/d427cc5/src/TestBase.ts#L110)

___

### createTestHookData

▸ `Static` `Private` **createTestHookData**(`target`): typeof [`TestBase`](index.TestBase.md)

**`internal`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |

#### Returns

typeof [`TestBase`](index.TestBase.md)

#### Defined in

[TestBase.ts:260](https://github.com/AdityaHegde/typescript-test-utils/blob/d427cc5/src/TestBase.ts#L260)
