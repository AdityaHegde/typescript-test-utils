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

[TestBase.ts:7](https://github.com/AdityaHegde/typescript-test-utils/blob/d457a6f/src/TestBase.ts#L7)

___

### TestSuiteParameter

Ƭ **TestSuiteParameter**: { `TestSuiteSetupClasses?`: typeof [`TestSuiteSetup`](classes/TestSuiteSetup.md)[] ; `suiteTitle`: `string`  } & `Record`<`any`, `any`\>

#### Defined in

[TestBase.ts:12](https://github.com/AdityaHegde/typescript-test-utils/blob/d457a6f/src/TestBase.ts#L12)

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

[getClassName.ts:4](https://github.com/AdityaHegde/typescript-test-utils/blob/d457a6f/src/getClassName.ts#L4)
