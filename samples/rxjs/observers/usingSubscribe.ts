/**
 * Demonstrate how to make an Observer ( aka Subscriber )
 * in TypeScript.
 */
import { Subscriber, Observer } from '@reactivex/rxjs';
import { ObserverLogger } from '../rxjs.spec.helpers/ObserverLogger';

export function createSubscriber(logger: ObserverLogger): Observer<string> {

  let observer: Observer<string> = new Subscriber(
    function onNext(x: string) {
      logger.next(x);
    },
    function onError(err: string) {
      logger.error(err);
    },
    function onCompleted() {
      logger.complete();
    });

  return observer;
}

