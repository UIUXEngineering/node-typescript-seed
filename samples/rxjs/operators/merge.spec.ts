/// <reference path='../../../tools/manual_typings/project/jasmine.d.ts' />

import { merged } from './sourceMerge';

describe('RXJS', () => {
  describe('Operators', () => {
    describe('merge', () => {
      let result: any;

      beforeEach(() =>  {

        merged.subscribe((_result) => {
            result = _result;
          });

      });

      afterEach(() => {
        result = null;
      });

      it('should show last value', () => {
        expect(result).toEqual('Z');
      });
    });
  });
});
