/// <reference path='../../../tools/manual_typings/project/jasmine.d.ts' />

import { createSubscriber } from './usingSubscribe.create';
import { ObserverLogger } from '../rxjs.spec.helpers/ObserverLogger';

describe('RXJS', () => {
  describe('Observer using Subscriber.create', () => {
    let logger;
    let observer; // aka subscriber

    beforeEach(() =>  {
      logger = ObserverLogger.create();
      observer = createSubscriber(logger);
    });

    afterEach(() => {
      logger = null;
      observer = null;
    });

    it('should not have next called', () => {
      expect(logger.nextValue).toEqual(logger.noData);
    });

    it('should not have error called', () => {
      expect(logger.errorValue).toEqual(logger.noData);
    });

    it('should not have completed', () => {
      expect(logger.completeValue).toBeFalsy();
    });

    it('should call next', () => {
      observer.next('next1');
      expect(logger.nextValue).toEqual('next1');
    });

    it('should keep calling next', () => {
      observer.next('next1');
      observer.next('next2');
      observer.next('next3');

      expect(logger.nextValue).toEqual('next3');
      expect(logger.nextSequence).toEqual(['next1', 'next2', 'next3']);
    });

    it('should call error', () => {
      observer.error('err1');
      expect(logger.errorValue).toEqual('err1');
    });

    it('should call error once', () => {
      observer.error('err1');

      /**
       * This will not be called.
       * Errors stop subscribers from subsequent calls.
       */
      observer.error('err2');

      expect(logger.errorValue).toEqual('err1');
      expect(logger.errorSequence).toEqual(['err1']);
      expect(logger.completeValue).toBeFalsy();
    });

    it('should call next once if error occurs', () => {
      observer.next('next1');

      /**
       * Errors stop subscribers from subsequent calls.
       */
      observer.error('err1');

      /**
       * This will not be called
       */
      observer.next('next2');

      expect(logger.nextValue).toEqual('next1'); // first call
      expect(logger.errorValue).toEqual('err1'); // subscriber stopped
      expect(logger.nextSequence).toEqual(['next1']);
      expect(logger.errorSequence).toEqual(['err1']);
      expect(logger.completeValue).toBeFalsy();
    });

    it('should be complete', () => {
      observer.complete(true);
      expect(logger.completeValue).toBeTruthy();
      expect(logger.closed).toBeTruthy();
    });

    it('should not call next if complete', () => {
      observer.complete(true);
      observer.next('next1');

      expect(logger.nextValue).toEqual(logger.noData); // first call
    });

    it('should not call error if complete', () => {
      observer.complete(true);
      observer.error('err1');

      expect(logger.nextValue).toEqual(logger.noData); // first call
    });


  });
});


