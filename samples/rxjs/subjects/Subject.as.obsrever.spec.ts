/// <reference path='../../../tools/manual_typings/project/jasmine.d.ts' />

import { Subject, Observable } from '@reactivex/rxjs';
import { createObserverWithLogger, ObserverLogger } from '../rxjs.spec.helpers/index';

describe('RXJS', () => {
  describe('Subject', () => {

    let subject: Subject<any>;
    let observable: Observable<any>;
    let subjectSubscriber;

    // Log Test Results
    let olog: ObserverLogger;

    beforeEach(() => {
      observable = Observable.from([1, 2, 3, 4, 5]);
      subject = new Subject();

      // Log test results
      olog = new ObserverLogger();
      subjectSubscriber = createObserverWithLogger( olog );

    });

    afterEach(() => {
      subject = null;
      observable = null;
      olog = null;
    });

    it('should NOT receive data', () => {

      /**
       * observable.subscribe has to happen AFTER subject.subscribe
       * to receive observable values.
       */

      // WRONG ORDER: Subscribe subject to observable
      observable.subscribe(subject);

      // WRONG ORDER: subscribe to subject
      subject.subscribe(subjectSubscriber);

      expect(olog.nextValue).toEqual(olog.noData);
    });

    it('should receive last observable value', () => {

      /**
       * observable.subscribe has to happen AFTER subject.subscribe
       * to receive observable values.
       */

      // subscribe to subject
      subject.subscribe(subjectSubscriber);

      // Subscribe subject to observable
      observable.subscribe(subject);

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

      subject.next(6);

      expect(olog.nextValue).toEqual(6);

      // Subscribe subject to observable
      observable.subscribe(subject);

      expect(olog.nextValue).toEqual(5);
      expect(olog.nextSequence).toEqual([ 6, 1, 2, 3, 4, 5 ]);
    });

  });
});
