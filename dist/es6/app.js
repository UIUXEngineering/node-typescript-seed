import { FOO } from './dep/foo';
var Demo = (function () {
    function Demo(Dep) {
        this._name = 'NAME';
        this._dep = new Dep();
    }
    Object.defineProperty(Demo.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (_val) {
            this._name = _val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Demo.prototype, "dep", {
        get: function () {
            return this._dep;
        },
        enumerable: true,
        configurable: true
    });
    return Demo;
}());
export { Demo };
export function create() {
    return new Demo(FOO);
}
