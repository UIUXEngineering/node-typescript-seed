var SingletonPattern;
(function (SingletonPattern) {
    var Demo;
    (function (Demo) {
        function show() {
            var singleton1 = SingletonPattern.Singleton.Instance;
            var singleton2 = SingletonPattern.Singleton.Instance;
            if (singleton1 === singleton2) {
                console.log('two singletons are equivalent');
            }
            else {
                console.log('two singletons are not equivalent');
            }
        }
        Demo.show = show;
    })(Demo = SingletonPattern.Demo || (SingletonPattern.Demo = {}));
})(SingletonPattern || (SingletonPattern = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlc2lnbl9wYXR0ZXJuc19pbl90eXBlc2NyaXB0L3NpbmdsZXRvbi9zcmMvZGVtby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxJQUFVLGdCQUFnQixDQWN6QjtBQWRELFdBQVUsZ0JBQWdCO0lBQ3pCLElBQWlCLElBQUksQ0FZcEI7SUFaRCxXQUFpQixJQUFJO1FBRXBCO1lBQ0MsSUFBSSxVQUFVLEdBQUcsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQztZQUNyRCxJQUFJLFVBQVUsR0FBRyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDO1lBRXJELEVBQUUsQ0FBQyxDQUFDLFVBQVUsS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDO2dCQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLCtCQUErQixDQUFDLENBQUM7WUFDOUMsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUNBQW1DLENBQUMsQ0FBQztZQUNsRCxDQUFDO1FBQ0YsQ0FBQztRQVRlLFNBQUksT0FTbkIsQ0FBQTtJQUNGLENBQUMsRUFaZ0IsSUFBSSxHQUFKLHFCQUFJLEtBQUoscUJBQUksUUFZcEI7QUFDRixDQUFDLEVBZFMsZ0JBQWdCLEtBQWhCLGdCQUFnQixRQWN6QiIsImZpbGUiOiJkZXNpZ25fcGF0dGVybnNfaW5fdHlwZXNjcmlwdC9zaW5nbGV0b24vc3JjL2RlbW8uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPSdzaW5nbGV0b24udHMnIC8+XG5uYW1lc3BhY2UgU2luZ2xldG9uUGF0dGVybiB7XG4gZXhwb3J0IG5hbWVzcGFjZSBEZW1vIHtcblxuICBleHBvcnQgZnVuY3Rpb24gc2hvdygpIDogdm9pZCB7XG4gICB2YXIgc2luZ2xldG9uMSA9IFNpbmdsZXRvblBhdHRlcm4uU2luZ2xldG9uLkluc3RhbmNlO1xuICAgdmFyIHNpbmdsZXRvbjIgPSBTaW5nbGV0b25QYXR0ZXJuLlNpbmdsZXRvbi5JbnN0YW5jZTtcblxuICAgaWYgKHNpbmdsZXRvbjEgPT09IHNpbmdsZXRvbjIpIHtcbiAgICBjb25zb2xlLmxvZygndHdvIHNpbmdsZXRvbnMgYXJlIGVxdWl2YWxlbnQnKTtcbiAgIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coJ3R3byBzaW5nbGV0b25zIGFyZSBub3QgZXF1aXZhbGVudCcpO1xuICAgfVxuICB9XG4gfVxufVxuXG4iXX0=
