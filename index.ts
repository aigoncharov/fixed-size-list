import * as EventEmitter from 'eventemitter3'

export const eventCreated = Symbol('FixedSizeListCreated')
export const eventReset = Symbol('FixedSizeListReset')
export const eventNewElement = Symbol('FixedSizeListNewElement')
export const eventTruncate = Symbol('FixedSizeListTruncate')
export type IFixedSizeListEvents =
  typeof eventCreated |
  typeof eventReset |
  typeof eventNewElement |
  typeof eventTruncate

export class FixedSizeList<T> {
  constructor (
    public readonly maxSize: number,
    protected readonly _list: T[] = [],
    public readonly eventEmitter = new EventEmitter<IFixedSizeListEvents>()
  ) {
    this.eventEmitter.emit(eventCreated, _list)
    this._truncate()
  }

  public add (newEl: T): number {
    this._list.unshift(newEl)
    this._truncate()
    this.eventEmitter.emit(eventNewElement, newEl)
    return this._list.length
  }

  public reset () {
    this._list.splice(0)
    this.eventEmitter.emit(eventReset)
  }

  public get (index: number): T | undefined {
    return this._list[index]
  }

  public * [Symbol.iterator] () {
    for (const el of this._list) {
      yield el
    }
  }

  public get length (): number {
    return this._list.length
  }

  protected _truncate () {
    if (this._list.length > this.maxSize) {
      const removedEls = this._list.splice(this.maxSize)
      this.eventEmitter.emit(eventTruncate, removedEls)
    }
  }
}
