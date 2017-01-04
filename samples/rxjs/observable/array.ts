import { Observable } from '@reactivex/rxjs';

export function creatObservable(logger) {
  Observable
    .from(['Adrià', 'Jen', 'Sergi'])
    .subscribe(
      function onNext(x: string) {
        logger.next(x);
      },
      function onError(err: string) {
        logger.error(err);
      },
      function onCompleted() {
        logger.complete();
      });
}
