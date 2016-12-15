var ProxyPattern;
(function (ProxyPattern) {
    var Demo;
    (function (Demo) {
        function show() {
            var proxy1 = new ProxyPattern.Proxy('proxy1'), proxy2 = new ProxyPattern.Proxy('proxy2');
            proxy1.doAction();
            proxy1.doAction();
            proxy2.doAction();
            proxy2.doAction();
            proxy1.doAction();
        }
        Demo.show = show;
    })(Demo = ProxyPattern.Demo || (ProxyPattern.Demo = {}));
})(ProxyPattern || (ProxyPattern = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlc2lnbl9wYXR0ZXJuc19pbl90eXBlc2NyaXB0L3Byb3h5L2RlbW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsSUFBVSxZQUFZLENBZXJCO0FBZkQsV0FBVSxZQUFZO0lBQ3BCLElBQWlCLElBQUksQ0FhcEI7SUFiRCxXQUFpQixJQUFJO1FBQ25CO1lBQ0UsSUFBSSxNQUFNLEdBQXVCLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFFL0QsTUFBTSxHQUF1QixJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFaEUsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ2xCLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNsQixNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDbEIsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ2xCLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUVwQixDQUFDO1FBWGUsU0FBSSxPQVduQixDQUFBO0lBQ0gsQ0FBQyxFQWJnQixJQUFJLEdBQUosaUJBQUksS0FBSixpQkFBSSxRQWFwQjtBQUNILENBQUMsRUFmUyxZQUFZLEtBQVosWUFBWSxRQWVyQiIsImZpbGUiOiJkZXNpZ25fcGF0dGVybnNfaW5fdHlwZXNjcmlwdC9wcm94eS9kZW1vLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD0ncHJveHkudHMnIC8+XG5uYW1lc3BhY2UgUHJveHlQYXR0ZXJuIHtcbiAgZXhwb3J0IG5hbWVzcGFjZSBEZW1vIHtcbiAgICBleHBvcnQgZnVuY3Rpb24gc2hvdygpOiB2b2lkIHtcbiAgICAgIHZhciBwcm94eTE6IFByb3h5UGF0dGVybi5Qcm94eSA9IG5ldyBQcm94eVBhdHRlcm4uUHJveHkoJ3Byb3h5MScpLFxuXG4gICAgICAgIHByb3h5MjogUHJveHlQYXR0ZXJuLlByb3h5ID0gbmV3IFByb3h5UGF0dGVybi5Qcm94eSgncHJveHkyJyk7XG5cbiAgICAgIHByb3h5MS5kb0FjdGlvbigpO1xuICAgICAgcHJveHkxLmRvQWN0aW9uKCk7XG4gICAgICBwcm94eTIuZG9BY3Rpb24oKTtcbiAgICAgIHByb3h5Mi5kb0FjdGlvbigpO1xuICAgICAgcHJveHkxLmRvQWN0aW9uKCk7XG5cbiAgICB9XG4gIH1cbn1cblxuIl19
