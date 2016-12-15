var ProxyPattern;
(function (ProxyPattern) {
    var Proxy = (function () {
        function Proxy(s) {
            this.s = s;
        }
        Proxy.prototype.doAction = function () {
            console.log('`doAction` of Proxy(', this.s, ')');
            if (this.realSubject === null || this.realSubject === undefined) {
                console.log('creating a new RealSubject.');
                this.realSubject = new RealSubject(this.s);
            }
            this.realSubject.doAction();
        };
        return Proxy;
    }());
    ProxyPattern.Proxy = Proxy;
    var RealSubject = (function () {
        function RealSubject(s) {
            this.s = s;
        }
        RealSubject.prototype.doAction = function () {
            console.log('`doAction` of RealSubject', this.s, 'is being called!');
        };
        return RealSubject;
    }());
    ProxyPattern.RealSubject = RealSubject;
})(ProxyPattern || (ProxyPattern = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlc2lnbl9wYXR0ZXJuc19pbl90eXBlc2NyaXB0L3Byb3h5L3Byb3h5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQVUsWUFBWSxDQWtDckI7QUFsQ0QsV0FBVSxZQUFZO0lBS3BCO1FBSUUsZUFBWSxDQUFTO1lBQ25CLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsQ0FBQztRQUVNLHdCQUFRLEdBQWY7WUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDakQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLFdBQVcsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUNoRSxPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUM7Z0JBQzNDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdDLENBQUM7WUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzlCLENBQUM7UUFDSCxZQUFDO0lBQUQsQ0FoQkEsQUFnQkMsSUFBQTtJQWhCWSxrQkFBSyxRQWdCakIsQ0FBQTtJQUVEO1FBR0UscUJBQVksQ0FBUztZQUNuQixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNiLENBQUM7UUFFTSw4QkFBUSxHQUFmO1lBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFDdkUsQ0FBQztRQUNILGtCQUFDO0lBQUQsQ0FWQSxBQVVDLElBQUE7SUFWWSx3QkFBVyxjQVV2QixDQUFBO0FBQ0gsQ0FBQyxFQWxDUyxZQUFZLEtBQVosWUFBWSxRQWtDckIiLCJmaWxlIjoiZGVzaWduX3BhdHRlcm5zX2luX3R5cGVzY3JpcHQvcHJveHkvcHJveHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJuYW1lc3BhY2UgUHJveHlQYXR0ZXJuIHtcbiAgZXhwb3J0IGludGVyZmFjZSBTdWJqZWN0IHtcbiAgICBkb0FjdGlvbigpOiB2b2lkO1xuICB9XG5cbiAgZXhwb3J0IGNsYXNzIFByb3h5IGltcGxlbWVudHMgU3ViamVjdCB7XG4gICAgcHJpdmF0ZSByZWFsU3ViamVjdDogUmVhbFN1YmplY3Q7XG4gICAgcHJpdmF0ZSBzOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihzOiBzdHJpbmcpIHtcbiAgICAgIHRoaXMucyA9IHM7XG4gICAgfVxuXG4gICAgcHVibGljIGRvQWN0aW9uKCk6IHZvaWQge1xuICAgICAgY29uc29sZS5sb2coJ2Bkb0FjdGlvbmAgb2YgUHJveHkoJywgdGhpcy5zLCAnKScpO1xuICAgICAgaWYgKHRoaXMucmVhbFN1YmplY3QgPT09IG51bGwgfHwgdGhpcy5yZWFsU3ViamVjdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjcmVhdGluZyBhIG5ldyBSZWFsU3ViamVjdC4nKTtcbiAgICAgICAgdGhpcy5yZWFsU3ViamVjdCA9IG5ldyBSZWFsU3ViamVjdCh0aGlzLnMpO1xuICAgICAgfVxuICAgICAgdGhpcy5yZWFsU3ViamVjdC5kb0FjdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIGV4cG9ydCBjbGFzcyBSZWFsU3ViamVjdCBpbXBsZW1lbnRzIFN1YmplY3Qge1xuICAgIHByaXZhdGUgczogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3Ioczogc3RyaW5nKSB7XG4gICAgICB0aGlzLnMgPSBzO1xuICAgIH1cblxuICAgIHB1YmxpYyBkb0FjdGlvbigpOiB2b2lkIHtcbiAgICAgIGNvbnNvbGUubG9nKCdgZG9BY3Rpb25gIG9mIFJlYWxTdWJqZWN0JywgdGhpcy5zLCAnaXMgYmVpbmcgY2FsbGVkIScpO1xuICAgIH1cbiAgfVxufVxuIl19
