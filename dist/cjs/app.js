"use strict";
var foo_1 = require("./dep/foo");
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
exports.Demo = Demo;
function create() {
    return new Demo(foo_1.FOO);
}
exports.create = create;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsaUNBQWdDO0FBRWhDO0lBSUUsY0FBWSxHQUFPO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsc0JBQUksc0JBQUk7YUFJUjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3BCLENBQUM7YUFORCxVQUFTLElBQVk7WUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDcEIsQ0FBQzs7O09BQUE7SUFNRCxzQkFBSSxxQkFBRzthQUFQO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDbkIsQ0FBQzs7O09BQUE7SUFDSCxXQUFDO0FBQUQsQ0FwQkEsQUFvQkMsSUFBQTtBQXBCWSxvQkFBSTtBQXNCakI7SUFDRSxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBRyxDQUFDLENBQUM7QUFDdkIsQ0FBQztBQUZELHdCQUVDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZPTyB9IGZyb20gJy4vZGVwL2Zvbyc7XG5cbmV4cG9ydCBjbGFzcyBEZW1vIHtcbiAgX25hbWU6IHN0cmluZztcbiAgX2RlcDogRk9PO1xuXG4gIGNvbnN0cnVjdG9yKERlcDphbnkpIHtcbiAgICB0aGlzLl9uYW1lID0gJ05BTUUnO1xuICAgIHRoaXMuX2RlcCA9IG5ldyBEZXAoKTtcbiAgfVxuXG4gIHNldCBuYW1lKF92YWw6IHN0cmluZykge1xuICAgIHRoaXMuX25hbWUgPSBfdmFsO1xuICB9XG5cbiAgZ2V0IG5hbWUoKTpzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG5cbiAgZ2V0IGRlcCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVwO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGUoKTphbnkge1xuICByZXR1cm4gbmV3IERlbW8oRk9PKTtcbn1cbiJdfQ==
