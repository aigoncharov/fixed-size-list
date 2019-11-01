import * as EventEmitter from 'mitt'

export const eventCreated = 'FixedSizeListCreated'
export const eventReset = 'FixedSizeListReset'
export const eventNewItem = 'FixedSizeListNewItem'
export const eventTruncate = 'FixedSizeListTruncate'
export type IFixedSizeListEvents = typeof eventCreated | typeof eventReset | typeof eventNewItem | typeof eventTruncate

/**
 * @description
 * Fixed size list. New elements are added to the beginning of the list.
 * Removes elements from the end of the list if it becomes longer than maxSize.
 * Has an event emitter and emits eventCreated, eventReset, eventNewItem, eventTruncate.
 */
export class FixedSizeList<T> {
  /**
   * @param maxSize
   * Max size of the list
   * @param _list
   * Initial values of the list. Truncated if it's longer than maxSize
   * @param eventEmitter
   * Event emitter that you can subscribe to. Emits eventCreated, eventReset, eventNewItem, eventTruncate
   */
  constructor(
    public readonly maxSize: number,
    protected readonly _list: T[] = [],
    public readonly eventEmitter = EventEmitter(),
  ) {
    this.eventEmitter.emit(eventCreated, _list)
    this._truncate()
  }

  /**
   * @description
   * Add a new element to the list. The element added to the beginning! of the list.
   * Emits eventNewItem with the element itself
   */
  public add(newEl: T): number {
    this._list.unshift(newEl)
    this._truncate()
    this.eventEmitter.emit(eventNewItem, newEl)
    return this._list.length
  }

  /**
   * @description
   * Clear the list.
   * Emits eventReset
   */
  public reset() {
    this._list.splice(0)
    this.eventEmitter.emit(eventReset)
  }

  /**
   * @description
   * Get an element of the list by index
   */
  public get(index: number): T | undefined {
    return this._list[index]
  }

  public map<U>(cb: (value: T, index: number, array: T[]) => U, thisArg?: any) {
    return this._list.map<U>(cb, thisArg)
  }

  public forEach(cb: (value: T, index: number, array: T[]) => void, thisArg?: any) {
    this._list.forEach(cb, thisArg)
  }

  public *[Symbol.iterator]() {
    for (const el of this._list) {
      yield el
    }
  }

  /**
   * @description
   * Get length of the list
   */
  public get length(): number {
    return this._list.length
  }

  /**
   * @description
   * Truncates the list if it's longer than maxSize. Removes elements from the end of the list.
   * Emits eventTruncate with an array of elements removed from the list.
   */
  protected _truncate() {
    if (this._list.length > this.maxSize) {
      const removedEls = this._list.splice(this.maxSize)
      this.eventEmitter.emit(eventTruncate, removedEls)
    }
  }
}
