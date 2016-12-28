/// <reference path='../../../../tools/manual_typings/project/jasmine.d.ts' />

import { merged } from './sourceMerge';

describe('RXJS', () => {
  describe('Operators', () => {
    describe('scan', () => {
      let reduced: any;

      beforeEach(() =>  {

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
