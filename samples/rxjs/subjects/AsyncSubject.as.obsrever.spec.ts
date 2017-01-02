/// <reference path='../../../tools/manual_typings/project/jasmine.d.ts' />

/**
 * See http://xgrommx.github.io/rx-book/content/subjects/async_subject/index.html
 * And
 */
import { AsyncSubject, Observable } from '@reactivex/rxjs';
import { createObserverWithLogger, ObserverLogger } from '../rxjs.spec.helpers/index';

describe('RXJS', () => {
  describe('AsyncSubject', () => {

    let subject: AsyncSubject<any>;
    let observable: Observable<any>;
    let subjectSubscriber;
    // Log Test Results
    let olog: ObserverLogger;

    beforeEach(() => {
      observable = Observable.from([1, 2, 3, 4, 5]);
      subject = new AsyncSubject();

      // Log test results
      olog = new ObserverLogger();
      subjectSubscriber = createObserverWithLogger( olog );

    });

    afterEach(() => {
      subject = null;
      observable = null;
      olog = null;
    });

    it('Should cache on the last value produced when ' +
      'followed by an onCompleted notification which makes ' +
      'it available to all subscribers.', () => {
        subject.next(1);
        subject.next(2);
        subject.next(3);
        subject.complete();

        subject.next(4);

      // subscribe to subject
      subject.subscribe(subjectSubscriber);

      expect(olog.nextSequence).toEqual([3]);
    });

    it('Should cache on the last value produced when ' +
      'followed by an onCompleted notification which makes ' +
      'it available to all subscribers.', () => {

      // subscribe to subject
      subject.subscribe(subjectSubscriber);

      subject.next(1);
      subject.next(2);
      subject.next(3);
      subject.complete();

      subject.next(4);

      expect(olog.nextSequence).toEqual([3]);
    });

    it('should pass last value to subject', () => {

      // Subscribe subject to observable
      observable.subscribe(subject);

      // subscribe to subject
      subject.subscribe(subjectSubscriber);

      expect(olog.nextSequence).toEqual([5]);
    });


    it('should pass last value subject', () => {

      // Subscribe subject to observable
      observable
        // .toArray()
        .subscribe(subject);

      // subscribe to subject
      subject.subscribe(subjectSubscriber);

      expect(olog.nextValue).toEqual(5);
    });



    it('should NOT send data as observable', () => {

      /**
       * observable.subscribe has to happen AFTER subject.subscribe
       * to receive observable values.
       */

      // subscribe to subject
      subject.subscribe(subjectSubscriber);

      // Subscribe subject to observable
      observable.subscribe(subject);

      /**
       * observable sent onComplete method, so no more
       * data can be sent.
       */
      subject.next(6);

      expect(olog.nextValue).toEqual(5);
    });

    it('should NOT send data as observable', () => {

      /**
       * observable.subscribe has to happen AFTER subject.subscribe
       * to receive observable values.
       */

      // subscribe to subject
      subject.subscribe(subjectSubscriber);

      /**
       * subject can not send values yet.
       */
      subject.next(1);
      subject.next(2);
      subject.next(3);

      subject.complete();


      expect(olog.nextValue).toEqual(3);

    });

  });
});
