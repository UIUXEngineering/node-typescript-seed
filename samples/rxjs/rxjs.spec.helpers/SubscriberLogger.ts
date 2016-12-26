/**
 * Helper class to log Observer behavior
 * to learn how Subscribers work in RXJS
 */
export class SubscriberLogger {
  public _next: string;
  public _error: string;
  public _complete: boolean;
  public _closed: boolean;
  public _nextSequence: string[];
  public _errorSequence: string[];

  public noData: string = 'no data';

  static create() {
    return new SubscriberLogger();
  }

  constructor() {
    this._next = this.noData;
    this._error = this.noData;
    this._complete = false;
    this._closed = false;
    this._nextSequence = [];
    this._errorSequence = [];
  }

  get next(): string {
    return this._next;
  }

  set next(_value: string) {
    this._next = _value;
    this._nextSequence.push(_value);
  }

  get error(): string {
    return this._error;
  }

  set error(_value: string) {
    this._error = _value;
    this._errorSequence.push(_value);
  }

  get complete(): boolean {
    return this._complete;
  }

  set complete(_value: boolean) {
    this._complete = _value;
    this._closed = true;
  }

  get closed(): boolean {
    return this._closed;
  }

  get nextSequence(): string[] {
    return this._nextSequence;
  }

  get errorSequence(): string[] {
    return this._errorSequence;
  }
}
