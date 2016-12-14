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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFLaEM7SUFJRSxjQUFZLEdBQU87UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7UUFDcEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFNRCxzQkFBSSxzQkFBSTthQVFSO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDcEIsQ0FBQzthQVZELFVBQVMsSUFBWTtZQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNwQixDQUFDOzs7T0FBQTtJQVVELHNCQUFJLHFCQUFHO2FBQVA7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNuQixDQUFDOzs7T0FBQTtJQUNILFdBQUM7QUFBRCxDQTVCQSxBQTRCQyxJQUFBOztBQUVELE1BQU07SUFDSixNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDdkIsQ0FBQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZPTyB9IGZyb20gJy4vZGVwL2Zvbyc7XG5cbi8qKlxuICogU2FtcGxlIERlbW8gQ2xhc3NcbiAqL1xuZXhwb3J0IGNsYXNzIERlbW8ge1xuICBfbmFtZTogc3RyaW5nO1xuICBfZGVwOiBGT087XG5cbiAgY29uc3RydWN0b3IoRGVwOmFueSkge1xuICAgIHRoaXMuX25hbWUgPSAnTkFNRSc7XG4gICAgdGhpcy5fZGVwID0gbmV3IERlcCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIE5hbWUgU2V0dGVyXG4gICAqIEBwYXJhbSBfdmFsXG4gICAqL1xuICBzZXQgbmFtZShfdmFsOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lID0gX3ZhbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBOYW1lIEdldHRlclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgZ2V0IG5hbWUoKTpzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG5cbiAgZ2V0IGRlcCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVwO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGUoKTphbnkge1xuICByZXR1cm4gbmV3IERlbW8oRk9PKTtcbn1cbiJdfQ==
