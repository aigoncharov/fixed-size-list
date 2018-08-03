[fixed-size-list](../README.md) > [FixedSizeList](../classes/fixedsizelist.md)

# Class: FixedSizeList

## Type parameters
#### T 
## Hierarchy

**FixedSizeList**

## Index

### Constructors

* [constructor](fixedsizelist.md#constructor)

### Properties

* [eventEmitter](fixedsizelist.md#eventemitter)
* [maxSize](fixedsizelist.md#maxsize)

### Accessors

* [length](fixedsizelist.md#length)

### Methods

* [__@iterator](fixedsizelist.md#___iterator)
* [add](fixedsizelist.md#add)
* [get](fixedsizelist.md#get)
* [reset](fixedsizelist.md#reset)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new FixedSizeList**(maxSize: *`number`*, _list?: *`T`[]*, eventEmitter?: *`EventEmitter`< `unique symbol` &#124; `unique symbol` &#124; `unique symbol` &#124; `unique symbol`>*): [FixedSizeList](fixedsizelist.md)

**Parameters:**

| Param | Type | Default value |
| ------ | ------ | ------ |
| maxSize | `number` | - |
| `Default value` _list | `T`[] |  [] |
| `Default value` eventEmitter | `EventEmitter`< `unique symbol` &#124; `unique symbol` &#124; `unique symbol` &#124; `unique symbol`> |  new EventEmitter&lt;IFixedSizeListEvents&gt;() |

**Returns:** [FixedSizeList](fixedsizelist.md)

___

## Properties

<a id="eventemitter"></a>

###  eventEmitter

**● eventEmitter**: *`EventEmitter`< `unique symbol` &#124; `unique symbol` &#124; `unique symbol` &#124; `unique symbol`>*

___
<a id="maxsize"></a>

###  maxSize

**● maxSize**: *`number`*

___

## Accessors

<a id="length"></a>

###  length

getlength(): `number`

**Returns:** `number`

___

## Methods

<a id="___iterator"></a>

###  __@iterator

▸ **__@iterator**(): `IterableIterator`<`T`>

**Returns:** `IterableIterator`<`T`>

___
<a id="add"></a>

###  add

▸ **add**(newEl: *`T`*): `number`

**Parameters:**

| Param | Type |
| ------ | ------ |
| newEl | `T` |

**Returns:** `number`

___
<a id="get"></a>

###  get

▸ **get**(index: *`number`*):  `T` &#124; `undefined`

**Parameters:**

| Param | Type |
| ------ | ------ |
| index | `number` |

**Returns:**  `T` &#124; `undefined`

___
<a id="reset"></a>

###  reset

▸ **reset**(): `void`

**Returns:** `void`

___

