(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.typescript = global.typescript || {}, global.typescript.seed = global.typescript.seed || {})));
}(this, (function (exports) { 'use strict';

var FOO = (function () {
    function FOO() {
        this._name = 'FOO';
    }
    Object.defineProperty(FOO.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (_val) {
            this._name = _val;
        },
        enumerable: true,
        configurable: true
    });
    return FOO;
}());

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
function create() {
    return new Demo(FOO);
}

exports.Demo = Demo;
exports.create = create;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.js.map
