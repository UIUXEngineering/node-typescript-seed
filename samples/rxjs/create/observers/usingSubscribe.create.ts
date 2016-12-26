/**
 * Demonstrate how to make an Observer ( aka Subscriber )
 * in TypeScript.
 */
import { Subscriber, Observer } from '@reactivex/rxjs';
import { SubscriberLogger } from '../../rxjs.spec.helpers/SubscriberLogger';

export function createSubscriber(logger: SubscriberLogger): Observer<string> {

  let observer: Observer<string> = Subscriber.create(
    function onNext(x: string) {
      logger.next = x;
    },
    function onError(err: string) {
      logger.error = err;
    },
    function onCompleted() {
      logger.complete = true;
    }
  );

  return observer;
}

