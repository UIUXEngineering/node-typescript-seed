import { Observable } from '@reactivex/rxjs';

let isEven = (function(val) { return val % 2 === 0; });

export function even() {
  return Observable.range(1, 5)
    .filter(isEven);
}
