import { Observable } from '@reactivex/rxjs';

export function x2(): Observable<number> {
  return Observable
    .from([1, 2, 3])
    .map((x) => {
      return x * 2;
    });
}

export function xConcatMap(): Observable<number> {
  return Observable
    .from([1, 2, 3])
    .map((x) => {
      return x * 2;
    });
}
