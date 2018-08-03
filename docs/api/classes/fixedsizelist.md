[fixed-size-list](../README.md) > [FixedSizeList](../classes/fixedsizelist.md)

# Class: FixedSizeList

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

| Param                        | Type                                                                                                  | Default value                                  |
| ---------------------------- | ----------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| maxSize                      | `number`                                                                                              | -                                              |
| `Default value` \_list       | `T`[]                                                                                                 | []                                             |
| `Default value` eventEmitter | `EventEmitter`< `unique symbol` &#124; `unique symbol` &#124; `unique symbol` &#124; `unique symbol`> | new EventEmitter&lt;IFixedSizeListEvents&gt;() |

**Returns:** [FixedSizeList](fixedsizelist.md)

---

## Properties

<a id="eventemitter"></a>

### eventEmitter

**● eventEmitter**: _`EventEmitter`< `unique symbol` &#124; `unique symbol` &#124; `unique symbol` &#124; `unique symbol`>_

---

<a id="maxsize"></a>

### maxSize

**● maxSize**: _`number`_

---

## Accessors

<a id="length"></a>

### length

getlength(): `number`

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

**Parameters:**

| Param | Type |
| ----- | ---- |
| newEl | `T`  |

**Returns:** `number`

---

<a id="get"></a>

### get

▸ **get**(index: _`number`_): `T` &#124; `undefined`

**Parameters:**

| Param | Type     |
| ----- | -------- |
| index | `number` |

**Returns:** `T` &#124; `undefined`

---

<a id="reset"></a>

### reset

▸ **reset**(): `void`

**Returns:** `void`

---
