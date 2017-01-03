/// <reference path='../../../tools/manual_typings/project/jasmine.d.ts' />

/**
 * See http://xgrommx.github.io/rx-book/content/subjects/async_subject/index.html
 * And
 */
import { ReplaySubject, Observable } from '@reactivex/rxjs';
import { createObserverWithLogger, ObserverLogger } from '../rxjs.spec.helpers/index';

describe('RXJS', () => {
  describe('ReplaySubject', () => {

    let subject: ReplaySubject<any>;
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

    it('Should cache all values produced.', () => {

      subject = new ReplaySubject();

      subject.next('a');
      subject.next('b');
      subject.next('c');

      subject.complete();

      subject.next('d');

      // subscribe to subject
      subject.subscribe(subjectSubscriber);

      expect(olog.nextSequence).toEqual([ 'a', 'b', 'c', 'd' ]);
    });

    it('Should cache all values produced.', () => {

      subject = new ReplaySubject();

      observable.subscribe(subject);

      subject.next('a');
      subject.next('b');
      subject.next('c');
      subject.next('d');

      // subscribe to subject
      subject.subscribe(subjectSubscriber);

      expect(olog.nextSequence).toEqual([ 1, 2, 3, 4, 5, 'a', 'b', 'c', 'd' ]);
    });

    it('Should cache all values produced.', () => {

      subject = new ReplaySubject();

      subject.next('a');
      subject.next('b');
      subject.next('c');
      subject.next('d');

      observable.subscribe(subject);

      // subscribe to subject
      subject.subscribe(subjectSubscriber);

      expect(olog.nextSequence).toEqual([ 'a', 'b', 'c', 'd', 1, 2, 3, 4, 5 ]);
    });

  });
});
