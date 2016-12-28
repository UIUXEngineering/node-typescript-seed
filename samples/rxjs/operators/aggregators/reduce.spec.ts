/// <reference path='../../../../tools/manual_typings/project/jasmine.d.ts' />

import { merged, source2 } from './sourceMerge';

describe('RXJS', () => {
  describe('Operators', () => {
    describe('reduce merged streams', () => {
      let reduced: any;
      let average: number;

      beforeEach(() =>  {

        /**
         * Scan emits and intermediate value, while
         * reduce emits all values once complete.
         *
         * This test does not illustrate the
         * intermediate ability.
         */
        merged.reduce((acc, cur) => {
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

    describe('reduce range', () => {
      let average: number;

      beforeEach(() =>  {

        /**
         * Scan emits and intermediate value, while
         * reduce emits all values once complete.
         *
         * This test does not illustrate the
         * intermediate ability.
         */
        source2.reduce(function(prev, cur) {
          return {
            sum: prev.sum + cur,
            count: prev.count + 1
          };
        }, { sum: 0, count: 0 })
          .map(function(o) {
            return o.sum / o.count;
          })
          .subscribe((_result) => {
            average = _result;
        });

      });

      afterEach(() => {
        average = null;
      });

      it('should concat all sources', () => {
        expect(average).toEqual(2);
      });
    });
  });
});
