var MediatorPattern;
(function (MediatorPattern) {
    var Demo;
    (function (Demo) {
        function show() {
            var cm = new MediatorPattern.ConcreteMediator(), c1 = new MediatorPattern.ConcreteColleagueA(cm), c2 = new MediatorPattern.ConcreteColleagueB(cm);
            cm.concreteColleagueA = c1;
            cm.concreteColleagueB = c2;
            c1.send('`send` of ConcreteColleagueA is being called!');
            c2.send('`send` of ConcreteColleagueB is being called!');
        }
        Demo.show = show;
    })(Demo = MediatorPattern.Demo || (MediatorPattern.Demo = {}));
})(MediatorPattern || (MediatorPattern = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlc2lnbl9wYXR0ZXJuc19pbl90eXBlc2NyaXB0L21lZGlhdG9yL2RlbW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsSUFBVSxlQUFlLENBZ0J4QjtBQWhCRCxXQUFVLGVBQWU7SUFDeEIsSUFBaUIsSUFBSSxDQWNwQjtJQWRELFdBQWlCLElBQUk7UUFFcEI7WUFDQyxJQUFJLEVBQUUsR0FBcUMsSUFBSSxlQUFlLENBQUMsZ0JBQWdCLEVBQUUsRUFDaEYsRUFBRSxHQUF1QyxJQUFJLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLENBQUMsRUFDbkYsRUFBRSxHQUF1QyxJQUFJLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUVyRixFQUFFLENBQUMsa0JBQWtCLEdBQUcsRUFBRSxDQUFDO1lBQzNCLEVBQUUsQ0FBQyxrQkFBa0IsR0FBRyxFQUFFLENBQUM7WUFFM0IsRUFBRSxDQUFDLElBQUksQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDO1lBQ3pELEVBQUUsQ0FBQyxJQUFJLENBQUMsK0NBQStDLENBQUMsQ0FBQztRQUUxRCxDQUFDO1FBWGUsU0FBSSxPQVduQixDQUFBO0lBQ0YsQ0FBQyxFQWRnQixJQUFJLEdBQUosb0JBQUksS0FBSixvQkFBSSxRQWNwQjtBQUNGLENBQUMsRUFoQlMsZUFBZSxLQUFmLGVBQWUsUUFnQnhCIiwiZmlsZSI6ImRlc2lnbl9wYXR0ZXJuc19pbl90eXBlc2NyaXB0L21lZGlhdG9yL2RlbW8uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPSdtZWRpYXRvci50cycgLz5cbm5hbWVzcGFjZSBNZWRpYXRvclBhdHRlcm4ge1xuIGV4cG9ydCBuYW1lc3BhY2UgRGVtbyB7XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIHNob3coKSA6IHZvaWQge1xuICAgdmFyIGNtOiBNZWRpYXRvclBhdHRlcm4uQ29uY3JldGVNZWRpYXRvciA9IG5ldyBNZWRpYXRvclBhdHRlcm4uQ29uY3JldGVNZWRpYXRvcigpLFxuICAgIGMxOiBNZWRpYXRvclBhdHRlcm4uQ29uY3JldGVDb2xsZWFndWVBID0gbmV3IE1lZGlhdG9yUGF0dGVybi5Db25jcmV0ZUNvbGxlYWd1ZUEoY20pLFxuICAgIGMyOiBNZWRpYXRvclBhdHRlcm4uQ29uY3JldGVDb2xsZWFndWVCID0gbmV3IE1lZGlhdG9yUGF0dGVybi5Db25jcmV0ZUNvbGxlYWd1ZUIoY20pO1xuXG4gICBjbS5jb25jcmV0ZUNvbGxlYWd1ZUEgPSBjMTtcbiAgIGNtLmNvbmNyZXRlQ29sbGVhZ3VlQiA9IGMyO1xuXG4gICBjMS5zZW5kKCdgc2VuZGAgb2YgQ29uY3JldGVDb2xsZWFndWVBIGlzIGJlaW5nIGNhbGxlZCEnKTtcbiAgIGMyLnNlbmQoJ2BzZW5kYCBvZiBDb25jcmV0ZUNvbGxlYWd1ZUIgaXMgYmVpbmcgY2FsbGVkIScpO1xuXG4gIH1cbiB9XG59XG4iXX0=
