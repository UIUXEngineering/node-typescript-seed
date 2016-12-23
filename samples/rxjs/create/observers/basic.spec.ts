/// <reference path='../../../../tools/manual_typings/project/jasmine.d.ts' />

import { createSubscriber } from './basic';
import { SubscriberLogger } from '../../rxjs.spec.helpers/SubscriberLogger';

describe('RXJS Observer ( Subscriber )', () => {
  let logger;
  let observer; // aka subscriber

  beforeEach(() =>  {
    logger = SubscriberLogger.create();
    observer = createSubscriber(logger);
  });

  afterEach(() => {
    logger = null;
    observer = null;
  });

  it('should not have next called', () => {
    expect(logger.next).toEqual(logger.noData);
  });

  it('should not have error called', () => {
    expect(logger.error).toEqual(logger.noData);
  });

  it('should not have completed', () => {
    expect(logger.complete).toBeFalsy();
  });

  it('should call next', () => {
    observer.next('next1');
    expect(logger.next).toEqual('next1');
  });

  it('should keep calling next', () => {
    observer.next('next1');
    observer.next('next2');
    observer.next('next3');

    expect(logger.next).toEqual('next3');
    expect(logger.nextSequence).toEqual(['next1', 'next2', 'next3']);
  });

  it('should call error', () => {
    observer.error('err1');
    expect(logger.error).toEqual('err1');
  });

  it('should call error once', () => {
    observer.error('err1');

    /**
     * This will not be called.
     * Errors stop subscribers from subsequent calls.
     */
    observer.error('err2');

    expect(logger.error).toEqual('err1');
    expect(logger.errorSequence).toEqual(['err1']);
    expect(logger.complete).toBeFalsy();
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

    expect(logger.next).toEqual('next1'); // first call
    expect(logger.error).toEqual('err1'); // subscriber stopped
    expect(logger.nextSequence).toEqual(['next1']);
    expect(logger.errorSequence).toEqual(['err1']);
    expect(logger.complete).toBeFalsy();
  });

  it('should be complete', () => {
    observer.complete(true);
    expect(logger.complete).toBeTruthy();
    expect(logger.closed).toBeTruthy();
  });

  it('should not call next of complete', () => {
    observer.complete(true);
    observer.next('next1');

    expect(logger.next).toEqual(logger.noData); // first call
  });

  it('should not call error of complete', () => {
    observer.complete(true);
    observer.error('err1');

    expect(logger.next).toEqual(logger.noData); // first call
  });


});
