var AdapterPattern;
(function (AdapterPattern) {
    var Adaptee = (function () {
        function Adaptee() {
        }
        Adaptee.prototype.method = function () {
            console.log('`method` of Adaptee is being called');
        };
        return Adaptee;
    }());
    AdapterPattern.Adaptee = Adaptee;
    var Adapter = (function () {
        function Adapter() {
        }
        Adapter.prototype.call = function () {
            console.log('Adapter\'s `call` method is being called');
            var adaptee = new Adaptee();
            adaptee.method();
        };
        return Adapter;
    }());
    AdapterPattern.Adapter = Adapter;
})(AdapterPattern || (AdapterPattern = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlc2lnbl9wYXR0ZXJuc19pbl90eXBlc2NyaXB0L2FkYXB0ZXIvYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLGNBQWMsQ0FtQnZCO0FBbkJELFdBQVUsY0FBYztJQUV0QjtRQUFBO1FBSUEsQ0FBQztRQUhRLHdCQUFNLEdBQWI7WUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLHFDQUFxQyxDQUFDLENBQUM7UUFDckQsQ0FBQztRQUNILGNBQUM7SUFBRCxDQUpBLEFBSUMsSUFBQTtJQUpZLHNCQUFPLFVBSW5CLENBQUE7SUFNRDtRQUFBO1FBTUEsQ0FBQztRQUxRLHNCQUFJLEdBQVg7WUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLDBDQUEwQyxDQUFDLENBQUM7WUFDeEQsSUFBSSxPQUFPLEdBQVksSUFBSSxPQUFPLEVBQUUsQ0FBQztZQUNyQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDbkIsQ0FBQztRQUNILGNBQUM7SUFBRCxDQU5BLEFBTUMsSUFBQTtJQU5ZLHNCQUFPLFVBTW5CLENBQUE7QUFDSCxDQUFDLEVBbkJTLGNBQWMsS0FBZCxjQUFjLFFBbUJ2QiIsImZpbGUiOiJkZXNpZ25fcGF0dGVybnNfaW5fdHlwZXNjcmlwdC9hZGFwdGVyL2FkYXB0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJuYW1lc3BhY2UgQWRhcHRlclBhdHRlcm4ge1xuXG4gIGV4cG9ydCBjbGFzcyBBZGFwdGVlIHtcbiAgICBwdWJsaWMgbWV0aG9kKCk6IHZvaWQge1xuICAgICAgY29uc29sZS5sb2coJ2BtZXRob2RgIG9mIEFkYXB0ZWUgaXMgYmVpbmcgY2FsbGVkJyk7XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBUYXJnZXQge1xuICAgIGNhbGwoKTogdm9pZDtcbiAgfVxuXG4gIGV4cG9ydCBjbGFzcyBBZGFwdGVyIGltcGxlbWVudHMgVGFyZ2V0IHtcbiAgICBwdWJsaWMgY2FsbCgpOiB2b2lkIHtcbiAgICAgIGNvbnNvbGUubG9nKCdBZGFwdGVyXFwncyBgY2FsbGAgbWV0aG9kIGlzIGJlaW5nIGNhbGxlZCcpO1xuICAgICAgdmFyIGFkYXB0ZWU6IEFkYXB0ZWUgPSBuZXcgQWRhcHRlZSgpO1xuICAgICAgYWRhcHRlZS5tZXRob2QoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
