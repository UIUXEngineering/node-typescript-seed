/**
 * Demonstrate how to make an Observer ( aka Subscriber )
 * in TypeScript.
 */
import { Subscriber, Observer } from '@reactivex/rxjs'
import { SubscriberLogger } from '../../rxjs.spec.helpers/SubscriberLogger';

export function createSubscriber(monitor: SubscriberLogger): Observer<string> {

  let observer: Observer<string> = new Subscriber(
    function onNext(x: string) {
      monitor.next = x;
    },
    function onError(err: string) {
      monitor.error = err;
    },
    function onCompleted() {
      monitor.complete = true;
    }
  );

  return observer;
}

