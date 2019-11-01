import EventEmitter from 'mitt'

export const eventCreated = 'FixedSizeListCreated'
export const eventReset = 'FixedSizeListReset'
export const eventNewItem = 'FixedSizeListNewItem'
export const eventTruncate = 'FixedSizeListTruncate'
export type FixedSizeListEvents =
  | typeof eventCreated
  | typeof eventReset
  | typeof eventNewItem
  | typeof eventTruncate
  | '*'
type FixedSizeListEventEmitterCallback<T, E extends FixedSizeListEvents> = E extends typeof eventCreated
  ? (initialList: T[]) => void
  : E extends typeof eventNewItem
  ? (newEl: T) => void
  : E extends typeof eventTruncate
  ? (removedEls: T[]) => void
  : () => void

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
    protected _list: T[] = [],
    private readonly eventEmitter = EventEmitter(),
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
    this._list = [newEl, ...this._list]
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
    this._list = []
    this.eventEmitter.emit(eventReset)
  }

  /**
   * @description
   * Subscribe to updates
   *
   * @returns
   * Function to unsubscribe
   */
  public on<E extends FixedSizeListEvents>(event: FixedSizeListEvents, cb: FixedSizeListEventEmitterCallback<T, E>) {
    this.eventEmitter.on(event, cb)
    return () => this.eventEmitter.off(event, cb)
  }

  public get data(): readonly T[] {
    return this._list
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
