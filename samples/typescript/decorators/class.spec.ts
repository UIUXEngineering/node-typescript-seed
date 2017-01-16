/// <reference path='../../../tools/manual_typings/project/jasmine.d.ts' />

describe('typescript', () => {
  describe('decorators', () => {
    it('should add or change static property', () => {
      function Decor(target) {
        target.prop  = true;
        target.prop1 = true;
      }

      @Decor
      class DemoClass {
        static prop = false;
      }
      expect(DemoClass.prop).toEqual(true);
      expect(DemoClass['prop1']).toEqual(true);
    });

    it('should add instance property, but cannot change', () => {
      function Decor(target) {
        target.prototype.prop     = true;
        target.prototype['prop1'] = true;
      }

      @Decor
      class DemoClass {
        prop = false;
      }
      expect(new DemoClass().prop).toEqual(false);
      expect(new DemoClass()['prop1']).toEqual(true);
    });

    it('should defineProperty static property', () => {
      function Decor(target) {
        target._prop = target.prop;
        Object.defineProperty(target, 'prop', {
          get: function () {
            return this._prop;
          },
          set: function (value: string) {
            this._prop = value + ' use set';
          }
        });
        target.prop = 'prop';
      }

      @Decor
      class DemoClass {
        static prop = 'prop';
      }
      expect(DemoClass.prop).toEqual('prop use set');
    });

    it('should defineProperty instance property', () => {
      function Decor(target) {
        target.prototype._prop = target.prototype.prop;
        Object.defineProperty(target.prototype, 'prop', {
          get: function () {
            return this._prop;
          },
          set: function (value: string) {
            this._prop = value + ' use set';
          }
        });
      }

      @Decor
      class DemoClass {
        prop = 'prop';
      }
      const cls = new DemoClass();
      cls.prop  = 'prop';
      expect(cls.prop).toEqual('prop use set');
    });

    it('should defineProperty instance get/set', () => {
      function Decor(target) {
        Object.defineProperty(target.prototype, 'prop', {
          get: function () {
            return this._prop;
          },
          set: function (value: string) {
            this._prop = value + ' use set';
          }
        });
      }

      @Decor
      class DemoClass {
        private _prop: string = 'prop';
        set prop(value: string) {
          this._prop = value;
        };

        get prop() {
          return this._prop;
        };
      }
      const cls = new DemoClass();
      cls.prop  = 'prop';
      expect(cls.prop).toEqual('prop use set');
    });
    it('should add some Function', () => {
      function Decor(...FunList) {
        return function (target) {
          Object.assign(target.prototype, ...FunList)
        }
      }

      const Fun  = {
        hello(str: string) { return 'hello ' + str},
      };
      const Fun2 = {
        getName(){ return 'name'},
        get name() {return 'name2'}
      };

      @Decor(Fun, Fun2)
      class DemoClass {
        hello: (str: string) => string;
      }
      expect(new DemoClass().hello('word')).toEqual('hello word');
      expect(new DemoClass()['getName']()).toEqual('name');
      expect(new DemoClass()['name']).toEqual('name2');
    });
  });
});
