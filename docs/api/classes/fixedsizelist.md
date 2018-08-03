[fixed-size-list](../README.md) > [FixedSizeList](../classes/fixedsizelist.md)

# Class: FixedSizeList

_**description**_: Fixed size list. New elements are added to the beginning of the list. Removes elements from the end of the list if it becomes longer than maxSize. Has an event emitter and emits eventCreated, eventReset, eventNewItem, eventTruncate.

## Type parameters

#### T

## Hierarchy

**FixedSizeList**

## Index

### Constructors

- [constructor](fixedsizelist.md#constructor)

### Properties

- [eventEmitter](fixedsizelist.md#eventemitter)
- [maxSize](fixedsizelist.md#maxsize)

### Accessors

- [length](fixedsizelist.md#length)

### Methods

- [\_\_@iterator](fixedsizelist.md#___iterator)
- [add](fixedsizelist.md#add)
- [get](fixedsizelist.md#get)
- [reset](fixedsizelist.md#reset)

---

## Constructors

<a id="constructor"></a>

### constructor

⊕ **new FixedSizeList**(maxSize: _`number`_, \_list?: _`T`[]_, eventEmitter?: _`EventEmitter`< `unique symbol` &#124; `unique symbol` &#124; `unique symbol` &#124; `unique symbol`>_): [FixedSizeList](fixedsizelist.md)

**Parameters:**

| Param                        | Type                                                                                                  | Default value                                  | Description                                                                                          |
| ---------------------------- | ----------------------------------------------------------------------------------------------------- | ---------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| maxSize                      | `number`                                                                                              | -                                              | Max size of the list                                                                                 |
| `Default value` \_list       | `T`[]                                                                                                 | []                                             | Initial values of the list. Truncated if it's longer than maxSize                                    |
| `Default value` eventEmitter | `EventEmitter`< `unique symbol` &#124; `unique symbol` &#124; `unique symbol` &#124; `unique symbol`> | new EventEmitter&lt;IFixedSizeListEvents&gt;() | Event emitter that you can subscribe to. Emits eventCreated, eventReset, eventNewItem, eventTruncate |

**Returns:** [FixedSizeList](fixedsizelist.md)

---

## Properties

<a id="eventemitter"></a>

### eventEmitter

Event emitter that you can subscribe to. Emits eventCreated, eventReset, eventNewItem, eventTruncate

**● eventEmitter**: _`EventEmitter`< `unique symbol` &#124; `unique symbol` &#124; `unique symbol` &#124; `unique symbol`>_

---

<a id="maxsize"></a>

### maxSize

Max size of the list

**● maxSize**: _`number`_

---

## Accessors

<a id="length"></a>

### length

_**description**_: Get length of the list

getlength(): `number`

_**description**_: Get length of the list

**Returns:** `number`

---

## Methods

<a id="___iterator"></a>

### \_\_@iterator

▸ **\_\_@iterator**(): `IterableIterator`<`T`>

**Returns:** `IterableIterator`<`T`>

---

<a id="add"></a>

### add

▸ **add**(newEl: _`T`_): `number`

_**description**_: Add a new element to the list. The element added to the beginning! of the list. Emits eventNewItem with the element itself

**Parameters:**

| Param | Type |
| ----- | ---- |
| newEl | `T`  |

**Returns:** `number`

---

<a id="get"></a>

### get

▸ **get**(index: _`number`_): `T` &#124; `undefined`

_**description**_: Get an element of the list by index

**Parameters:**

| Param | Type     |
| ----- | -------- |
| index | `number` |

**Returns:** `T` &#124; `undefined`

---

<a id="reset"></a>

### reset

▸ **reset**(): `void`

_**description**_: Clear the list. Emits eventReset

**Returns:** `void`

---
