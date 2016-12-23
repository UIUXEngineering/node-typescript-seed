/// <reference path='../../../../tools/manual_typings/project/jasmine.d.ts' />

import { createSubscriber } from './basic';
import { SubscriberMonitor } from '../../SubscriberMonitor';

describe('RXJS Observer ( Subscriber )', () => {
  let monitor;
  let observer; // aka subscriber

  beforeEach(() =>  {
    monitor = SubscriberMonitor.create();
    observer = createSubscriber(monitor);
  });

  afterEach(() => {
    monitor = null;
    observer = null;
  });

  it('should not have next called', () => {
    expect(monitor.next).toEqual(monitor.noData);
  });

  it('should not have error called', () => {
    expect(monitor.error).toEqual(monitor.noData);
  });

  it('should not have completed', () => {
    expect(monitor.complete).toBeFalsy();
  });

  it('should call next', () => {
    observer.next('next1');
    expect(monitor.next).toEqual('next1');
  });

  it('should keep calling next', () => {
    observer.next('next1');
    observer.next('next2');
    observer.next('next3');

    expect(monitor.next).toEqual('next3');
    expect(monitor.nextSequence).toEqual(['next1', 'next2', 'next3']);
  });

  it('should call error', () => {
    observer.error('err1');
    expect(monitor.error).toEqual('err1');
  });

  it('should call error once', () => {
    observer.error('err1');

    /**
     * This will not be called.
     * Errors stop subscribers from subsequent calls.
     */
    observer.error('err2');

    expect(monitor.error).toEqual('err1');
    expect(monitor.errorSequence).toEqual(['err1']);
    expect(monitor.complete).toBeFalsy();
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

    expect(monitor.next).toEqual('next1'); // first call
    expect(monitor.error).toEqual('err1'); // subscriber stopped
    expect(monitor.nextSequence).toEqual(['next1']);
    expect(monitor.errorSequence).toEqual(['err1']);
    expect(monitor.complete).toBeFalsy();
  });

  it('should be complete', () => {
    observer.complete(true);
    expect(monitor.complete).toBeTruthy();
    expect(monitor.closed).toBeTruthy();
  });

  it('should not call next of complete', () => {
    observer.complete(true);
    observer.next('next1');

    expect(monitor.next).toEqual(monitor.noData); // first call
  });

  it('should not call error of complete', () => {
    observer.complete(true);
    observer.error('err1');

    expect(monitor.next).toEqual(monitor.noData); // first call
  });


});
