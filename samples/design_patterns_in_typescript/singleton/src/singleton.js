var SingletonPattern;
(function (SingletonPattern) {
    var Singleton = (function () {
        function Singleton() {
        }
        Object.defineProperty(Singleton, "Instance", {
            get: function () {
                if (this.instance === null || this.instance === undefined) {
                    this.instance = new Singleton();
                }
                return this.instance;
            },
            enumerable: true,
            configurable: true
        });
        return Singleton;
    }());
    SingletonPattern.Singleton = Singleton;
})(SingletonPattern || (SingletonPattern = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9zYW1wbGVzL2Rlc2lnbl9wYXR0ZXJuc19pbl90eXBlc2NyaXB0L3NpbmdsZXRvbi9zcmMvc2luZ2xldG9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQVUsZ0JBQWdCLENBV3pCO0FBWEQsV0FBVSxnQkFBZ0I7SUFDeEI7UUFBQTtRQVNBLENBQUM7UUFOQyxzQkFBVyxxQkFBUTtpQkFBbkI7Z0JBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO29CQUMxRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksU0FBUyxFQUFFLENBQUM7Z0JBQ2xDLENBQUM7Z0JBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDdkIsQ0FBQzs7O1dBQUE7UUFDSCxnQkFBQztJQUFELENBVEEsQUFTQyxJQUFBO0lBVFksMEJBQVMsWUFTckIsQ0FBQTtBQUNILENBQUMsRUFYUyxnQkFBZ0IsS0FBaEIsZ0JBQWdCLFFBV3pCIiwiZmlsZSI6Il9zYW1wbGVzL2Rlc2lnbl9wYXR0ZXJuc19pbl90eXBlc2NyaXB0L3NpbmdsZXRvbi9zcmMvc2luZ2xldG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsibmFtZXNwYWNlIFNpbmdsZXRvblBhdHRlcm4ge1xuICBleHBvcnQgY2xhc3MgU2luZ2xldG9uIHtcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogU2luZ2xldG9uO1xuXG4gICAgc3RhdGljIGdldCBJbnN0YW5jZSgpIHtcbiAgICAgIGlmICh0aGlzLmluc3RhbmNlID09PSBudWxsIHx8IHRoaXMuaW5zdGFuY2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLmluc3RhbmNlID0gbmV3IFNpbmdsZXRvbigpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XG4gICAgfVxuICB9XG59XG4iXX0=
