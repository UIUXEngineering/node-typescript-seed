/// <reference path='../../../../tools/manual_typings/project/jasmine.d.ts' />

import { creatObservable } from './array';
import { SubscriberLogger } from '../../rxjs.spec.helpers/SubscriberLogger';

describe('RXJS', () => {
  describe('Observable', () => {
    let logger;

    beforeEach(() =>  {
      logger = SubscriberLogger.create();
      creatObservable(logger);
    });

    afterEach(() => {
      logger = null;
    });

    it('should push array as sequence ', () => {
      expect(logger.nextSequence).toEqual(['Adrià', 'Jen', 'Sergi']);
    });
  });
});


