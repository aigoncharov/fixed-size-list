import { expect } from 'chai'
import EventEmitter from 'mitt'
import { fake } from 'sinon'

import { eventCreated, eventNewItem, eventReset, eventTruncate, FixedSizeList } from './index'

describe('FixedSizeList', () => {
  const fixedSizeListCreateAndCheck = <T>(maxSize: number, list?: T[], emitter?: EventEmitter.Emitter) => {
    const fixedSizeList = new FixedSizeList<T>(maxSize, list, emitter)
    expect(fixedSizeList).to.be.instanceof(FixedSizeList)
    expect(fixedSizeList.maxSize).to.be.equal(maxSize)
    expect(fixedSizeList.length).to.be.equal(list ? list.length : 0)
    const listExpected = list ? list.slice(0, maxSize) : []
    expect(fixedSizeList.data).to.be.deep.equal(listExpected)
    return fixedSizeList
  }
  it('can be created', () => {
    const maxSize = 10
    fixedSizeListCreateAndCheck(maxSize)
  })
  it('can be created with a pre-defined list', () => {
    const maxSize = 10
    const list = [{ val: 3 }, { val: 4 }, { val: 5 }]
    fixedSizeListCreateAndCheck<{ val: number }>(maxSize, list)
  })
  it('a pre-defined list is truncated', () => {
    const maxSize = 2
    const list = [{ val: 3 }, { val: 4 }, { val: 5 }]
    fixedSizeListCreateAndCheck<{ val: number }>(maxSize, list)
  })
  it('can be created with a custom EventEmitter', () => {
    const maxSize = 10
    const list: any[] = []
    const emitter = EventEmitter()
    const eventCreatedSpy = fake()
    emitter.on(eventCreated, eventCreatedSpy)
    fixedSizeListCreateAndCheck<{ val: number }>(maxSize, list, emitter)
    expect(eventCreatedSpy.callCount).to.be.equal(1)
    expect(eventCreatedSpy.args[0].length).to.be.equal(1)
    expect(eventCreatedSpy.args[0][0]).to.be.equal(list)
  })
  it('adds new items', () => {
    const maxSize = 5
    const newItem1 = { val: 123 }
    const newItem2 = { val: 234 }
    const fixedSizeList = fixedSizeListCreateAndCheck<{ val: number }>(maxSize)
    const eventNewItemSpy = fake()
    fixedSizeList.on(eventNewItem, eventNewItemSpy)
    fixedSizeList.add(newItem1)
    expect(fixedSizeList.length).to.be.equal(1)
    expect(fixedSizeList.data).to.be.deep.equal([newItem1])
    fixedSizeList.add(newItem2)
    expect(fixedSizeList.length).to.be.equal(2)
    expect(fixedSizeList.data).to.be.deep.equal([newItem2, newItem1])
    expect(eventNewItemSpy.callCount).to.be.equal(2)
    expect(eventNewItemSpy.args[0].length).to.be.equal(1)
    expect(eventNewItemSpy.args[0][0]).to.be.equal(newItem1)
    expect(eventNewItemSpy.args[1].length).to.be.equal(1)
    expect(eventNewItemSpy.args[1][0]).to.be.equal(newItem2)
  })
  it('adds new items and truncates', () => {
    const maxSize = 1
    const newItem1 = { val: 123 }
    const newItem2 = { val: 234 }
    const fixedSizeList = fixedSizeListCreateAndCheck<{ val: number }>(maxSize)
    const eventTruncateSpy = fake()
    fixedSizeList.on(eventTruncate, eventTruncateSpy)
    fixedSizeList.add(newItem1)
    fixedSizeList.add(newItem2)
    expect(fixedSizeList.length).to.be.equal(1)
    expect(fixedSizeList.data).to.be.deep.equal([newItem2])
    expect(eventTruncateSpy.callCount).to.be.equal(1)
    expect(eventTruncateSpy.args[0].length).to.be.equal(1)
    const truncatedItems = eventTruncateSpy.args[0][0]
    expect(Array.isArray(truncatedItems)).to.be.equal(true)
    expect(truncatedItems.length).to.be.equal(1)
    expect(truncatedItems[0]).to.be.equal(newItem1)
  })
  it('can be reset', () => {
    const maxSize = 10
    const newItem1 = { val: 123 }
    const newItem2 = { val: 234 }
    const fixedSizeList = fixedSizeListCreateAndCheck<{ val: number }>(maxSize)
    const eventResetSpy = fake()
    fixedSizeList.on(eventReset, eventResetSpy)
    fixedSizeList.add(newItem1)
    fixedSizeList.add(newItem2)
    expect(fixedSizeList.length).to.be.equal(2)
    fixedSizeList.reset()
    expect(fixedSizeList.length).to.be.equal(0)
    expect(eventResetSpy.callCount).to.be.equal(1)
    expect(eventResetSpy.args[0].length).to.be.equal(1)
    expect(eventResetSpy.args[0][0]).to.be.equal(undefined)
  })
})
