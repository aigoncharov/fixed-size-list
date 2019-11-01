# fixed-size-list [![Build Status](https://travis-ci.org/keenondrums/fixed-size-list.svg?branch=master)](https://travis-ci.org/keenondrums/fixed-size-list)

Immutable fixed-length list (a.k.a circular buffer) with an event emitter for Typescript and Javascript

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Quick start](#quick-start)
- [Initial list](#initial-list)
- [Events](#events)
  - [eventNewItem](#eventnewitem)
  - [eventTruncate](#eventtruncate)
  - [eventReset](#eventreset)
  - [eventCreated](#eventcreated)
- [API](#api)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Quick start

```
npm i fixed-size-list
```

```ts
import { FixedSizeList } from 'fixed-size-list'

const maxSize = 3
const fixedSizeList = new FixedSizeList<number>(maxSize)
// Now it's empty
fixedSizeList.add(1)
// Not it's [ 1 ]
fixedSizeList.add(2)
// Now it's [ 2, 1 ]
fixedSizeList.add(3)
// Now it's [ 3, 2, 1 ]
fixedSizeList.add(4)
// Now it's [ 4, 3, 2 ]

console.log(fixedSizeList.data)
// logs [4,3,2]

fixedSizeList.reset()
// Now it's []
```

## Initial list

You can set initial values easily passing them to the constructor

```ts
import { FixedSizeList } from 'fixed-size-list'

const maxSize = 3
const list = [1, 2, 3]
const fixedSizeList = new FixedSizeList<number>(maxSize, list)
// Now it's [ 1, 2, 3 ]
```

Be aware that the initial list is truncated if it's longer than maxSize

```ts
import { FixedSizeList } from 'fixed-size-list'

const maxSize = 2
const list = [1, 2, 3]
const fixedSizeList = new FixedSizeList<number>(maxSize, list)
// Now it's [ 1, 2 ]
// 3 was truncated
```

## Events

FixedSizeList has an event emitter. You can listen to specific events. WARNING! `on` returns an unsubscribe function. Do not forget to call it when you no longer need the subscription to unsubscribe.

### eventNewItem

It emits an added item

```ts
import { FixedSizeList, eventNewItem } from 'fixed-size-list'

const maxSize = 2
const fixedSizeList = new FixedSizeList<number>(maxSize)
const unsubscribe = fixedSizeList.on(eventNewItem, (newItem) => console.log('item added', newItem))
fixedSizeList.add(5)
// logs 'item added 5'

// later on
unsubscribe()
```

### eventTruncate

It emits an array of removed items

```ts
import { FixedSizeList, eventTruncate } from 'fixed-size-list'

const maxSize = 2
const fixedSizeList = new FixedSizeList<number>(maxSize)
const unsubscribe = fixedSizeList.on(eventTruncate, (removedItems) =>
  console.log('items removed', removedItems.toString()),
)
fixedSizeList.add(5)
fixedSizeList.add(4)
fixedSizeList.add(3)
// logs 'items removed [ 5 ]'

// later on
unsubscribe()
```

### eventReset

```ts
import { FixedSizeList, eventReset } from 'fixed-size-list'

const maxSize = 2
const fixedSizeList = new FixedSizeList<number>(maxSize)
const unsubscribe = fixedSizeList.on(eventReset, () => console.log('list reset'))
fixedSizeList.reset()
// logs 'list reset'

// later on
unsubscribe()
```

### eventCreated

We can add the third optional parameter of FixedSizeList's constructor and pass a custom event emitter

```ts
import { FixedSizeList, eventCreated, IFixedSizeListEvents } from 'fixed-size-list'
import mitt from 'mitt'

const maxSize = 2
const list = []
const emitter = mitt()
const unsubscribe = emitter.on(eventCreated, () => console.log('list created'))

const fixedSizeList = new FixedSizeList<number>(maxSize, list, emitter)
// logs 'list created'

// later on
unsubscribe()
```

### All

We can subscribe to all events at once

```ts
import { FixedSizeList, eventCreated, IFixedSizeListEvents } from 'fixed-size-list'

const fixedSizeList = new FixedSizeList<number>(10)
const unsubscribe = emitter.on('*', () => console.log('Any event'))

// later on
unsubscribe()
```
