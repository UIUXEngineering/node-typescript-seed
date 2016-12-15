var FacadePattern;
(function (FacadePattern) {
    var Demo;
    (function (Demo) {
        function show() {
            var facade = new FacadePattern.Facade();
            facade.operation1();
            facade.operation2();
        }
        Demo.show = show;
    })(Demo = FacadePattern.Demo || (FacadePattern.Demo = {}));
})(FacadePattern || (FacadePattern = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlc2lnbl9wYXR0ZXJuc19pbl90eXBlc2NyaXB0L2ZhY2FkZS9kZW1vLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLElBQVUsYUFBYSxDQVV0QjtBQVZELFdBQVUsYUFBYTtJQUN0QixJQUFpQixJQUFJLENBUXBCO0lBUkQsV0FBaUIsSUFBSTtRQUNwQjtZQUNJLElBQUksTUFBTSxHQUF5QixJQUFJLGFBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUVqRSxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7WUFFcEIsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3JCLENBQUM7UUFOZSxTQUFJLE9BTW5CLENBQUE7SUFDRixDQUFDLEVBUmdCLElBQUksR0FBSixrQkFBSSxLQUFKLGtCQUFJLFFBUXBCO0FBQ0YsQ0FBQyxFQVZTLGFBQWEsS0FBYixhQUFhLFFBVXRCIiwiZmlsZSI6ImRlc2lnbl9wYXR0ZXJuc19pbl90eXBlc2NyaXB0L2ZhY2FkZS9kZW1vLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD0nZmFjYWRlLnRzJyAvPlxubmFtZXNwYWNlIEZhY2FkZVBhdHRlcm4ge1xuIGV4cG9ydCBuYW1lc3BhY2UgRGVtbyB7XG4gIGV4cG9ydCBmdW5jdGlvbiBzaG93KCkgOiB2b2lkIHtcbiAgICAgIHZhciBmYWNhZGU6IEZhY2FkZVBhdHRlcm4uRmFjYWRlID0gbmV3IEZhY2FkZVBhdHRlcm4uRmFjYWRlKCk7XG5cbiAgIGZhY2FkZS5vcGVyYXRpb24xKCk7XG5cbiAgIGZhY2FkZS5vcGVyYXRpb24yKCk7XG4gIH1cbiB9XG59XG5cbiJdfQ==
