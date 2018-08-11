# fixed-size-list [![Build Status](https://travis-ci.org/keenondrums/fixed-size-list.svg?branch=master)](https://travis-ci.org/keenondrums/fixed-size-list)

A small library that brings fixed-length lists with event emitters to Typescript and Javascript

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Quick start](#quick-start)
- [Initial list](#initial-list)
- [Events](#events)
  - [eventNewItem](#eventnewitem)
  - [eventTruncate](#eventtruncate)
  - [eventReset](#eventreset)
  - [eventReset](#eventreset-1)
- [API](#api)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Quick start

```
npm i fixed-size-list
```

```ts
import { FixedSizeList } from "fixed-size-list";

const maxSize = 3;
const fixedSizeList = new FixedSizeList<number>(maxSize);
// Now it's empty
fixedSizeList.add(1);
// Not it's [ 1 ]
fixedSizeList.add(2);
// Now it's [ 2, 1 ]
fixedSizeList.add(3);
// Now it's [ 3, 2, 1 ]
fixedSizeList.add(4);
// Now it's [ 4, 3, 2 ]
console.log(fixedSizeList.get(1)); // logs 3
console.log(fixedSizeList.get(0)); // logs 4
// it's iterable
for (const el of fixedSizeList) {
  console.log(el);
  // logs 4 on the first iteration
  // logs 3 on the second iteration
  // logs 2 on the second iteration
}
fixedSizeList.reset();
// Now it's []
```

## Initial list

You can set initial values easily passing them to the constructor

```ts
import { FixedSizeList } from "fixed-size-list";

const maxSize = 3;
const list = [1, 2, 3];
const fixedSizeList = new FixedSizeList<number>(maxSize, list);
// Now it's [ 1, 2, 3 ]
```

Be aware that the initial list is truncated if it's longer than maxSize

```ts
import { FixedSizeList } from "fixed-size-list";

const maxSize = 2;
const list = [1, 2, 3];
const fixedSizeList = new FixedSizeList<number>(maxSize, list);
// Now it's [ 1, 2 ]
// 3 was truncated
```

## Events

FixedSizeList has an event emitter. You can listen to specific events

### eventNewItem

It emits an added item

```ts
import { FixedSizeList, eventNewItem } from "fixed-size-list";

const maxSize = 2;
const fixedSizeList = new FixedSizeList<number>(maxSize);
fixedSizeList.eventEmitter.on(eventNewItem, newItem =>
  console.log("item added", newItem)
);
fixedSizeList.add(5);
// logs 'item added 5'
```

### eventTruncate

It emits an array of removed items

```ts
import { FixedSizeList, eventTruncate } from "fixed-size-list";

const maxSize = 2;
const fixedSizeList = new FixedSizeList<number>(maxSize);
fixedSizeList.eventEmitter.on(eventTruncate, removedItems =>
  console.log("items removed", removedItems.toString())
);
fixedSizeList.add(5);
fixedSizeList.add(4);
fixedSizeList.add(3);
// logs 'items removed [ 5 ]'
```

### eventReset

```ts
import { FixedSizeList, eventReset } from "fixed-size-list";

const maxSize = 2;
const fixedSizeList = new FixedSizeList<number>(maxSize);
fixedSizeList.eventEmitter.on(eventReset, () => console.log("list reset"));
fixedSizeList.reset();
// logs 'list reset'
```

### eventReset

We can the third optional parameter of FixedSizeList's constructor and pass a custom event emitter

```ts
import {
  FixedSizeList,
  eventCreated,
  IFixedSizeListEvents
} from "fixed-size-list";
import * as EventEmitter from "eventemitter3";

const maxSize = 2;
const list = [];
const emitter = new EventEmitter<IFixedSizeListEvents>();
emitter.on(eventCreated, () => console.log("list created"));

const fixedSizeList = new FixedSizeList<number>(maxSize, list, emitter);
// logs 'list created'
```

## API

[API reference](docs/api/README.md)
