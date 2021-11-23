[@adityahegde/typescript-test-utils](../README.md) / [Modules](../modules.md) / TestBase

# Class: TestBase

## Table of contents

### Constructors

- [constructor](TestBase.md#constructor)

### Properties

- [sandbox](TestBase.md#sandbox)
- [suiteData](TestBase.md#suitedata)
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

• **new TestBase**(`suiteTitle`, `testData`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `suiteTitle` | `string` |
| `testData` | `Record`<`any`, `any`\> |

#### Defined in

[TestBase.ts:25](https://github.com/AdityaHegde/typescript-test-utils/blob/2f729df/src/TestBase.ts#L25)

## Properties

### sandbox

• `Protected` **sandbox**: `any`

#### Defined in

[TestBase.ts:18](https://github.com/AdityaHegde/typescript-test-utils/blob/2f729df/src/TestBase.ts#L18)

___

### suiteData

• `Protected` **suiteData**: `Record`<`any`, `any`\>

#### Defined in

[TestBase.ts:20](https://github.com/AdityaHegde/typescript-test-utils/blob/2f729df/src/TestBase.ts#L20)

___

### suiteTitle

• `Protected` `Readonly` **suiteTitle**: `string`

#### Defined in

[TestBase.ts:23](https://github.com/AdityaHegde/typescript-test-utils/blob/2f729df/src/TestBase.ts#L23)

___

### testLibrary

• `Protected` **testLibrary**: `TestLibrary`

#### Defined in

[TestBase.ts:19](https://github.com/AdityaHegde/typescript-test-utils/blob/2f729df/src/TestBase.ts#L19)

___

### testsStarted

• `Private` **testsStarted**: `boolean` = `false`

#### Defined in

[TestBase.ts:22](https://github.com/AdityaHegde/typescript-test-utils/blob/2f729df/src/TestBase.ts#L22)

___

### \_testHookData

▪ `Static` `Protected` **\_testHookData**: `TestHookData`

#### Defined in

[TestBase.ts:16](https://github.com/AdityaHegde/typescript-test-utils/blob/2f729df/src/TestBase.ts#L16)

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

[TestBase.ts:221](https://github.com/AdityaHegde/typescript-test-utils/blob/2f729df/src/TestBase.ts#L221)

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

[TestBase.ts:231](https://github.com/AdityaHegde/typescript-test-utils/blob/2f729df/src/TestBase.ts#L231)

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

[TestBase.ts:182](https://github.com/AdityaHegde/typescript-test-utils/blob/2f729df/src/TestBase.ts#L182)

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

[TestBase.ts:169](https://github.com/AdityaHegde/typescript-test-utils/blob/2f729df/src/TestBase.ts#L169)

___

### \_test

▸ `Private` **_test**(): `void`

**`internal`**

#### Returns

`void`

#### Defined in

[TestBase.ts:141](https://github.com/AdityaHegde/typescript-test-utils/blob/2f729df/src/TestBase.ts#L141)

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

[TestBase.ts:123](https://github.com/AdityaHegde/typescript-test-utils/blob/2f729df/src/TestBase.ts#L123)

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

[TestBase.ts:129](https://github.com/AdityaHegde/typescript-test-utils/blob/2f729df/src/TestBase.ts#L129)

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

[TestBase.ts:205](https://github.com/AdityaHegde/typescript-test-utils/blob/2f729df/src/TestBase.ts#L205)

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

[TestBase.ts:194](https://github.com/AdityaHegde/typescript-test-utils/blob/2f729df/src/TestBase.ts#L194)

___

### test

▸ **test**(): `void`

#### Returns

`void`

#### Defined in

[TestBase.ts:113](https://github.com/AdityaHegde/typescript-test-utils/blob/2f729df/src/TestBase.ts#L113)

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

[TestBase.ts:84](https://github.com/AdityaHegde/typescript-test-utils/blob/2f729df/src/TestBase.ts#L84)

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

[TestBase.ts:75](https://github.com/AdityaHegde/typescript-test-utils/blob/2f729df/src/TestBase.ts#L75)

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

[TestBase.ts:66](https://github.com/AdityaHegde/typescript-test-utils/blob/2f729df/src/TestBase.ts#L66)

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

[TestBase.ts:57](https://github.com/AdityaHegde/typescript-test-utils/blob/2f729df/src/TestBase.ts#L57)

___

### ParameterizedSuite

▸ `Static` **ParameterizedSuite**<`R`\>(`params`): (`constructor`: typeof [`TestBase`](TestBase.md)) => `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `R` | extends `Record`<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`string`, `R`][] |

#### Returns

`fn`

▸ (`constructor`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `constructor` | typeof [`TestBase`](TestBase.md) |

##### Returns

`void`

#### Defined in

[TestBase.ts:44](https://github.com/AdityaHegde/typescript-test-utils/blob/2f729df/src/TestBase.ts#L44)

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

[TestBase.ts:34](https://github.com/AdityaHegde/typescript-test-utils/blob/2f729df/src/TestBase.ts#L34)

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

[TestBase.ts:93](https://github.com/AdityaHegde/typescript-test-utils/blob/2f729df/src/TestBase.ts#L93)

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

[TestBase.ts:106](https://github.com/AdityaHegde/typescript-test-utils/blob/2f729df/src/TestBase.ts#L106)

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

[TestBase.ts:244](https://github.com/AdityaHegde/typescript-test-utils/blob/2f729df/src/TestBase.ts#L244)
