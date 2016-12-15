var StrategyPattern;
(function (StrategyPattern) {
    var ConcreteStrategy1 = (function () {
        function ConcreteStrategy1() {
        }
        ConcreteStrategy1.prototype.execute = function () {
            console.log('`execute` method of ConcreteStrategy1 is being called');
        };
        return ConcreteStrategy1;
    }());
    StrategyPattern.ConcreteStrategy1 = ConcreteStrategy1;
    var ConcreteStrategy2 = (function () {
        function ConcreteStrategy2() {
        }
        ConcreteStrategy2.prototype.execute = function () {
            console.log('`execute` method of ConcreteStrategy2 is being called');
        };
        return ConcreteStrategy2;
    }());
    StrategyPattern.ConcreteStrategy2 = ConcreteStrategy2;
    var ConcreteStrategy3 = (function () {
        function ConcreteStrategy3() {
        }
        ConcreteStrategy3.prototype.execute = function () {
            console.log('`execute` method of ConcreteStrategy3 is being called');
        };
        return ConcreteStrategy3;
    }());
    StrategyPattern.ConcreteStrategy3 = ConcreteStrategy3;
    var Context = (function () {
        function Context(strategy) {
            this.strategy = strategy;
        }
        Context.prototype.executeStrategy = function () {
            this.strategy.execute();
        };
        return Context;
    }());
    StrategyPattern.Context = Context;
})(StrategyPattern || (StrategyPattern = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9zYW1wbGVzL2Rlc2lnbl9wYXR0ZXJuc19pbl90eXBlc2NyaXB0L3N0cmF0ZWd5L3N0cmF0ZWd5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQVUsZUFBZSxDQWtDeEI7QUFsQ0QsV0FBVSxlQUFlO0lBS3ZCO1FBQUE7UUFJQSxDQUFDO1FBSFEsbUNBQU8sR0FBZDtZQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsdURBQXVELENBQUMsQ0FBQztRQUN2RSxDQUFDO1FBQ0gsd0JBQUM7SUFBRCxDQUpBLEFBSUMsSUFBQTtJQUpZLGlDQUFpQixvQkFJN0IsQ0FBQTtJQUVEO1FBQUE7UUFJQSxDQUFDO1FBSFEsbUNBQU8sR0FBZDtZQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsdURBQXVELENBQUMsQ0FBQztRQUN2RSxDQUFDO1FBQ0gsd0JBQUM7SUFBRCxDQUpBLEFBSUMsSUFBQTtJQUpZLGlDQUFpQixvQkFJN0IsQ0FBQTtJQUVEO1FBQUE7UUFJQSxDQUFDO1FBSFEsbUNBQU8sR0FBZDtZQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsdURBQXVELENBQUMsQ0FBQztRQUN2RSxDQUFDO1FBQ0gsd0JBQUM7SUFBRCxDQUpBLEFBSUMsSUFBQTtJQUpZLGlDQUFpQixvQkFJN0IsQ0FBQTtJQUVEO1FBR0UsaUJBQVksUUFBa0I7WUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDM0IsQ0FBQztRQUVNLGlDQUFlLEdBQXRCO1lBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMxQixDQUFDO1FBQ0gsY0FBQztJQUFELENBVkEsQUFVQyxJQUFBO0lBVlksdUJBQU8sVUFVbkIsQ0FBQTtBQUNILENBQUMsRUFsQ1MsZUFBZSxLQUFmLGVBQWUsUUFrQ3hCIiwiZmlsZSI6Il9zYW1wbGVzL2Rlc2lnbl9wYXR0ZXJuc19pbl90eXBlc2NyaXB0L3N0cmF0ZWd5L3N0cmF0ZWd5LmpzIiwic291cmNlc0NvbnRlbnQiOlsibmFtZXNwYWNlIFN0cmF0ZWd5UGF0dGVybiB7XG4gIGV4cG9ydCBpbnRlcmZhY2UgU3RyYXRlZ3kge1xuICAgIGV4ZWN1dGUoKTogdm9pZDtcbiAgfVxuXG4gIGV4cG9ydCBjbGFzcyBDb25jcmV0ZVN0cmF0ZWd5MSBpbXBsZW1lbnRzIFN0cmF0ZWd5IHtcbiAgICBwdWJsaWMgZXhlY3V0ZSgpOiB2b2lkIHtcbiAgICAgIGNvbnNvbGUubG9nKCdgZXhlY3V0ZWAgbWV0aG9kIG9mIENvbmNyZXRlU3RyYXRlZ3kxIGlzIGJlaW5nIGNhbGxlZCcpO1xuICAgIH1cbiAgfVxuXG4gIGV4cG9ydCBjbGFzcyBDb25jcmV0ZVN0cmF0ZWd5MiBpbXBsZW1lbnRzIFN0cmF0ZWd5IHtcbiAgICBwdWJsaWMgZXhlY3V0ZSgpOiB2b2lkIHtcbiAgICAgIGNvbnNvbGUubG9nKCdgZXhlY3V0ZWAgbWV0aG9kIG9mIENvbmNyZXRlU3RyYXRlZ3kyIGlzIGJlaW5nIGNhbGxlZCcpO1xuICAgIH1cbiAgfVxuXG4gIGV4cG9ydCBjbGFzcyBDb25jcmV0ZVN0cmF0ZWd5MyBpbXBsZW1lbnRzIFN0cmF0ZWd5IHtcbiAgICBwdWJsaWMgZXhlY3V0ZSgpOiB2b2lkIHtcbiAgICAgIGNvbnNvbGUubG9nKCdgZXhlY3V0ZWAgbWV0aG9kIG9mIENvbmNyZXRlU3RyYXRlZ3kzIGlzIGJlaW5nIGNhbGxlZCcpO1xuICAgIH1cbiAgfVxuXG4gIGV4cG9ydCBjbGFzcyBDb250ZXh0IHtcbiAgICBwcml2YXRlIHN0cmF0ZWd5OiBTdHJhdGVneTtcblxuICAgIGNvbnN0cnVjdG9yKHN0cmF0ZWd5OiBTdHJhdGVneSkge1xuICAgICAgdGhpcy5zdHJhdGVneSA9IHN0cmF0ZWd5O1xuICAgIH1cblxuICAgIHB1YmxpYyBleGVjdXRlU3RyYXRlZ3koKTogdm9pZCB7XG4gICAgICB0aGlzLnN0cmF0ZWd5LmV4ZWN1dGUoKTtcbiAgICB9XG4gIH1cbn1cblxuIl19
