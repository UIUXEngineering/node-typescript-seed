var StrategyPattern;
(function (StrategyPattern) {
    var Demo;
    (function (Demo) {
        function show() {
            var context = new StrategyPattern.Context(new StrategyPattern.ConcreteStrategy1());
            context.executeStrategy();
            context = new StrategyPattern.Context(new StrategyPattern.ConcreteStrategy2());
            context.executeStrategy();
            context = new StrategyPattern.Context(new StrategyPattern.ConcreteStrategy3());
            context.executeStrategy();
        }
        Demo.show = show;
    })(Demo = StrategyPattern.Demo || (StrategyPattern.Demo = {}));
})(StrategyPattern || (StrategyPattern = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlc2lnbl9wYXR0ZXJuc19pbl90eXBlc2NyaXB0L3N0cmF0ZWd5L2RlbW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsSUFBVSxlQUFlLENBaUJ4QjtBQWpCRCxXQUFVLGVBQWU7SUFDdkIsSUFBaUIsSUFBSSxDQWVwQjtJQWZELFdBQWlCLElBQUk7UUFFbkI7WUFDRSxJQUFJLE9BQU8sR0FBNEIsSUFBSSxlQUFlLENBQUMsT0FBTyxDQUFDLElBQUksZUFBZSxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQztZQUU1RyxPQUFPLENBQUMsZUFBZSxFQUFFLENBQUM7WUFFMUIsT0FBTyxHQUFHLElBQUksZUFBZSxDQUFDLE9BQU8sQ0FBQyxJQUFJLGVBQWUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUM7WUFDL0UsT0FBTyxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBRTFCLE9BQU8sR0FBRyxJQUFJLGVBQWUsQ0FBQyxPQUFPLENBQUMsSUFBSSxlQUFlLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO1lBQy9FLE9BQU8sQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUc1QixDQUFDO1FBWmUsU0FBSSxPQVluQixDQUFBO0lBQ0gsQ0FBQyxFQWZnQixJQUFJLEdBQUosb0JBQUksS0FBSixvQkFBSSxRQWVwQjtBQUNILENBQUMsRUFqQlMsZUFBZSxLQUFmLGVBQWUsUUFpQnhCIiwiZmlsZSI6ImRlc2lnbl9wYXR0ZXJuc19pbl90eXBlc2NyaXB0L3N0cmF0ZWd5L2RlbW8uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPSdzdHJhdGVneS50cycgLz5cbm5hbWVzcGFjZSBTdHJhdGVneVBhdHRlcm4ge1xuICBleHBvcnQgbmFtZXNwYWNlIERlbW8ge1xuXG4gICAgZXhwb3J0IGZ1bmN0aW9uIHNob3coKTogdm9pZCB7XG4gICAgICB2YXIgY29udGV4dDogU3RyYXRlZ3lQYXR0ZXJuLkNvbnRleHQgPSBuZXcgU3RyYXRlZ3lQYXR0ZXJuLkNvbnRleHQobmV3IFN0cmF0ZWd5UGF0dGVybi5Db25jcmV0ZVN0cmF0ZWd5MSgpKTtcblxuICAgICAgY29udGV4dC5leGVjdXRlU3RyYXRlZ3koKTtcblxuICAgICAgY29udGV4dCA9IG5ldyBTdHJhdGVneVBhdHRlcm4uQ29udGV4dChuZXcgU3RyYXRlZ3lQYXR0ZXJuLkNvbmNyZXRlU3RyYXRlZ3kyKCkpO1xuICAgICAgY29udGV4dC5leGVjdXRlU3RyYXRlZ3koKTtcblxuICAgICAgY29udGV4dCA9IG5ldyBTdHJhdGVneVBhdHRlcm4uQ29udGV4dChuZXcgU3RyYXRlZ3lQYXR0ZXJuLkNvbmNyZXRlU3RyYXRlZ3kzKCkpO1xuICAgICAgY29udGV4dC5leGVjdXRlU3RyYXRlZ3koKTtcblxuXG4gICAgfVxuICB9XG59XG4iXX0=
