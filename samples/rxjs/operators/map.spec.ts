/// <reference path='../../../tools/manual_typings/project/jasmine.d.ts' />

import { x2 } from './map';

describe('RXJS', () => {
  describe('Operators', () => {
    describe('map', () => {
      let x2Result: any;
      let x2ResultReduce: any;
      let x2ResultScan: any;

      beforeEach(() =>  {

        // map
        x2().subscribe((_result) => {
            x2Result = _result;
          });

        // map, reduce
        x2().reduce((acc: number[], cur: number) => {
          return acc.concat([cur]);
        }, [])
          .subscribe((_result) => {
          x2ResultReduce = _result;
        });

        // map, scan
        x2().scan((acc: number[], cur: number) => {
          return acc.concat([cur]);
        }, [])
          .subscribe((_result) => {
            x2ResultScan = _result;
        });

      });

      afterEach(() => {
        x2Result = null;
      });

      it('should return last item multiplied by 2', () => {
        expect(x2Result).toEqual(6);
      });

      it('should return all item2 multiplied by 2', () => {
        expect(x2ResultReduce).toEqual([2, 4, 6]);
      });

      it('should return all item2 multiplied by 2', () => {
        expect(x2ResultScan).toEqual([2, 4, 6]);
      });
    });
  });
});
