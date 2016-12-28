import { Observable } from '@reactivex/rxjs';

let source1 = Observable.from(['A', 'B', 'C']);

let source2 = Observable.from([1, 2, 3]);

let source3 = Observable.from(['X', 'Y', 'Z']);

let merged = Observable.merge(source1, source2, source3);

export { merged, source2 };
