/// <reference path='../../../tools/manual_typings/project/jasmine.d.ts' />

import { catchOperator, passError } from './catch';

describe('RXJS', () => {
  describe('Operators', () => {
    describe('catch', () => {
      let output: any;

      beforeEach(() => {

        catchOperator()
          .subscribe((result: any) => {
            output = result;
          });

      });

      afterEach(() => {
        output = null;
      });

      it('should return error', () => {
        expect(output.error).toEqual('There was an error parsing JSON');
      });

    });

    describe('no catch', () => {
      let output: any;
      let error: any;

      beforeEach(() => {

        passError()
          .subscribe((result: any) => {
            output = result;
        }, (err) => {
            error = err;
          });

      });

      afterEach(() => {
        output = null;
        error = null;
      });

      it('should return first object', () => {
        expect(output).toEqual(jasmine.objectContaining({
          '1': 1
        }));
      });

      it('should return error', () => {
        // console.log(error);
        expect(error).toBeDefined();
      });
    }); // End Describe

  });
});
