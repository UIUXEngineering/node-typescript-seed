var VisitorPattern;
(function (VisitorPattern) {
    var ConcreteVisitor1 = (function () {
        function ConcreteVisitor1() {
        }
        ConcreteVisitor1.prototype.visitConcreteElement1 = function (concreteElement1) {
            console.log('`visitConcreteElement1` of ConcreteVisitor1 is being called!');
        };
        ConcreteVisitor1.prototype.visitConcreteElement2 = function (concreteElement2) {
            console.log('`visitConcreteElement2` of ConcreteVisitor1 is being called!');
        };
        return ConcreteVisitor1;
    }());
    VisitorPattern.ConcreteVisitor1 = ConcreteVisitor1;
    var ConcreteVisitor2 = (function () {
        function ConcreteVisitor2() {
        }
        ConcreteVisitor2.prototype.visitConcreteElement1 = function (concreteElement1) {
            console.log('`visitConcreteElement1` of ConcreteVisitor2 is being called!');
        };
        ConcreteVisitor2.prototype.visitConcreteElement2 = function (concreteElement2) {
            console.log('`visitConcreteElement2` of ConcreteVisitor2 is being called!');
        };
        return ConcreteVisitor2;
    }());
    VisitorPattern.ConcreteVisitor2 = ConcreteVisitor2;
    var ConcreteElement1 = (function () {
        function ConcreteElement1() {
        }
        ConcreteElement1.prototype.operate = function (visitor) {
            console.log('`operate` of ConcreteElement1 is being called!');
            visitor.visitConcreteElement1(this);
        };
        return ConcreteElement1;
    }());
    VisitorPattern.ConcreteElement1 = ConcreteElement1;
    var ConcreteElement2 = (function () {
        function ConcreteElement2() {
        }
        ConcreteElement2.prototype.operate = function (visitor) {
            console.log('`operate` of ConcreteElement2 is being called!');
            visitor.visitConcreteElement2(this);
        };
        return ConcreteElement2;
    }());
    VisitorPattern.ConcreteElement2 = ConcreteElement2;
    var Objs = (function () {
        function Objs() {
            this.elements = [];
        }
        Objs.prototype.attach = function (e) {
            this.elements.push(e);
        };
        Objs.prototype.detach = function (e) {
            var index = this.elements.indexOf(e);
            this.elements.splice(index, 1);
        };
        Objs.prototype.operate = function (visitor) {
            var i = 0, max = this.elements.length;
            for (; i < max; i += 1) {
                this.elements[i].operate(visitor);
            }
        };
        return Objs;
    }());
    VisitorPattern.Objs = Objs;
})(VisitorPattern || (VisitorPattern = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9zYW1wbGVzL2Rlc2lnbl9wYXR0ZXJuc19pbl90eXBlc2NyaXB0L3Zpc2l0b3IvdmlzaXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLGNBQWMsQ0FtRXZCO0FBbkVELFdBQVUsY0FBYztJQU10QjtRQUFBO1FBUUEsQ0FBQztRQVBRLGdEQUFxQixHQUE1QixVQUE2QixnQkFBa0M7WUFDN0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4REFBOEQsQ0FBQyxDQUFDO1FBQzlFLENBQUM7UUFFTSxnREFBcUIsR0FBNUIsVUFBNkIsZ0JBQWtDO1lBQzdELE9BQU8sQ0FBQyxHQUFHLENBQUMsOERBQThELENBQUMsQ0FBQztRQUM5RSxDQUFDO1FBQ0gsdUJBQUM7SUFBRCxDQVJBLEFBUUMsSUFBQTtJQVJZLCtCQUFnQixtQkFRNUIsQ0FBQTtJQUVEO1FBQUE7UUFRQSxDQUFDO1FBUFEsZ0RBQXFCLEdBQTVCLFVBQTZCLGdCQUFrQztZQUM3RCxPQUFPLENBQUMsR0FBRyxDQUFDLDhEQUE4RCxDQUFDLENBQUM7UUFDOUUsQ0FBQztRQUVNLGdEQUFxQixHQUE1QixVQUE2QixnQkFBa0M7WUFDN0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4REFBOEQsQ0FBQyxDQUFDO1FBQzlFLENBQUM7UUFDSCx1QkFBQztJQUFELENBUkEsQUFRQyxJQUFBO0lBUlksK0JBQWdCLG1CQVE1QixDQUFBO0lBT0Q7UUFBQTtRQUtBLENBQUM7UUFKUSxrQ0FBTyxHQUFkLFVBQWUsT0FBZ0I7WUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnREFBZ0QsQ0FBQyxDQUFDO1lBQzlELE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QyxDQUFDO1FBQ0gsdUJBQUM7SUFBRCxDQUxBLEFBS0MsSUFBQTtJQUxZLCtCQUFnQixtQkFLNUIsQ0FBQTtJQUVEO1FBQUE7UUFLQSxDQUFDO1FBSlEsa0NBQU8sR0FBZCxVQUFlLE9BQWdCO1lBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0RBQWdELENBQUMsQ0FBQztZQUM5RCxPQUFPLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEMsQ0FBQztRQUNILHVCQUFDO0lBQUQsQ0FMQSxBQUtDLElBQUE7SUFMWSwrQkFBZ0IsbUJBSzVCLENBQUE7SUFFRDtRQUFBO1lBQ1UsYUFBUSxHQUFjLEVBQUUsQ0FBQztRQW1CbkMsQ0FBQztRQWpCUSxxQkFBTSxHQUFiLFVBQWMsQ0FBVTtZQUN0QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4QixDQUFDO1FBRU0scUJBQU0sR0FBYixVQUFjLENBQVU7WUFDdEIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLENBQUM7UUFFTSxzQkFBTyxHQUFkLFVBQWUsT0FBZ0I7WUFDN0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUNQLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUU3QixHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO2dCQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNwQyxDQUFDO1FBQ0gsQ0FBQztRQUNILFdBQUM7SUFBRCxDQXBCQSxBQW9CQyxJQUFBO0lBcEJZLG1CQUFJLE9Bb0JoQixDQUFBO0FBRUgsQ0FBQyxFQW5FUyxjQUFjLEtBQWQsY0FBYyxRQW1FdkIiLCJmaWxlIjoiX3NhbXBsZXMvZGVzaWduX3BhdHRlcm5zX2luX3R5cGVzY3JpcHQvdmlzaXRvci92aXNpdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsibmFtZXNwYWNlIFZpc2l0b3JQYXR0ZXJuIHtcbiAgZXhwb3J0IGludGVyZmFjZSBWaXNpdG9yIHtcbiAgICB2aXNpdENvbmNyZXRlRWxlbWVudDEoY29uY3JldGVFbGVtZW50MTogQ29uY3JldGVFbGVtZW50MSk6IHZvaWQ7XG4gICAgdmlzaXRDb25jcmV0ZUVsZW1lbnQyKGNvbmNyZXRlRWxlbWVudDI6IENvbmNyZXRlRWxlbWVudDIpOiB2b2lkO1xuICB9XG5cbiAgZXhwb3J0IGNsYXNzIENvbmNyZXRlVmlzaXRvcjEgaW1wbGVtZW50cyBWaXNpdG9yIHtcbiAgICBwdWJsaWMgdmlzaXRDb25jcmV0ZUVsZW1lbnQxKGNvbmNyZXRlRWxlbWVudDE6IENvbmNyZXRlRWxlbWVudDEpOiB2b2lkIHtcbiAgICAgIGNvbnNvbGUubG9nKCdgdmlzaXRDb25jcmV0ZUVsZW1lbnQxYCBvZiBDb25jcmV0ZVZpc2l0b3IxIGlzIGJlaW5nIGNhbGxlZCEnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdmlzaXRDb25jcmV0ZUVsZW1lbnQyKGNvbmNyZXRlRWxlbWVudDI6IENvbmNyZXRlRWxlbWVudDIpOiB2b2lkIHtcbiAgICAgIGNvbnNvbGUubG9nKCdgdmlzaXRDb25jcmV0ZUVsZW1lbnQyYCBvZiBDb25jcmV0ZVZpc2l0b3IxIGlzIGJlaW5nIGNhbGxlZCEnKTtcbiAgICB9XG4gIH1cblxuICBleHBvcnQgY2xhc3MgQ29uY3JldGVWaXNpdG9yMiBpbXBsZW1lbnRzIFZpc2l0b3Ige1xuICAgIHB1YmxpYyB2aXNpdENvbmNyZXRlRWxlbWVudDEoY29uY3JldGVFbGVtZW50MTogQ29uY3JldGVFbGVtZW50MSk6IHZvaWQge1xuICAgICAgY29uc29sZS5sb2coJ2B2aXNpdENvbmNyZXRlRWxlbWVudDFgIG9mIENvbmNyZXRlVmlzaXRvcjIgaXMgYmVpbmcgY2FsbGVkIScpO1xuICAgIH1cblxuICAgIHB1YmxpYyB2aXNpdENvbmNyZXRlRWxlbWVudDIoY29uY3JldGVFbGVtZW50MjogQ29uY3JldGVFbGVtZW50Mik6IHZvaWQge1xuICAgICAgY29uc29sZS5sb2coJ2B2aXNpdENvbmNyZXRlRWxlbWVudDJgIG9mIENvbmNyZXRlVmlzaXRvcjIgaXMgYmVpbmcgY2FsbGVkIScpO1xuICAgIH1cbiAgfVxuXG5cbiAgZXhwb3J0IGludGVyZmFjZSBFbGVtZW50IHtcbiAgICBvcGVyYXRlKHZpc2l0b3I6IFZpc2l0b3IpOiB2b2lkO1xuICB9XG5cbiAgZXhwb3J0IGNsYXNzIENvbmNyZXRlRWxlbWVudDEge1xuICAgIHB1YmxpYyBvcGVyYXRlKHZpc2l0b3I6IFZpc2l0b3IpOiB2b2lkIHtcbiAgICAgIGNvbnNvbGUubG9nKCdgb3BlcmF0ZWAgb2YgQ29uY3JldGVFbGVtZW50MSBpcyBiZWluZyBjYWxsZWQhJyk7XG4gICAgICB2aXNpdG9yLnZpc2l0Q29uY3JldGVFbGVtZW50MSh0aGlzKTtcbiAgICB9XG4gIH1cblxuICBleHBvcnQgY2xhc3MgQ29uY3JldGVFbGVtZW50MiB7XG4gICAgcHVibGljIG9wZXJhdGUodmlzaXRvcjogVmlzaXRvcik6IHZvaWQge1xuICAgICAgY29uc29sZS5sb2coJ2BvcGVyYXRlYCBvZiBDb25jcmV0ZUVsZW1lbnQyIGlzIGJlaW5nIGNhbGxlZCEnKTtcbiAgICAgIHZpc2l0b3IudmlzaXRDb25jcmV0ZUVsZW1lbnQyKHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIGV4cG9ydCBjbGFzcyBPYmpzIHtcbiAgICBwcml2YXRlIGVsZW1lbnRzOiBFbGVtZW50W10gPSBbXTtcblxuICAgIHB1YmxpYyBhdHRhY2goZTogRWxlbWVudCk6IHZvaWQge1xuICAgICAgdGhpcy5lbGVtZW50cy5wdXNoKGUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBkZXRhY2goZTogRWxlbWVudCk6IHZvaWQge1xuICAgICAgdmFyIGluZGV4ID0gdGhpcy5lbGVtZW50cy5pbmRleE9mKGUpO1xuICAgICAgdGhpcy5lbGVtZW50cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvcGVyYXRlKHZpc2l0b3I6IFZpc2l0b3IpOiB2b2lkIHtcbiAgICAgIHZhciBpID0gMCxcbiAgICAgICAgbWF4ID0gdGhpcy5lbGVtZW50cy5sZW5ndGg7XG5cbiAgICAgIGZvciAoOyBpIDwgbWF4OyBpICs9IDEpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50c1tpXS5vcGVyYXRlKHZpc2l0b3IpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG59XG5cbiJdfQ==
