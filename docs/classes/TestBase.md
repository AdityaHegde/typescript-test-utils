[@adityahegde/typescript-test-utils](../README.md) / [Modules](../modules.md) / TestBase

# Class: TestBase

## Table of contents

### Constructors

- [constructor](TestBase.md#constructor)

### Properties

- [sandbox](TestBase.md#sandbox)
- [suiteTitle](TestBase.md#suitetitle)
- [testLibrary](TestBase.md#testlibrary)
- [testSuiteParameter](TestBase.md#testsuiteparameter)
- [testSuiteSetups](TestBase.md#testsuitesetups)
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
- [TestSuiteSetup](TestBase.md#testsuitesetup)
- [createTestHookData](TestBase.md#createtesthookdata)

## Constructors

### constructor

• **new TestBase**(`testSuiteParameter`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `testSuiteParameter` | [`TestSuiteParameter`](../modules.md#testsuiteparameter) |

#### Defined in

[TestBase.ts:30](https://github.com/AdityaHegde/typescript-test-utils/blob/b5280ad/src/TestBase.ts#L30)

## Properties

### sandbox

• `Protected` **sandbox**: `any`

#### Defined in

[TestBase.ts:22](https://github.com/AdityaHegde/typescript-test-utils/blob/b5280ad/src/TestBase.ts#L22)

___

### suiteTitle

• `Protected` `Readonly` **suiteTitle**: `string`

#### Defined in

[TestBase.ts:28](https://github.com/AdityaHegde/typescript-test-utils/blob/b5280ad/src/TestBase.ts#L28)

___

### testLibrary

• `Protected` **testLibrary**: `TestLibrary`

#### Defined in

[TestBase.ts:23](https://github.com/AdityaHegde/typescript-test-utils/blob/b5280ad/src/TestBase.ts#L23)

___

### testSuiteParameter

• `Protected` **testSuiteParameter**: [`TestSuiteParameter`](../modules.md#testsuiteparameter)

#### Defined in

[TestBase.ts:25](https://github.com/AdityaHegde/typescript-test-utils/blob/b5280ad/src/TestBase.ts#L25)

___

### testSuiteSetups

• `Protected` **testSuiteSetups**: [`TestSuiteSetup`](TestSuiteSetup.md)[]

#### Defined in

[TestBase.ts:24](https://github.com/AdityaHegde/typescript-test-utils/blob/b5280ad/src/TestBase.ts#L24)

___

### testsStarted

• `Private` **testsStarted**: `boolean` = `false`

#### Defined in

[TestBase.ts:27](https://github.com/AdityaHegde/typescript-test-utils/blob/b5280ad/src/TestBase.ts#L27)

___

### \_testHookData

▪ `Static` `Protected` **\_testHookData**: `TestHookData`

#### Defined in

[TestBase.ts:20](https://github.com/AdityaHegde/typescript-test-utils/blob/b5280ad/src/TestBase.ts#L20)

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

[TestBase.ts:244](https://github.com/AdityaHegde/typescript-test-utils/blob/b5280ad/src/TestBase.ts#L244)

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

[TestBase.ts:254](https://github.com/AdityaHegde/typescript-test-utils/blob/b5280ad/src/TestBase.ts#L254)

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

[TestBase.ts:205](https://github.com/AdityaHegde/typescript-test-utils/blob/b5280ad/src/TestBase.ts#L205)

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

[TestBase.ts:192](https://github.com/AdityaHegde/typescript-test-utils/blob/b5280ad/src/TestBase.ts#L192)

___

### \_test

▸ `Private` **_test**(): `void`

**`internal`**

#### Returns

`void`

#### Defined in

[TestBase.ts:164](https://github.com/AdityaHegde/typescript-test-utils/blob/b5280ad/src/TestBase.ts#L164)

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

[TestBase.ts:142](https://github.com/AdityaHegde/typescript-test-utils/blob/b5280ad/src/TestBase.ts#L142)

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

[TestBase.ts:148](https://github.com/AdityaHegde/typescript-test-utils/blob/b5280ad/src/TestBase.ts#L148)

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

[TestBase.ts:228](https://github.com/AdityaHegde/typescript-test-utils/blob/b5280ad/src/TestBase.ts#L228)

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

[TestBase.ts:217](https://github.com/AdityaHegde/typescript-test-utils/blob/b5280ad/src/TestBase.ts#L217)

___

### test

▸ **test**(): `void`

#### Returns

`void`

#### Defined in

[TestBase.ts:132](https://github.com/AdityaHegde/typescript-test-utils/blob/b5280ad/src/TestBase.ts#L132)

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

[TestBase.ts:93](https://github.com/AdityaHegde/typescript-test-utils/blob/b5280ad/src/TestBase.ts#L93)

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

[TestBase.ts:84](https://github.com/AdityaHegde/typescript-test-utils/blob/b5280ad/src/TestBase.ts#L84)

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

[TestBase.ts:75](https://github.com/AdityaHegde/typescript-test-utils/blob/b5280ad/src/TestBase.ts#L75)

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

[TestBase.ts:66](https://github.com/AdityaHegde/typescript-test-utils/blob/b5280ad/src/TestBase.ts#L66)

___

### ParameterizedSuite

▸ `Static` **ParameterizedSuite**(`params`): (`constructor`: typeof [`TestBase`](TestBase.md)) => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`TestSuiteParameter`](../modules.md#testsuiteparameter)[] |

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

[TestBase.ts:53](https://github.com/AdityaHegde/typescript-test-utils/blob/b5280ad/src/TestBase.ts#L53)

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

[TestBase.ts:43](https://github.com/AdityaHegde/typescript-test-utils/blob/b5280ad/src/TestBase.ts#L43)

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

[TestBase.ts:102](https://github.com/AdityaHegde/typescript-test-utils/blob/b5280ad/src/TestBase.ts#L102)

___

### TestLibrary

▸ `Static` **TestLibrary**(`TestLibraryClass`): (`constructor`: typeof [`TestBase`](TestBase.md)) => `void`

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
| `constructor` | typeof [`TestBase`](TestBase.md) |

##### Returns

`void`

#### Defined in

[TestBase.ts:115](https://github.com/AdityaHegde/typescript-test-utils/blob/b5280ad/src/TestBase.ts#L115)

___

### TestSuiteSetup

▸ `Static` **TestSuiteSetup**(`TestSuiteSetupClass`): (`constructor`: typeof [`TestBase`](TestBase.md)) => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `TestSuiteSetupClass` | typeof [`TestSuiteSetup`](TestSuiteSetup.md) |

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

[TestBase.ts:125](https://github.com/AdityaHegde/typescript-test-utils/blob/b5280ad/src/TestBase.ts#L125)

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

[TestBase.ts:267](https://github.com/AdityaHegde/typescript-test-utils/blob/b5280ad/src/TestBase.ts#L267)
