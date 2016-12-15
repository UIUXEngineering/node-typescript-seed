var StatePattern;
(function (StatePattern) {
    var ConcreteStateA = (function () {
        function ConcreteStateA() {
        }
        ConcreteStateA.prototype.handle = function (context) {
            console.log('`handle` method of ConcreteStateA is being called!');
            context.State = new ConcreteStateB();
        };
        return ConcreteStateA;
    }());
    StatePattern.ConcreteStateA = ConcreteStateA;
    var ConcreteStateB = (function () {
        function ConcreteStateB() {
        }
        ConcreteStateB.prototype.handle = function (context) {
            console.log('`handle` method of ConcreteStateB is being called!');
            context.State = new ConcreteStateA();
        };
        return ConcreteStateB;
    }());
    StatePattern.ConcreteStateB = ConcreteStateB;
    var Context = (function () {
        function Context(state) {
            this.state = state;
        }
        Object.defineProperty(Context.prototype, "State", {
            get: function () {
                return this.state;
            },
            set: function (state) {
                this.state = state;
            },
            enumerable: true,
            configurable: true
        });
        Context.prototype.request = function () {
            console.log('request is being called!');
            this.state.handle(this);
        };
        return Context;
    }());
    StatePattern.Context = Context;
})(StatePattern || (StatePattern = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9zYW1wbGVzL2Rlc2lnbl9wYXR0ZXJuc19pbl90eXBlc2NyaXB0L3N0YXRlL3N0YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQVUsWUFBWSxDQXVDckI7QUF2Q0QsV0FBVSxZQUFZO0lBS3BCO1FBQUE7UUFLQSxDQUFDO1FBSlEsK0JBQU0sR0FBYixVQUFjLE9BQWdCO1lBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0RBQW9ELENBQUMsQ0FBQztZQUNsRSxPQUFPLENBQUMsS0FBSyxHQUFHLElBQUksY0FBYyxFQUFFLENBQUM7UUFDdkMsQ0FBQztRQUNILHFCQUFDO0lBQUQsQ0FMQSxBQUtDLElBQUE7SUFMWSwyQkFBYyxpQkFLMUIsQ0FBQTtJQUVEO1FBQUE7UUFLQSxDQUFDO1FBSlEsK0JBQU0sR0FBYixVQUFjLE9BQWdCO1lBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0RBQW9ELENBQUMsQ0FBQztZQUNsRSxPQUFPLENBQUMsS0FBSyxHQUFHLElBQUksY0FBYyxFQUFFLENBQUM7UUFDdkMsQ0FBQztRQUNILHFCQUFDO0lBQUQsQ0FMQSxBQUtDLElBQUE7SUFMWSwyQkFBYyxpQkFLMUIsQ0FBQTtJQUVEO1FBR0UsaUJBQVksS0FBWTtZQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNyQixDQUFDO1FBRUQsc0JBQUksMEJBQUs7aUJBQVQ7Z0JBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDcEIsQ0FBQztpQkFFRCxVQUFVLEtBQVk7Z0JBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLENBQUM7OztXQUpBO1FBTU0seUJBQU8sR0FBZDtZQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQztZQUN4QyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQixDQUFDO1FBQ0gsY0FBQztJQUFELENBbkJBLEFBbUJDLElBQUE7SUFuQlksb0JBQU8sVUFtQm5CLENBQUE7QUFDSCxDQUFDLEVBdkNTLFlBQVksS0FBWixZQUFZLFFBdUNyQiIsImZpbGUiOiJfc2FtcGxlcy9kZXNpZ25fcGF0dGVybnNfaW5fdHlwZXNjcmlwdC9zdGF0ZS9zdGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm5hbWVzcGFjZSBTdGF0ZVBhdHRlcm4ge1xuICBleHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcbiAgICBoYW5kbGUoY29udGV4dDogQ29udGV4dCk6IHZvaWQ7XG4gIH1cblxuICBleHBvcnQgY2xhc3MgQ29uY3JldGVTdGF0ZUEgaW1wbGVtZW50cyBTdGF0ZSB7XG4gICAgcHVibGljIGhhbmRsZShjb250ZXh0OiBDb250ZXh0KTogdm9pZCB7XG4gICAgICBjb25zb2xlLmxvZygnYGhhbmRsZWAgbWV0aG9kIG9mIENvbmNyZXRlU3RhdGVBIGlzIGJlaW5nIGNhbGxlZCEnKTtcbiAgICAgIGNvbnRleHQuU3RhdGUgPSBuZXcgQ29uY3JldGVTdGF0ZUIoKTtcbiAgICB9XG4gIH1cblxuICBleHBvcnQgY2xhc3MgQ29uY3JldGVTdGF0ZUIgaW1wbGVtZW50cyBTdGF0ZSB7XG4gICAgcHVibGljIGhhbmRsZShjb250ZXh0OiBDb250ZXh0KTogdm9pZCB7XG4gICAgICBjb25zb2xlLmxvZygnYGhhbmRsZWAgbWV0aG9kIG9mIENvbmNyZXRlU3RhdGVCIGlzIGJlaW5nIGNhbGxlZCEnKTtcbiAgICAgIGNvbnRleHQuU3RhdGUgPSBuZXcgQ29uY3JldGVTdGF0ZUEoKTtcbiAgICB9XG4gIH1cblxuICBleHBvcnQgY2xhc3MgQ29udGV4dCB7XG4gICAgcHJpdmF0ZSBzdGF0ZTogU3RhdGU7XG5cbiAgICBjb25zdHJ1Y3RvcihzdGF0ZTogU3RhdGUpIHtcbiAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICB9XG5cbiAgICBnZXQgU3RhdGUoKTogU3RhdGUge1xuICAgICAgcmV0dXJuIHRoaXMuc3RhdGU7XG4gICAgfVxuXG4gICAgc2V0IFN0YXRlKHN0YXRlOiBTdGF0ZSkge1xuICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgIH1cblxuICAgIHB1YmxpYyByZXF1ZXN0KCk6IHZvaWQge1xuICAgICAgY29uc29sZS5sb2coJ3JlcXVlc3QgaXMgYmVpbmcgY2FsbGVkIScpO1xuICAgICAgdGhpcy5zdGF0ZS5oYW5kbGUodGhpcyk7XG4gICAgfVxuICB9XG59XG5cbiJdfQ==
