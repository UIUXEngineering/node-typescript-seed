import { Observable } from '@reactivex/rxjs';

var a = Observable.interval(200).map(function(i) {
  return 'A' + i;
});
var b = Observable.interval(100).map(function(i) {
  return 'B' + i;
});

Observable.merge(a, b).subscribe(function(x) {
  console.log(x);
});
