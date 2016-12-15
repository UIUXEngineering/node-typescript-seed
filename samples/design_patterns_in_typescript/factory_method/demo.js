var FactoryMethodPattern;
(function (FactoryMethodPattern) {
    var Demo;
    (function (Demo) {
        function show() {
            var a = FactoryMethodPattern.ProductFactory.createProduct('A');
            var b = FactoryMethodPattern.ProductFactory.createProduct('B');
            console.log(a.method());
            console.log(b.method());
        }
        Demo.show = show;
        ;
    })(Demo = FactoryMethodPattern.Demo || (FactoryMethodPattern.Demo = {}));
})(FactoryMethodPattern || (FactoryMethodPattern = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlc2lnbl9wYXR0ZXJuc19pbl90eXBlc2NyaXB0L2ZhY3RvcnlfbWV0aG9kL2RlbW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsSUFBVSxvQkFBb0IsQ0FVN0I7QUFWRCxXQUFVLG9CQUFvQjtJQUM3QixJQUFpQixJQUFJLENBUXBCO0lBUkQsV0FBaUIsSUFBSTtRQUNwQjtZQUNJLElBQUksQ0FBQyxHQUF5QyxvQkFBb0IsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3JHLElBQUksQ0FBQyxHQUF5QyxvQkFBb0IsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRXJHLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7WUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUM1QixDQUFDO1FBTmUsU0FBSSxPQU1uQixDQUFBO1FBQUEsQ0FBQztJQUNILENBQUMsRUFSZ0IsSUFBSSxHQUFKLHlCQUFJLEtBQUoseUJBQUksUUFRcEI7QUFDRixDQUFDLEVBVlMsb0JBQW9CLEtBQXBCLG9CQUFvQixRQVU3QiIsImZpbGUiOiJkZXNpZ25fcGF0dGVybnNfaW5fdHlwZXNjcmlwdC9mYWN0b3J5X21ldGhvZC9kZW1vLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD0nZmFjdG9yeU1ldGhvZC50cycgLz5cblxubmFtZXNwYWNlIEZhY3RvcnlNZXRob2RQYXR0ZXJuIHtcbiBleHBvcnQgbmFtZXNwYWNlIERlbW8ge1xuICBleHBvcnQgZnVuY3Rpb24gc2hvdygpIDogdm9pZCB7XG4gICAgICB2YXIgYTogRmFjdG9yeU1ldGhvZFBhdHRlcm4uQWJzdHJhY3RQcm9kdWN0ID0gRmFjdG9yeU1ldGhvZFBhdHRlcm4uUHJvZHVjdEZhY3RvcnkuY3JlYXRlUHJvZHVjdCgnQScpO1xuICAgICAgdmFyIGI6IEZhY3RvcnlNZXRob2RQYXR0ZXJuLkFic3RyYWN0UHJvZHVjdCA9IEZhY3RvcnlNZXRob2RQYXR0ZXJuLlByb2R1Y3RGYWN0b3J5LmNyZWF0ZVByb2R1Y3QoJ0InKTtcblxuICAgICAgY29uc29sZS5sb2coYS5tZXRob2QoKSk7XG4gICAgICBjb25zb2xlLmxvZyhiLm1ldGhvZCgpKTtcbiAgfTtcbiB9XG59XG5cbiJdfQ==
