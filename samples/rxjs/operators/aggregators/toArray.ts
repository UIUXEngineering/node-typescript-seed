import { Observable } from '@reactivex/rxjs';

export function range(): Observable<number> {
  return Observable
    .from([1, 2, 3]);
}

export function toArray(): Observable<number[]> {
  return range()
    .toArray();
}
