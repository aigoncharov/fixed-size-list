[fixed-size-list](../README.md) > [FixedSizeList](../classes/fixedsizelist.md)

# Class: FixedSizeList

*__description__*: Fixed size list. New elements are added to the beginning of the list. Removes elements from the end of the list if it becomes longer than maxSize. Has an event emitter and emits eventCreated, eventReset, eventNewItem, eventTruncate.

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
* [forEach](fixedsizelist.md#foreach)
* [get](fixedsizelist.md#get)
* [map](fixedsizelist.md#map)
* [reset](fixedsizelist.md#reset)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new FixedSizeList**(maxSize: *`number`*, _list?: *`T`[]*, eventEmitter?: *`Emitter`*): [FixedSizeList](fixedsizelist.md)

**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| maxSize | `number` | - |  Max size of the list |
| `Default value` _list | `T`[] |  [] |  Initial values of the list. Truncated if it's longer than maxSize |
| `Default value` eventEmitter | `Emitter` |  EventEmitter() |  Event emitter that you can subscribe to. Emits eventCreated, eventReset, eventNewItem, eventTruncate |

**Returns:** [FixedSizeList](fixedsizelist.md)

___

## Properties

<a id="eventemitter"></a>

###  eventEmitter

Event emitter that you can subscribe to. Emits eventCreated, eventReset, eventNewItem, eventTruncate

**● eventEmitter**: *`Emitter`*

___
<a id="maxsize"></a>

###  maxSize

Max size of the list

**● maxSize**: *`number`*

___

## Accessors

<a id="length"></a>

###  length

*__description__*: Get length of the list

getlength(): `number`

*__description__*: Get length of the list

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

*__description__*: Add a new element to the list. The element added to the beginning! of the list. Emits eventNewItem with the element itself

**Parameters:**

| Param | Type |
| ------ | ------ |
| newEl | `T` |

**Returns:** `number`

___
<a id="foreach"></a>

###  forEach

▸ **forEach**(cb: *`function`*, thisArg?: *`any`*): `void`

**Parameters:**

| Param | Type |
| ------ | ------ |
| cb | `function` |
| `Optional` thisArg | `any` |

**Returns:** `void`

___
<a id="get"></a>

###  get

▸ **get**(index: *`number`*):  `T` &#124; `undefined`

*__description__*: Get an element of the list by index

**Parameters:**

| Param | Type |
| ------ | ------ |
| index | `number` |

**Returns:**  `T` &#124; `undefined`

___
<a id="map"></a>

###  map

▸ **map**U(cb: *`function`*, thisArg?: *`any`*): `U`[]

**Type parameters:**

#### U 
**Parameters:**

| Param | Type |
| ------ | ------ |
| cb | `function` |
| `Optional` thisArg | `any` |

**Returns:** `U`[]

___
<a id="reset"></a>

###  reset

▸ **reset**(): `void`

*__description__*: Clear the list. Emits eventReset

**Returns:** `void`

___

