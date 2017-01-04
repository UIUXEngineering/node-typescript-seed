/// <reference path='../../../tools/manual_typings/project/jasmine.d.ts' />

import { creatObservable } from './array';
import { ObserverLogger } from '../rxjs.spec.helpers/ObserverLogger';

describe('RXJS', () => {
  describe('Observable', () => {
    let logger;

    beforeEach(() =>  {
      logger = ObserverLogger.create();
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


