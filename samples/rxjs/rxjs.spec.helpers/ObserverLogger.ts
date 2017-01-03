import { Observer } from 'rxjs';
/**
 * Helper class to log Observer behavior
 * to learn how Subscribers work in RXJS
 */
export class ObserverLogger implements Observer<any> {
  public _next: string;
  public _error: string;
  public _complete: boolean;
  public _closed: boolean;
  public _nextSequence: string[];
  public _errorSequence: string[];

  public noData: string = 'no data';

  static create() {
    return new ObserverLogger();
  }

  constructor() {
    this._next = this.noData;
    this._error = this.noData;
    this._complete = false;
    this._closed = false;
    this._nextSequence = [];
    this._errorSequence = [];
  }

  onNext(x: any): void {
    this.next = x;
  }

  onError(x: any): void {
    this.error = x;
  }

  onComplete(x?: any): void {
    var isComplete = x !== undefined ? x : true;
    this._complete = isComplete;
  }

  next(_value: string) {
    this._next = _value;
    this._nextSequence.push(_value);
  }

  get nextValue(): any {
    return this._next;
  }

  error(_value: string) {
    this._error = _value;
    this._errorSequence.push(_value);
  }

  get errorValue(): any {
    return this._error;
  }

  complete() {
    this._closed = true;
    this._complete = true;
  }

  get completeValue(): any {
    return this._complete;
  }

  set closed(_val: boolean) {
    this._closed = _val;
  }

  get closed(): boolean {
    return this._closed;
  }

  get closedValue(): any {
    return this._closed;
  }

  get nextSequence(): string[] {
    return this._nextSequence;
  }

  get errorSequence(): string[] {
    return this._errorSequence;
  }
}
