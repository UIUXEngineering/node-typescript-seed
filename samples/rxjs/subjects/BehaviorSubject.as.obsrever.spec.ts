/// <reference path='../../../tools/manual_typings/project/jasmine.d.ts' />

/**
 * See http://xgrommx.github.io/rx-book/content/subjects/async_subject/index.html
 * And
 */
import { BehaviorSubject, Observable } from '@reactivex/rxjs';
import { createObserverWithLogger, ObserverLogger } from '../rxjs.spec.helpers/index';

describe('RXJS', () => {
  describe('BehaviorSubject', () => {

    let subject: BehaviorSubject<any>;
    let observable: Observable<any>;
    let subjectSubscriber;
    // Log Test Results
    let olog: ObserverLogger;

    beforeEach(() => {
      observable = Observable.from([1, 2, 3, 4, 5]);


      // Log test results
      olog = new ObserverLogger();
      subjectSubscriber = createObserverWithLogger( olog );

    });

    afterEach(() => {
      subject = null;
      observable = null;
      olog = null;
    });

    it('should initialize with a value', () => {
      subject = new BehaviorSubject(1);
      subject.subscribe(subjectSubscriber);

      expect(olog.nextSequence).toEqual([1]);
    });

    it('should accept next values', () => {
      subject = new BehaviorSubject(1);
      subject.subscribe(subjectSubscriber);

      expect(olog.nextSequence).toEqual([1]);

      subject.next(2);
      expect(olog.nextValue).toEqual(2);
      expect(olog.nextSequence).toEqual([1, 2]);
    });

    it('should not accept next values after complete', () => {
      subject = new BehaviorSubject(1);
      subject.subscribe(subjectSubscriber);

      subject.complete();

      expect(olog.nextSequence).toEqual([1]);

      subject.next(2);
      expect(olog.nextValue).toEqual(1);
      expect(olog.nextSequence).toEqual([1]);
    });

    it('should Initial value sent to observers ' +
      'when no other value has been received by ' +
      'the subject yet', () => {
      subject = new BehaviorSubject(1);

      subject.subscribe(subjectSubscriber);

      expect(olog.nextSequence).toEqual([1]);

      subject.complete();

      subject.next(2);
      expect(olog.nextValue).toEqual(1);
      expect(olog.nextSequence).toEqual([1]);
    });

    it('should receive values from observable', () => {
      subject = new BehaviorSubject(6);

      subject.subscribe(subjectSubscriber);

      expect(olog.nextSequence).toEqual([6]);

      observable.subscribe(subject);

      expect(olog.nextValue).toEqual(5);
      expect(olog.nextSequence).toEqual([6, 1, 2, 3, 4, 5]);
    });

  });
});
