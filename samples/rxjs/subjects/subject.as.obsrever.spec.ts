/// <reference path='../../../tools/manual_typings/project/jasmine.d.ts' />

import { Subject, Observable } from '@reactivex/rxjs';

describe('RXJS', () => {
  describe('Subject', () => {

    let subject: Subject<any>;
    let observable: Observable<any>;

    beforeEach(() => {
      observable = Observable.from([1, 2, 3, 4, 5]);
      subject = new Subject();

      // Subscribe subject to observerble
      observable.subscribe(subject);
    });

    afterEach(() => {
      subject = null;
      observable = null;
    });

  });
});
