[@adityahegde/typescript-test-utils](../README.md) / [Modules](../modules.md) / TestBase

# Class: TestBase<Parameter\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `Parameter` | extends [`TestSuiteParameter`](../modules.md#testsuiteparameter) = [`TestSuiteParameter`](../modules.md#testsuiteparameter) |

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

• **new TestBase**<`Parameter`\>(`testSuiteParameter`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Parameter` | extends [`TestSuiteParameter`](../modules.md#testsuiteparameter) = [`TestSuiteParameter`](../modules.md#testsuiteparameter) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `testSuiteParameter` | `Parameter` |

#### Defined in

[TestBase.ts:34](https://github.com/AdityaHegde/typescript-test-utils/blob/eefd4f7/src/TestBase.ts#L34)

## Properties

### sandbox

• `Protected` **sandbox**: `SinonSandbox`

#### Defined in

[TestBase.ts:26](https://github.com/AdityaHegde/typescript-test-utils/blob/eefd4f7/src/TestBase.ts#L26)

___

### suiteTitle

• `Protected` `Readonly` **suiteTitle**: `string`

#### Defined in

[TestBase.ts:32](https://github.com/AdityaHegde/typescript-test-utils/blob/eefd4f7/src/TestBase.ts#L32)

___

### testLibrary

• `Protected` **testLibrary**: `TestLibrary`

#### Defined in

[TestBase.ts:27](https://github.com/AdityaHegde/typescript-test-utils/blob/eefd4f7/src/TestBase.ts#L27)

___

### testSuiteParameter

• `Protected` **testSuiteParameter**: `Parameter`

#### Defined in

[TestBase.ts:29](https://github.com/AdityaHegde/typescript-test-utils/blob/eefd4f7/src/TestBase.ts#L29)

___

### testSuiteSetups

• `Protected` **testSuiteSetups**: [`TestSuiteSetup`](TestSuiteSetup.md)<[`TestSuiteParameter`](../modules.md#testsuiteparameter)\>[]

#### Defined in

[TestBase.ts:28](https://github.com/AdityaHegde/typescript-test-utils/blob/eefd4f7/src/TestBase.ts#L28)

___

### testsStarted

• `Private` **testsStarted**: `boolean` = `false`

#### Defined in

[TestBase.ts:31](https://github.com/AdityaHegde/typescript-test-utils/blob/eefd4f7/src/TestBase.ts#L31)

___

### \_testHookData

▪ `Static` **\_testHookData**: `TestHookData`

#### Defined in

[TestBase.ts:24](https://github.com/AdityaHegde/typescript-test-utils/blob/eefd4f7/src/TestBase.ts#L24)

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

[TestBase.ts:256](https://github.com/AdityaHegde/typescript-test-utils/blob/eefd4f7/src/TestBase.ts#L256)

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

[TestBase.ts:266](https://github.com/AdityaHegde/typescript-test-utils/blob/eefd4f7/src/TestBase.ts#L266)

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

[TestBase.ts:217](https://github.com/AdityaHegde/typescript-test-utils/blob/eefd4f7/src/TestBase.ts#L217)

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

[TestBase.ts:204](https://github.com/AdityaHegde/typescript-test-utils/blob/eefd4f7/src/TestBase.ts#L204)

___

### \_test

▸ `Private` **_test**(): `void`

**`internal`**

#### Returns

`void`

#### Defined in

[TestBase.ts:176](https://github.com/AdityaHegde/typescript-test-utils/blob/eefd4f7/src/TestBase.ts#L176)

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

[TestBase.ts:154](https://github.com/AdityaHegde/typescript-test-utils/blob/eefd4f7/src/TestBase.ts#L154)

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

[TestBase.ts:160](https://github.com/AdityaHegde/typescript-test-utils/blob/eefd4f7/src/TestBase.ts#L160)

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

[TestBase.ts:240](https://github.com/AdityaHegde/typescript-test-utils/blob/eefd4f7/src/TestBase.ts#L240)

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

[TestBase.ts:229](https://github.com/AdityaHegde/typescript-test-utils/blob/eefd4f7/src/TestBase.ts#L229)

___

### test

▸ **test**(): `void`

#### Returns

`void`

#### Defined in

[TestBase.ts:144](https://github.com/AdityaHegde/typescript-test-utils/blob/eefd4f7/src/TestBase.ts#L144)

___

### AfterEachTest

▸ `Static` **AfterEachTest**(): (`target`: [`TestBase`](TestBase.md)<[`TestSuiteParameter`](../modules.md#testsuiteparameter)\>, `propertyKey`: `string`) => `void`

#### Returns

`fn`

▸ (`target`, `propertyKey`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`TestBase`](TestBase.md)<[`TestSuiteParameter`](../modules.md#testsuiteparameter)\> |
| `propertyKey` | `string` |

##### Returns

`void`

#### Defined in

[TestBase.ts:102](https://github.com/AdityaHegde/typescript-test-utils/blob/eefd4f7/src/TestBase.ts#L102)

___

### AfterSuite

▸ `Static` **AfterSuite**(): (`target`: [`TestBase`](TestBase.md)<[`TestSuiteParameter`](../modules.md#testsuiteparameter)\>, `propertyKey`: `string`) => `void`

#### Returns

`fn`

▸ (`target`, `propertyKey`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`TestBase`](TestBase.md)<[`TestSuiteParameter`](../modules.md#testsuiteparameter)\> |
| `propertyKey` | `string` |

##### Returns

`void`

#### Defined in

[TestBase.ts:93](https://github.com/AdityaHegde/typescript-test-utils/blob/eefd4f7/src/TestBase.ts#L93)

___

### BeforeEachTest

▸ `Static` **BeforeEachTest**(): (`target`: [`TestBase`](TestBase.md)<[`TestSuiteParameter`](../modules.md#testsuiteparameter)\>, `propertyKey`: `string`) => `void`

#### Returns

`fn`

▸ (`target`, `propertyKey`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`TestBase`](TestBase.md)<[`TestSuiteParameter`](../modules.md#testsuiteparameter)\> |
| `propertyKey` | `string` |

##### Returns

`void`

#### Defined in

[TestBase.ts:84](https://github.com/AdityaHegde/typescript-test-utils/blob/eefd4f7/src/TestBase.ts#L84)

___

### BeforeSuite

▸ `Static` **BeforeSuite**(): (`target`: [`TestBase`](TestBase.md)<[`TestSuiteParameter`](../modules.md#testsuiteparameter)\>, `propertyKey`: `string`) => `void`

#### Returns

`fn`

▸ (`target`, `propertyKey`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`TestBase`](TestBase.md)<[`TestSuiteParameter`](../modules.md#testsuiteparameter)\> |
| `propertyKey` | `string` |

##### Returns

`void`

#### Defined in

[TestBase.ts:75](https://github.com/AdityaHegde/typescript-test-utils/blob/eefd4f7/src/TestBase.ts#L75)

___

### ParameterizedSuite

▸ `Static` **ParameterizedSuite**<`P`, `C`\>(`params`): (`c`: `C`) => `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`TestSuiteParameter`](../modules.md#testsuiteparameter) |
| `C` | extends `TestBaseClass`<`P`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `P`[] |

#### Returns

`fn`

▸ (`c`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `c` | `C` |

##### Returns

`void`

#### Defined in

[TestBase.ts:56](https://github.com/AdityaHegde/typescript-test-utils/blob/eefd4f7/src/TestBase.ts#L56)

___

### Suite

▸ `Static` **Suite**(`constructor`): `void`

Automatically adds the tests for the class. Useful when the test class is standalone.

#### Parameters

| Name | Type |
| :------ | :------ |
| `constructor` | `TestBaseClass`<`any`\> |

#### Returns

`void`

#### Defined in

[TestBase.ts:47](https://github.com/AdityaHegde/typescript-test-utils/blob/eefd4f7/src/TestBase.ts#L47)

___

### Test

▸ `Static` **Test**(`dataProvider?`): (`target`: [`TestBase`](TestBase.md)<[`TestSuiteParameter`](../modules.md#testsuiteparameter)\>, `propertyKey`: `string`) => `void`

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
| `target` | [`TestBase`](TestBase.md)<[`TestSuiteParameter`](../modules.md#testsuiteparameter)\> |
| `propertyKey` | `string` |

##### Returns

`void`

#### Defined in

[TestBase.ts:111](https://github.com/AdityaHegde/typescript-test-utils/blob/eefd4f7/src/TestBase.ts#L111)

___

### TestLibrary

▸ `Static` **TestLibrary**<`P`, `C`\>(`TestLibraryClass`): (`c`: `C`) => `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`TestSuiteParameter`](../modules.md#testsuiteparameter) |
| `C` | extends `TestBaseClass`<`P`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `TestLibraryClass` | `TestLibraryClassType` |

#### Returns

`fn`

▸ (`c`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `c` | `C` |

##### Returns

`void`

#### Defined in

[TestBase.ts:124](https://github.com/AdityaHegde/typescript-test-utils/blob/eefd4f7/src/TestBase.ts#L124)

___

### TestSuiteSetup

▸ `Static` **TestSuiteSetup**(`TestSuiteSetupClass`): (`constructor`: `TestBaseClass`<`any`\>) => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `TestSuiteSetupClass` | `TestSuiteSetupClassType` |

#### Returns

`fn`

▸ (`constructor`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `constructor` | `TestBaseClass`<`any`\> |

##### Returns

`void`

#### Defined in

[TestBase.ts:137](https://github.com/AdityaHegde/typescript-test-utils/blob/eefd4f7/src/TestBase.ts#L137)

___

### createTestHookData

▸ `Static` `Private` **createTestHookData**(`constructor`): `TestBaseClass`<`any`\>

**`internal`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `constructor` | `TestBaseClass`<`any`\> |

#### Returns

`TestBaseClass`<`any`\>

#### Defined in

[TestBase.ts:279](https://github.com/AdityaHegde/typescript-test-utils/blob/eefd4f7/src/TestBase.ts#L279)
