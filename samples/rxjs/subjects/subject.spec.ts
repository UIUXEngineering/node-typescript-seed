/// <reference path='../../../tools/manual_typings/project/jasmine.d.ts' />

import { Subject, Observable, ObjectUnsubscribedError } from '@reactivex/rxjs';

describe('RXJS', () => {
  describe('Subject', () => {

    it('should pump values right on through itself', (done) => {
      let subject = new Subject();
      let expected = ['foo', 'bar'];
      subject.subscribe(function (x) {
        expect(x).toEqual(expected.shift());
      }, null, done);
      subject.next('foo');
      subject.next('bar');
      subject.complete();
    });

    it('should pump values to multiple subscribers', function (done) {
      let subject = new Subject();
      let expected = ['foo', 'bar'];
      let i = 0;
      let j = 0;
      subject.subscribe(function (x) {
        expect(x).toEqual(expected[i++]);
      });
      subject.subscribe(function (x) {
        expect(x).toEqual(expected[j++]);
      }, null, done);
      expect(subject.observers.length).toEqual(2);
      subject.next('foo');
      subject.next('bar');
      subject.complete();
    });

    it('should handle subscribers that arrive and leave at different times, ' +
      'subject does not complete', function () {
      let subject = new Subject();
      let results1 = [];
      let results2 = [];
      let results3 = [];
      subject.next(1);
      subject.next(2);
      subject.next(3);
      subject.next(4);
      let subscription1 = subject.subscribe(function (x) { results1.push(x); },
        function (e) { results1.push('E'); }, function () { results1.push('C'); });
      subject.next(5);
      let subscription2 = subject.subscribe(function (x) { results2.push(x); },
        function (e) { results2.push('E'); }, function () { results2.push('C'); });
      subject.next(6);
      subject.next(7);
      subscription1.unsubscribe();
      subject.next(8);
      subscription2.unsubscribe();
      subject.next(9);
      subject.next(10);
      let subscription3 = subject.subscribe(function (x) { results3.push(x); },
        function (e) { results3.push('E'); }, function () { results3.push('C'); });
      subject.next(11);
      subscription3.unsubscribe();
      expect(results1).toEqual([5, 6, 7]);
      expect(results2).toEqual([6, 7, 8]);
      expect(results3).toEqual([11]);
    });

    it('should handle subscribers that arrive and leave at different times, ' +
      'subject completes', function () {
      let subject = new Subject();
      let results1 = [];
      let results2 = [];
      let results3 = [];
      subject.next(1);
      subject.next(2);
      subject.next(3);
      subject.next(4);
      let subscription1 = subject.subscribe(function (x) { results1.push(x); },
        function (e) { results1.push('E'); }, function () { results1.push('C'); });
      subject.next(5);
      let subscription2 = subject.subscribe(function (x) { results2.push(x); },
        function (e) { results2.push('E'); }, function () { results2.push('C'); });
      subject.next(6);
      subject.next(7);
      subscription1.unsubscribe();
      subject.complete();
      subscription2.unsubscribe();
      let subscription3 = subject.subscribe(function (x) { results3.push(x); },
        function (e) { results3.push('E'); }, function () { results3.push('C'); });
      subscription3.unsubscribe();
      expect(results1).toEqual([5, 6, 7]);
      expect(results2).toEqual([6, 7, 'C']);
      expect(results3).toEqual(['C']);
    });

    it('should handle subscribers that arrive and leave at different times, ' +
      'subject terminates with an error', function () {
      let subject = new Subject();
      let results1 = [];
      let results2 = [];
      let results3 = [];
      subject.next(1);
      subject.next(2);
      subject.next(3);
      subject.next(4);
      let subscription1 = subject.subscribe(function (x) { results1.push(x); },
        function (e) { results1.push('E'); }, function () { results1.push('C'); });
      subject.next(5);
      let subscription2 = subject.subscribe(function (x) { results2.push(x); },
        function (e) { results2.push('E'); }, function () { results2.push('C'); });
      subject.next(6);
      subject.next(7);
      subscription1.unsubscribe();
      subject.error(new Error('err'));
      subscription2.unsubscribe();
      let subscription3 = subject.subscribe(function (x) { results3.push(x); },
        function (e) { results3.push('E'); }, function () { results3.push('C'); });
      subscription3.unsubscribe();
      expect(results1).toEqual([5, 6, 7]);
      expect(results2).toEqual([6, 7, 'E']);
      expect(results3).toEqual(['E']);
    });

    it('should handle subscribers that arrive and leave at different times, ' +
      'subject completes before nexting any value', function () {
      let subject = new Subject();
      let results1 = [];
      let results2 = [];
      let results3 = [];
      let subscription1 = subject.subscribe(function (x) { results1.push(x); },
        function (e) { results1.push('E'); }, function () { results1.push('C'); });
      let subscription2 = subject.subscribe(function (x) { results2.push(x); },
        function (e) { results2.push('E'); }, function () { results2.push('C'); });
      subscription1.unsubscribe();
      subject.complete();
      subscription2.unsubscribe();
      let subscription3 = subject.subscribe(function (x) { results3.push(x); },
        function (e) { results3.push('E'); }, function () { results3.push('C'); });
      subscription3.unsubscribe();
      expect(results1).toEqual([]);
      expect(results2).toEqual(['C']);
      expect(results3).toEqual(['C']);
    });

    it('should disallow new subscriber once subject has been disposed', function () {
      let subject = new Subject();
      let results1 = [];
      let results2 = [];
      let results3 = [];
      let subscription1 = subject.subscribe(function (x) { results1.push(x); },
        function (e) { results1.push('E'); }, function () { results1.push('C'); });
      subject.next(1);
      subject.next(2);
      let subscription2 = subject.subscribe(function (x) { results2.push(x); },
        function (e) { results2.push('E'); }, function () { results2.push('C'); });
      subject.next(3);
      subject.next(4);
      subject.next(5);
      subscription1.unsubscribe();
      subscription2.unsubscribe();
      subject.unsubscribe();
      expect(function () {
        subject.subscribe(function (x) { results3.push(x); },
          function (e) { results3.push('E'); }, function () { results3.push('C'); });
      }).toThrow();
      expect(results1).toEqual([1, 2, 3, 4, 5]);
      expect(results2).toEqual([3, 4, 5]);
      expect(results3).toEqual([]);
    });

    it('should not allow values to be nexted after it is unsubscribed', function () {
      let subject = new Subject();
      let expected: string[] = ['foo'];
      let output: string[]  = [];
      let error: any;

      subject.subscribe(function (x: string) {
        output.push(x);
      });
      subject.next('foo');
      expect(output).toEqual(expected);
      subject.unsubscribe();

      expect(error).not.toBeDefined();

      try {
        subject.next('bar');
      } catch (err) {
        error = err;
      }

      expect(error).toBeDefined();

    });

    it('should clean out unsubscribed subscribers', function (done) {
      let subject = new Subject();
      let sub1 = subject.subscribe(function (x) {
        //noop
      });
      let sub2 = subject.subscribe(function (x) {
        //noop
      });
      expect(subject.observers.length).toEqual(2);
      sub1.unsubscribe();
      expect(subject.observers.length).toEqual(1);
      sub2.unsubscribe();
      expect(subject.observers.length).toEqual(0);
      done();
    });

    it('should have a static create function that works', function () {
      expect(typeof Subject.create).toEqual('function');
      let source = Observable.of(1, 2, 3, 4, 5);
      let nexts = [];
      let output = [];
      let error;
      let complete = false;
      let outputComplete = false;
      let destination = {
        closed: false,
        next: function (x) {
          nexts.push(x);
        },
        error: function (err) {
          error = err;
          this.closed = true;
        },
        complete: function () {
          complete = true;
          this.closed = true;
        }
      };
      let sub = Subject.create(destination, source);
      sub.subscribe(function (x) {
        output.push(x);
      }, null, function () {
        outputComplete = true;
      });
      sub.next('a');
      sub.next('b');
      sub.next('c');
      sub.complete();
      expect(nexts).toEqual(['a', 'b', 'c']);
      expect(complete).toBeTruthy;
      expect(error).not.toBeDefined();
      expect(output).toEqual([1, 2, 3, 4, 5]);
      expect(outputComplete).toBeTruthy;
    });

    it('should have a static create function that works also to raise errors', function () {
      expect(typeof Subject.create).toEqual('function');
      let source = Observable.of(1, 2, 3, 4, 5);
      let nexts = [];
      let output = [];
      let error;
      let complete = false;
      let outputComplete = false;
      let destination = {
        closed: false,
        next: function (x) {
          nexts.push(x);
        },
        error: function (err) {
          error = err;
          this.closed = true;
        },
        complete: function () {
          complete = true;
          this.closed = true;
        }
      };
      let sub = Subject.create(destination, source);
      sub.subscribe(function (x) {
        output.push(x);
      }, null, function () {
        outputComplete = true;
      });
      sub.next('a');
      sub.next('b');
      sub.next('c');
      sub.error('boom');
      expect(nexts).toEqual(['a', 'b', 'c']);
      expect(complete).toBeFalsy;
      expect(error).toEqual('boom');
      expect(output).toEqual([1, 2, 3, 4, 5]);
      expect(outputComplete).toBeTruthy;
    });

    it('should be an Observer which can be given to Observable.subscribe', function (done: any) {
      let source = Observable.of(1, 2, 3, 4, 5);
      let subject = new Subject();
      let expected = [1, 2, 3, 4, 5];
      subject.subscribe(function (x) {
        expect(x).toEqual(expected.shift());
      }, function (x) {
        done(new Error('should not be called'));
      }, function () {
        done();
      });
      source.subscribe(subject);
    });

    it('should be usable as an Observer of a finite delayed Observable', function (done: any) {
      let source = Observable.of(1, 2, 3).delay(50);
      let subject = new Subject();
      let expected = [1, 2, 3];
      subject.subscribe(function (x) {
        expect(x).toEqual(expected.shift());
      }, function (x) {
        done(new Error('should not be called'));
      }, function () {
        done();
      });
      source.subscribe(subject);
    });

    it('should throw ObjectUnsubscribedError when emit after unsubscribed', function () {
      let subject = new Subject();
      let errorNext: any;
      let errorError: any;
      let errorComplete: any;
      subject.unsubscribe();

      try {
        subject.next('a');
      } catch (err ) {
        errorNext = err;
      }

      try {
        subject.error('a');
      } catch (err ) {
        errorError = err;
      }

      try {
        subject.complete();
      } catch (err ) {
        errorComplete = err;
      }

      expect(errorNext).toBeDefined();
      expect(errorError).toBeDefined();
      expect(errorComplete).toBeDefined();
    });

    it('should not next after completed', function () {
      let subject = new Subject();
      let results = [];
      subject.subscribe(function (x) { return results.push(x); }, null, function () { return results.push('C'); });
      subject.next('a');
      subject.complete();
      subject.next('b');
      expect(results).toEqual(['a', 'C']);
    });

    it('should not next after error', function () {
      let error = new Error('wut?');
      let subject = new Subject();
      let results = [];
      subject.subscribe(function (x) { return results.push(x); }, function (err) { return results.push(err); });
      subject.next('a');
      subject.error(error);
      subject.next('b');
      expect(results).toEqual(['a', error]);
    });
    // describe('asObservable', function () {
    //
    // });

  });
});
