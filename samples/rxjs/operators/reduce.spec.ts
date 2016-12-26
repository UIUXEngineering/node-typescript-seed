/// <reference path='../../../tools/manual_typings/project/jasmine.d.ts' />

import { merged } from './sourceMerge';

describe('RXJS', () => {
  describe('Operators', () => {
    describe('reduce', () => {
      let reduced: any;

      beforeEach(() =>  {

        /**
         * Scan emits and intermediate value, while
         * reduce emits all values once complete.
         *
         * This test does not illustrate the
         * intermediate ability.
         */
        merged.scan((acc, cur) => {
          return acc.concat([cur]);
        }, [])
          .subscribe((_result) => {
            reduced = _result;
          });

      });

      afterEach(() => {
        reduced = null;
      });

      it('should concat all sources', () => {
        expect(reduced).toEqual([ 'A', 'B', 'C', 1, 2, 3, 'X', 'Y', 'Z' ]);
      });
    });
  });
});
