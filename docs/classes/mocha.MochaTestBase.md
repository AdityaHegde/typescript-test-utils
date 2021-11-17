[@adityahegde/typescript-test-utils](../README.md) / [Modules](../modules.md) / [mocha](../modules/mocha.md) / MochaTestBase

# Class: MochaTestBase

[mocha](../modules/mocha.md).MochaTestBase

## Hierarchy

- [`TestBase`](index.TestBase.md)

  ↳ **`MochaTestBase`**

## Table of contents

### Constructors

- [constructor](mocha.MochaTestBase.md#constructor)

### Properties

- [sandbox](mocha.MochaTestBase.md#sandbox)
- [suiteTitle](mocha.MochaTestBase.md#suitetitle)
- [\_testHookData](mocha.MochaTestBase.md#_testhookdata)

### Methods

- [declareAfter](mocha.MochaTestBase.md#declareafter)
- [declareAfterEach](mocha.MochaTestBase.md#declareaftereach)
- [declareBefore](mocha.MochaTestBase.md#declarebefore)
- [declareBeforeEach](mocha.MochaTestBase.md#declarebeforeeach)
- [declareSuite](mocha.MochaTestBase.md#declaresuite)
- [declareTest](mocha.MochaTestBase.md#declaretest)
- [test](mocha.MochaTestBase.md#test)
- [AfterEachTest](mocha.MochaTestBase.md#aftereachtest)
- [AfterSuite](mocha.MochaTestBase.md#aftersuite)
- [BeforeEachTest](mocha.MochaTestBase.md#beforeeachtest)
- [BeforeSuite](mocha.MochaTestBase.md#beforesuite)
- [ParameterizedSuite](mocha.MochaTestBase.md#parameterizedsuite)
- [Suite](mocha.MochaTestBase.md#suite)
- [Test](mocha.MochaTestBase.md#test)

## Constructors

### constructor

• **new MochaTestBase**(`suiteTitle`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `suiteTitle` | `string` |

#### Inherited from

[TestBase](index.TestBase.md).[constructor](index.TestBase.md#constructor)

#### Defined in

[TestBase.ts:42](https://github.com/AdityaHegde/typescript-test-utils/blob/d427cc5/src/TestBase.ts#L42)

## Properties

### sandbox

• `Protected` **sandbox**: `any`

#### Inherited from

[TestBase](index.TestBase.md).[sandbox](index.TestBase.md#sandbox)

#### Defined in

[TestBase.ts:37](https://github.com/AdityaHegde/typescript-test-utils/blob/d427cc5/src/TestBase.ts#L37)

___

### suiteTitle

• `Protected` `Readonly` **suiteTitle**: `string`

#### Inherited from

[TestBase](index.TestBase.md).[suiteTitle](index.TestBase.md#suitetitle)

#### Defined in

[TestBase.ts:40](https://github.com/AdityaHegde/typescript-test-utils/blob/d427cc5/src/TestBase.ts#L40)

___

### \_testHookData

▪ `Static` `Protected` **\_testHookData**: `TestHookData`

#### Inherited from

[TestBase](index.TestBase.md).[_testHookData](index.TestBase.md#_testhookdata)

#### Defined in

[TestBase.ts:35](https://github.com/AdityaHegde/typescript-test-utils/blob/d427cc5/src/TestBase.ts#L35)

## Methods

### declareAfter

▸ `Protected` **declareAfter**(`afterCallback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `afterCallback` | () => `Promise`<`void`\> |

#### Returns

`void`

#### Overrides

[TestBase](index.TestBase.md).[declareAfter](index.TestBase.md#declareafter)

#### Defined in

[mocha/MochaTestBase.ts:47](https://github.com/AdityaHegde/typescript-test-utils/blob/d427cc5/src/mocha/MochaTestBase.ts#L47)

___

### declareAfterEach

▸ `Protected` **declareAfterEach**(`afterEachCallback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `afterEachCallback` | () => `Promise`<`void`\> |

#### Returns

`void`

#### Overrides

[TestBase](index.TestBase.md).[declareAfterEach](index.TestBase.md#declareaftereach)

#### Defined in

[mocha/MochaTestBase.ts:39](https://github.com/AdityaHegde/typescript-test-utils/blob/d427cc5/src/mocha/MochaTestBase.ts#L39)

___

### declareBefore

▸ `Protected` **declareBefore**(`beforeCallback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `beforeCallback` | () => `Promise`<`void`\> |

#### Returns

`void`

#### Overrides

[TestBase](index.TestBase.md).[declareBefore](index.TestBase.md#declarebefore)

#### Defined in

[mocha/MochaTestBase.ts:15](https://github.com/AdityaHegde/typescript-test-utils/blob/d427cc5/src/mocha/MochaTestBase.ts#L15)

___

### declareBeforeEach

▸ `Protected` **declareBeforeEach**(`beforeEachCallback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `beforeEachCallback` | () => `Promise`<`void`\> |

#### Returns

`void`

#### Overrides

[TestBase](index.TestBase.md).[declareBeforeEach](index.TestBase.md#declarebeforeeach)

#### Defined in

[mocha/MochaTestBase.ts:23](https://github.com/AdityaHegde/typescript-test-utils/blob/d427cc5/src/mocha/MochaTestBase.ts#L23)

___

### declareSuite

▸ `Protected` **declareSuite**(`suiteTitle`, `suiteCallback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `suiteTitle` | `string` |
| `suiteCallback` | () => `void` |

#### Returns

`void`

#### Overrides

[TestBase](index.TestBase.md).[declareSuite](index.TestBase.md#declaresuite)

#### Defined in

[mocha/MochaTestBase.ts:7](https://github.com/AdityaHegde/typescript-test-utils/blob/d427cc5/src/mocha/MochaTestBase.ts#L7)

___

### declareTest

▸ `Protected` **declareTest**(`testTitle`, `testCallback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `testTitle` | `string` |
| `testCallback` | () => `Promise`<`void`\> |

#### Returns

`void`

#### Overrides

[TestBase](index.TestBase.md).[declareTest](index.TestBase.md#declaretest)

#### Defined in

[mocha/MochaTestBase.ts:31](https://github.com/AdityaHegde/typescript-test-utils/blob/d427cc5/src/mocha/MochaTestBase.ts#L31)

___

### test

▸ **test**(): `void`

#### Returns

`void`

#### Inherited from

[TestBase](index.TestBase.md).[test](index.TestBase.md#test)

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

#### Inherited from

[TestBase](index.TestBase.md).[AfterEachTest](index.TestBase.md#aftereachtest)

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

#### Inherited from

[TestBase](index.TestBase.md).[AfterSuite](index.TestBase.md#aftersuite)

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

#### Inherited from

[TestBase](index.TestBase.md).[BeforeEachTest](index.TestBase.md#beforeeachtest)

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

#### Inherited from

[TestBase](index.TestBase.md).[BeforeSuite](index.TestBase.md#beforesuite)

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

#### Inherited from

[TestBase](index.TestBase.md).[ParameterizedSuite](index.TestBase.md#parameterizedsuite)

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

#### Inherited from

[TestBase](index.TestBase.md).[Suite](index.TestBase.md#suite)

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

#### Inherited from

[TestBase](index.TestBase.md).[Test](index.TestBase.md#test)

#### Defined in

[TestBase.ts:110](https://github.com/AdityaHegde/typescript-test-utils/blob/d427cc5/src/TestBase.ts#L110)
