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
export { FOO };
