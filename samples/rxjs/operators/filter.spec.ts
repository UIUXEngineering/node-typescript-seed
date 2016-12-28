/// <reference path='../../../tools/manual_typings/project/jasmine.d.ts' />

import { even } from './filter';

describe('RXJS', () => {
  describe('Operators', () => {
    describe('filter', () => {
      let evenNumbers: any;
      let allEvens: number[];

      beforeEach(() => {

        // filter
        even().subscribe((_result) => {
          evenNumbers = _result;
        });

        // filter
        even()
          .reduce((acc, cur) => {
            return acc.concat([cur]);
          }, [])
          .subscribe((_result) => {
            allEvens = _result;
          });
      });

      afterEach(() => {
        evenNumbers = null;
        allEvens = null;
      });

      it('should return last even number', () => {
        expect(evenNumbers).toEqual(4);
      });

      it('should return all even numbers', () => {
        expect(allEvens).toEqual([2, 4]);

      });

    });
  });
});
