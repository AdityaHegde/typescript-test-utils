[@adityahegde/typescript-test-utils](../README.md) / [Modules](../modules.md) / [jest](../modules/jest.md) / JestTestBase

# Class: JestTestBase

[jest](../modules/jest.md).JestTestBase

## Hierarchy

- [`TestBase`](index.TestBase.md)

  ↳ **`JestTestBase`**

## Table of contents

### Constructors

- [constructor](jest.JestTestBase.md#constructor)

### Properties

- [sandbox](jest.JestTestBase.md#sandbox)
- [suiteTitle](jest.JestTestBase.md#suitetitle)
- [\_testHookData](jest.JestTestBase.md#_testhookdata)

### Methods

- [declareAfter](jest.JestTestBase.md#declareafter)
- [declareAfterEach](jest.JestTestBase.md#declareaftereach)
- [declareBefore](jest.JestTestBase.md#declarebefore)
- [declareBeforeEach](jest.JestTestBase.md#declarebeforeeach)
- [declareSuite](jest.JestTestBase.md#declaresuite)
- [declareTest](jest.JestTestBase.md#declaretest)
- [test](jest.JestTestBase.md#test)
- [AfterEachTest](jest.JestTestBase.md#aftereachtest)
- [AfterSuite](jest.JestTestBase.md#aftersuite)
- [BeforeEachTest](jest.JestTestBase.md#beforeeachtest)
- [BeforeSuite](jest.JestTestBase.md#beforesuite)
- [ParameterizedSuite](jest.JestTestBase.md#parameterizedsuite)
- [Suite](jest.JestTestBase.md#suite)
- [Test](jest.JestTestBase.md#test)

## Constructors

### constructor

• **new JestTestBase**(`suiteTitle`)

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

[jest/JestTestBase.ts:50](https://github.com/AdityaHegde/typescript-test-utils/blob/d427cc5/src/jest/JestTestBase.ts#L50)

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

[jest/JestTestBase.ts:42](https://github.com/AdityaHegde/typescript-test-utils/blob/d427cc5/src/jest/JestTestBase.ts#L42)

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

[jest/JestTestBase.ts:18](https://github.com/AdityaHegde/typescript-test-utils/blob/d427cc5/src/jest/JestTestBase.ts#L18)

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

[jest/JestTestBase.ts:26](https://github.com/AdityaHegde/typescript-test-utils/blob/d427cc5/src/jest/JestTestBase.ts#L26)

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

[jest/JestTestBase.ts:10](https://github.com/AdityaHegde/typescript-test-utils/blob/d427cc5/src/jest/JestTestBase.ts#L10)

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

[jest/JestTestBase.ts:34](https://github.com/AdityaHegde/typescript-test-utils/blob/d427cc5/src/jest/JestTestBase.ts#L34)

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
