/// <reference path='../../../../tools/manual_typings/project/jasmine.d.ts' />

import { range, toArray } from './toArray';

describe('RXJS', () => {
  describe('Operators', () => {
    describe('toArray', () => {
      let rangeResult: any;
      let toArrayResult: any;

      beforeEach(() =>  {

        range().subscribe((_result) => {
          rangeResult = _result;
          });

        toArray().subscribe((_result) => {
          toArrayResult = _result;
        });

      });

      afterEach(() => {
        rangeResult = null;
        toArrayResult = null;
      });

      it('should return last item ( for comparison )', () => {
        expect(rangeResult).toEqual(3);
      });

      it('should return all itsms', () => {
        expect(toArrayResult).toEqual([1, 2, 3]);
      });

    });
  });
});
