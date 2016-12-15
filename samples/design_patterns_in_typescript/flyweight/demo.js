var FlyweightPattern;
(function (FlyweightPattern) {
    var Demo;
    (function (Demo) {
        function show() {
            var factory = new FlyweightPattern.FlyweightFactory(), conc1 = factory.getFlyweight('conc1'), conc2 = factory.getFlyweight('conc2');
            conc1.operation('1');
            conc2.operation('2');
        }
        Demo.show = show;
    })(Demo = FlyweightPattern.Demo || (FlyweightPattern.Demo = {}));
})(FlyweightPattern || (FlyweightPattern = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlc2lnbl9wYXR0ZXJuc19pbl90eXBlc2NyaXB0L2ZseXdlaWdodC9kZW1vLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLElBQVUsZ0JBQWdCLENBWXpCO0FBWkQsV0FBVSxnQkFBZ0I7SUFDekIsSUFBaUIsSUFBSSxDQVVwQjtJQVZELFdBQWlCLElBQUk7UUFDcEI7WUFDSSxJQUFJLE9BQU8sR0FBd0MsSUFBSSxnQkFBZ0IsQ0FBQyxnQkFBZ0IsRUFBRSxFQUU3RixLQUFLLEdBQThFLE9BQU8sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEVBQ2hILEtBQUssR0FBOEUsT0FBTyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUVqSCxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3JCLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEIsQ0FBQztRQVJlLFNBQUksT0FRbkIsQ0FBQTtJQUNGLENBQUMsRUFWZ0IsSUFBSSxHQUFKLHFCQUFJLEtBQUoscUJBQUksUUFVcEI7QUFDRixDQUFDLEVBWlMsZ0JBQWdCLEtBQWhCLGdCQUFnQixRQVl6QiIsImZpbGUiOiJkZXNpZ25fcGF0dGVybnNfaW5fdHlwZXNjcmlwdC9mbHl3ZWlnaHQvZGVtby5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9J2ZseXdlaWdodC50cycgLz5cbm5hbWVzcGFjZSBGbHl3ZWlnaHRQYXR0ZXJuIHtcbiBleHBvcnQgbmFtZXNwYWNlIERlbW8ge1xuICBleHBvcnQgZnVuY3Rpb24gc2hvdygpIDogdm9pZCB7XG4gICAgICB2YXIgZmFjdG9yeTogRmx5d2VpZ2h0UGF0dGVybi5GbHl3ZWlnaHRGYWN0b3J5ICAgPSBuZXcgRmx5d2VpZ2h0UGF0dGVybi5GbHl3ZWlnaHRGYWN0b3J5KCksXG5cbiAgIGNvbmMxOiBGbHl3ZWlnaHRQYXR0ZXJuLkNvbmNyZXRlRmx5d2VpZ2h0ICAgID0gPEZseXdlaWdodFBhdHRlcm4uQ29uY3JldGVGbHl3ZWlnaHQ+ZmFjdG9yeS5nZXRGbHl3ZWlnaHQoJ2NvbmMxJyksXG4gICBjb25jMjogRmx5d2VpZ2h0UGF0dGVybi5Db25jcmV0ZUZseXdlaWdodCAgICA9IDxGbHl3ZWlnaHRQYXR0ZXJuLkNvbmNyZXRlRmx5d2VpZ2h0PmZhY3RvcnkuZ2V0Rmx5d2VpZ2h0KCdjb25jMicpO1xuXG4gICBjb25jMS5vcGVyYXRpb24oJzEnKTtcbiAgIGNvbmMyLm9wZXJhdGlvbignMicpO1xuICB9XG4gfVxufVxuXG4iXX0=