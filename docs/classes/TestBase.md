[@adityahegde/typescript-test-utils](../README.md) / [Modules](../modules.md) / TestBase

# Class: TestBase

## Table of contents

### Constructors

- [constructor](TestBase.md#constructor)

### Properties

- [sandbox](TestBase.md#sandbox)
- [suiteTitle](TestBase.md#suitetitle)
- [testLibrary](TestBase.md#testlibrary)
- [testsStarted](TestBase.md#testsstarted)
- [\_testHookData](TestBase.md#_testhookdata)

### Methods

- [\_afterEachWrapper](TestBase.md#_aftereachwrapper)
- [\_afterWrapper](TestBase.md#_afterwrapper)
- [\_beforeEachWrapper](TestBase.md#_beforeeachwrapper)
- [\_beforeWrapper](TestBase.md#_beforewrapper)
- [\_test](TestBase.md#_test)
- [declareSuite](TestBase.md#declaresuite)
- [declareTest](TestBase.md#declaretest)
- [registerDataProvider](TestBase.md#registerdataprovider)
- [registerTest](TestBase.md#registertest)
- [test](TestBase.md#test)
- [AfterEachTest](TestBase.md#aftereachtest)
- [AfterSuite](TestBase.md#aftersuite)
- [BeforeEachTest](TestBase.md#beforeeachtest)
- [BeforeSuite](TestBase.md#beforesuite)
- [ParameterizedSuite](TestBase.md#parameterizedsuite)
- [Suite](TestBase.md#suite)
- [Test](TestBase.md#test)
- [TestLibrary](TestBase.md#testlibrary)
- [createTestHookData](TestBase.md#createtesthookdata)

## Constructors

### constructor

• **new TestBase**(`suiteTitle`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `suiteTitle` | `string` |

#### Defined in

[TestBase.ts:24](https://github.com/AdityaHegde/typescript-test-utils/blob/a88ec42/src/TestBase.ts#L24)

## Properties

### sandbox

• `Protected` **sandbox**: `any`

#### Defined in

[TestBase.ts:18](https://github.com/AdityaHegde/typescript-test-utils/blob/a88ec42/src/TestBase.ts#L18)

___

### suiteTitle

• `Protected` `Readonly` **suiteTitle**: `string`

#### Defined in

[TestBase.ts:22](https://github.com/AdityaHegde/typescript-test-utils/blob/a88ec42/src/TestBase.ts#L22)

___

### testLibrary

• `Protected` **testLibrary**: `TestLibrary`

#### Defined in

[TestBase.ts:19](https://github.com/AdityaHegde/typescript-test-utils/blob/a88ec42/src/TestBase.ts#L19)

___

### testsStarted

• `Private` **testsStarted**: `boolean` = `false`

#### Defined in

[TestBase.ts:21](https://github.com/AdityaHegde/typescript-test-utils/blob/a88ec42/src/TestBase.ts#L21)

___

### \_testHookData

▪ `Static` `Protected` **\_testHookData**: `TestHookData`

#### Defined in

[TestBase.ts:16](https://github.com/AdityaHegde/typescript-test-utils/blob/a88ec42/src/TestBase.ts#L16)

## Methods

### \_afterEachWrapper

▸ `Private` **_afterEachWrapper**(...`args`): `Promise`<`void`\>

**`internal`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Returns

`Promise`<`void`\>

#### Defined in

[TestBase.ts:215](https://github.com/AdityaHegde/typescript-test-utils/blob/a88ec42/src/TestBase.ts#L215)

___

### \_afterWrapper

▸ `Private` **_afterWrapper**(...`args`): `Promise`<`void`\>

**`internal`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Returns

`Promise`<`void`\>

#### Defined in

[TestBase.ts:225](https://github.com/AdityaHegde/typescript-test-utils/blob/a88ec42/src/TestBase.ts#L225)

___

### \_beforeEachWrapper

▸ `Private` **_beforeEachWrapper**(...`args`): `Promise`<`void`\>

**`internal`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Returns

`Promise`<`void`\>

#### Defined in

[TestBase.ts:176](https://github.com/AdityaHegde/typescript-test-utils/blob/a88ec42/src/TestBase.ts#L176)

___

### \_beforeWrapper

▸ `Private` **_beforeWrapper**(...`args`): `Promise`<`void`\>

**`internal`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Returns

`Promise`<`void`\>

#### Defined in

[TestBase.ts:164](https://github.com/AdityaHegde/typescript-test-utils/blob/a88ec42/src/TestBase.ts#L164)

___

### \_test

▸ `Private` **_test**(): `void`

**`internal`**

#### Returns

`void`

#### Defined in

[TestBase.ts:136](https://github.com/AdityaHegde/typescript-test-utils/blob/a88ec42/src/TestBase.ts#L136)

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

#### Defined in

[TestBase.ts:121](https://github.com/AdityaHegde/typescript-test-utils/blob/a88ec42/src/TestBase.ts#L121)

___

### declareTest

▸ `Protected` **declareTest**(`testTitle`, `testMethodName`, `testArgs`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `testTitle` | `string` |
| `testMethodName` | `string` |
| `testArgs` | `any`[] |

#### Returns

`void`

#### Defined in

[TestBase.ts:127](https://github.com/AdityaHegde/typescript-test-utils/blob/a88ec42/src/TestBase.ts#L127)

___

### registerDataProvider

▸ `Private` **registerDataProvider**(`data`, `testParams`): `void`

**`internal`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`DataProviderData`](../modules.md#dataproviderdata)<`any`\> |
| `testParams` | `TestParams` |

#### Returns

`void`

#### Defined in

[TestBase.ts:199](https://github.com/AdityaHegde/typescript-test-utils/blob/a88ec42/src/TestBase.ts#L199)

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

[TestBase.ts:188](https://github.com/AdityaHegde/typescript-test-utils/blob/a88ec42/src/TestBase.ts#L188)

___

### test

▸ **test**(): `void`

#### Returns

`void`

#### Defined in

[TestBase.ts:111](https://github.com/AdityaHegde/typescript-test-utils/blob/a88ec42/src/TestBase.ts#L111)

___

### AfterEachTest

▸ `Static` **AfterEachTest**(): (`target`: [`TestBase`](TestBase.md), `propertyKey`: `string`) => `void`

#### Returns

`fn`

▸ (`target`, `propertyKey`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`TestBase`](TestBase.md) |
| `propertyKey` | `string` |

##### Returns

`void`

#### Defined in

[TestBase.ts:82](https://github.com/AdityaHegde/typescript-test-utils/blob/a88ec42/src/TestBase.ts#L82)

___

### AfterSuite

▸ `Static` **AfterSuite**(): (`target`: [`TestBase`](TestBase.md), `propertyKey`: `string`) => `void`

#### Returns

`fn`

▸ (`target`, `propertyKey`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`TestBase`](TestBase.md) |
| `propertyKey` | `string` |

##### Returns

`void`

#### Defined in

[TestBase.ts:73](https://github.com/AdityaHegde/typescript-test-utils/blob/a88ec42/src/TestBase.ts#L73)

___

### BeforeEachTest

▸ `Static` **BeforeEachTest**(): (`target`: [`TestBase`](TestBase.md), `propertyKey`: `string`) => `void`

#### Returns

`fn`

▸ (`target`, `propertyKey`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`TestBase`](TestBase.md) |
| `propertyKey` | `string` |

##### Returns

`void`

#### Defined in

[TestBase.ts:64](https://github.com/AdityaHegde/typescript-test-utils/blob/a88ec42/src/TestBase.ts#L64)

___

### BeforeSuite

▸ `Static` **BeforeSuite**(): (`target`: [`TestBase`](TestBase.md), `propertyKey`: `string`) => `void`

#### Returns

`fn`

▸ (`target`, `propertyKey`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`TestBase`](TestBase.md) |
| `propertyKey` | `string` |

##### Returns

`void`

#### Defined in

[TestBase.ts:55](https://github.com/AdityaHegde/typescript-test-utils/blob/a88ec42/src/TestBase.ts#L55)

___

### ParameterizedSuite

▸ `Static` **ParameterizedSuite**<`T`\>(`params`): (`constructor`: `any`) => `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends (...`args`: `any`) => `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `GetConstructorParams`<`T`\>[] |

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

[TestBase.ts:42](https://github.com/AdityaHegde/typescript-test-utils/blob/a88ec42/src/TestBase.ts#L42)

___

### Suite

▸ `Static` **Suite**(`constructor`): `void`

Automatically adds the tests for the class. Useful when the test class is standalone.

#### Parameters

| Name | Type |
| :------ | :------ |
| `constructor` | typeof [`TestBase`](TestBase.md) |

#### Returns

`void`

#### Defined in

[TestBase.ts:32](https://github.com/AdityaHegde/typescript-test-utils/blob/a88ec42/src/TestBase.ts#L32)

___

### Test

▸ `Static` **Test**(`dataProvider?`): (`target`: [`TestBase`](TestBase.md), `propertyKey`: `string`) => `void`

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
| `target` | [`TestBase`](TestBase.md) |
| `propertyKey` | `string` |

##### Returns

`void`

#### Defined in

[TestBase.ts:91](https://github.com/AdityaHegde/typescript-test-utils/blob/a88ec42/src/TestBase.ts#L91)

___

### TestLibrary

▸ `Static` **TestLibrary**(`TestLibraryClass`): (`constructor`: `any`) => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `TestLibraryClass` | `TestLibraryClassType` |

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

[TestBase.ts:104](https://github.com/AdityaHegde/typescript-test-utils/blob/a88ec42/src/TestBase.ts#L104)

___

### createTestHookData

▸ `Static` `Private` **createTestHookData**(`constructor`): typeof [`TestBase`](TestBase.md)

**`internal`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `constructor` | typeof [`TestBase`](TestBase.md) |

#### Returns

typeof [`TestBase`](TestBase.md)

#### Defined in

[TestBase.ts:237](https://github.com/AdityaHegde/typescript-test-utils/blob/a88ec42/src/TestBase.ts#L237)
