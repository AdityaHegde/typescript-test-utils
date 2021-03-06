[@adityahegde/typescript-test-utils](README.md) / Modules

# @adityahegde/typescript-test-utils

## Table of contents

### Classes

- [TestBase](classes/TestBase.md)
- [TestSuiteSetup](classes/TestSuiteSetup.md)

### Type aliases

- [DataProviderData](modules.md#dataproviderdata)
- [TestSuiteParameter](modules.md#testsuiteparameter)

### Functions

- [getClassName](modules.md#getclassname)

## Type aliases

### DataProviderData

Ƭ **DataProviderData**<`Type`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Type` | `any` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `args?` | `Type` |
| `subData?` | [`DataProviderData`](modules.md#dataproviderdata)<`Type`\>[] |
| `title?` | `string` |

#### Defined in

[TestBase.ts:7](https://github.com/AdityaHegde/typescript-test-utils/blob/637aef5/src/TestBase.ts#L7)

___

### TestSuiteParameter

Ƭ **TestSuiteParameter**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `TestSuiteSetupClasses?` | `TestSuiteSetupClassType`[] |
| `suiteTitle?` | `string` |

#### Defined in

[TestBase.ts:12](https://github.com/AdityaHegde/typescript-test-utils/blob/637aef5/src/TestBase.ts#L12)

## Functions

### getClassName

▸ **getClassName**(`clazz`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `clazz` | `any` |

#### Returns

`any`

#### Defined in

[getClassName.ts:4](https://github.com/AdityaHegde/typescript-test-utils/blob/637aef5/src/getClassName.ts#L4)
