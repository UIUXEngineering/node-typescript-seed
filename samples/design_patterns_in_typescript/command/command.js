var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CommandPattern;
(function (CommandPattern) {
    var Command = (function () {
        function Command() {
        }
        Command.prototype.execute = function () {
            throw new Error('Abstract method!');
        };
        return Command;
    }());
    CommandPattern.Command = Command;
    var ConcreteCommand1 = (function (_super) {
        __extends(ConcreteCommand1, _super);
        function ConcreteCommand1(receiver) {
            var _this = _super.call(this) || this;
            _this.receiver = receiver;
            return _this;
        }
        ConcreteCommand1.prototype.execute = function () {
            console.log('`execute` method of ConcreteCommand1 is being called!');
            this.receiver.action();
        };
        return ConcreteCommand1;
    }(Command));
    CommandPattern.ConcreteCommand1 = ConcreteCommand1;
    var ConcreteCommand2 = (function (_super) {
        __extends(ConcreteCommand2, _super);
        function ConcreteCommand2(receiver) {
            var _this = _super.call(this) || this;
            _this.receiver = receiver;
            return _this;
        }
        ConcreteCommand2.prototype.execute = function () {
            console.log('`execute` method of ConcreteCommand2 is being called!');
            this.receiver.action();
        };
        return ConcreteCommand2;
    }(Command));
    CommandPattern.ConcreteCommand2 = ConcreteCommand2;
    var Invoker = (function () {
        function Invoker() {
            this.commands = [];
        }
        Invoker.prototype.storeAndExecute = function (cmd) {
            this.commands.push(cmd);
            cmd.execute();
        };
        return Invoker;
    }());
    CommandPattern.Invoker = Invoker;
    var Receiver = (function () {
        function Receiver() {
        }
        Receiver.prototype.action = function () {
            console.log('action is being called!');
        };
        return Receiver;
    }());
    CommandPattern.Receiver = Receiver;
})(CommandPattern || (CommandPattern = {}));
(function main() {
    var receiver = new CommandPattern.Receiver(), command1 = new CommandPattern.ConcreteCommand1(receiver), command2 = new CommandPattern.ConcreteCommand2(receiver), invoker = new CommandPattern.Invoker();
    invoker.storeAndExecute(command1);
    invoker.storeAndExecute(command2);
}());

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlc2lnbl9wYXR0ZXJuc19pbl90eXBlc2NyaXB0L2NvbW1hbmQvY29tbWFuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLElBQVUsY0FBYyxDQXFEdkI7QUFyREQsV0FBVSxjQUFjO0lBQ3RCO1FBQUE7UUFJQSxDQUFDO1FBSFEseUJBQU8sR0FBZDtZQUNFLE1BQU0sSUFBSSxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUN0QyxDQUFDO1FBQ0gsY0FBQztJQUFELENBSkEsQUFJQyxJQUFBO0lBSlksc0JBQU8sVUFJbkIsQ0FBQTtJQUVEO1FBQXNDLG9DQUFPO1FBRzNDLDBCQUFZLFFBQWtCO1lBQTlCLFlBQ0UsaUJBQU8sU0FFUjtZQURDLEtBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDOztRQUMzQixDQUFDO1FBRU0sa0NBQU8sR0FBZDtZQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsdURBQXVELENBQUMsQ0FBQztZQUNyRSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3pCLENBQUM7UUFDSCx1QkFBQztJQUFELENBWkEsQUFZQyxDQVpxQyxPQUFPLEdBWTVDO0lBWlksK0JBQWdCLG1CQVk1QixDQUFBO0lBRUQ7UUFBc0Msb0NBQU87UUFHM0MsMEJBQVksUUFBa0I7WUFBOUIsWUFDRSxpQkFBTyxTQUVSO1lBREMsS0FBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7O1FBQzNCLENBQUM7UUFFTSxrQ0FBTyxHQUFkO1lBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1REFBdUQsQ0FBQyxDQUFDO1lBQ3JFLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDekIsQ0FBQztRQUNILHVCQUFDO0lBQUQsQ0FaQSxBQVlDLENBWnFDLE9BQU8sR0FZNUM7SUFaWSwrQkFBZ0IsbUJBWTVCLENBQUE7SUFFRDtRQUdFO1lBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDckIsQ0FBQztRQUVNLGlDQUFlLEdBQXRCLFVBQXVCLEdBQVk7WUFDakMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDeEIsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2hCLENBQUM7UUFDSCxjQUFDO0lBQUQsQ0FYQSxBQVdDLElBQUE7SUFYWSxzQkFBTyxVQVduQixDQUFBO0lBRUQ7UUFBQTtRQUlBLENBQUM7UUFIUSx5QkFBTSxHQUFiO1lBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBQ3pDLENBQUM7UUFDSCxlQUFDO0lBQUQsQ0FKQSxBQUlDLElBQUE7SUFKWSx1QkFBUSxXQUlwQixDQUFBO0FBQ0gsQ0FBQyxFQXJEUyxjQUFjLEtBQWQsY0FBYyxRQXFEdkI7QUFFRCxDQUFDO0lBQ0MsSUFBSSxRQUFRLEdBQTRCLElBQUksY0FBYyxDQUFDLFFBQVEsRUFBRSxFQUNuRSxRQUFRLEdBQTJCLElBQUksY0FBYyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxFQUNoRixRQUFRLEdBQTJCLElBQUksY0FBYyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxFQUNoRixPQUFPLEdBQTJCLElBQUksY0FBYyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBRWpFLE9BQU8sQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbEMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUVwQyxDQUFDLEVBQUUsQ0FBQyxDQUFDIiwiZmlsZSI6ImRlc2lnbl9wYXR0ZXJuc19pbl90eXBlc2NyaXB0L2NvbW1hbmQvY29tbWFuZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm5hbWVzcGFjZSBDb21tYW5kUGF0dGVybiB7XG4gIGV4cG9ydCBjbGFzcyBDb21tYW5kIHtcbiAgICBwdWJsaWMgZXhlY3V0ZSgpOiB2b2lkIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQWJzdHJhY3QgbWV0aG9kIScpO1xuICAgIH1cbiAgfVxuXG4gIGV4cG9ydCBjbGFzcyBDb25jcmV0ZUNvbW1hbmQxIGV4dGVuZHMgQ29tbWFuZCB7XG4gICAgcHJpdmF0ZSByZWNlaXZlcjogUmVjZWl2ZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihyZWNlaXZlcjogUmVjZWl2ZXIpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgICB0aGlzLnJlY2VpdmVyID0gcmVjZWl2ZXI7XG4gICAgfVxuXG4gICAgcHVibGljIGV4ZWN1dGUoKTogdm9pZCB7XG4gICAgICBjb25zb2xlLmxvZygnYGV4ZWN1dGVgIG1ldGhvZCBvZiBDb25jcmV0ZUNvbW1hbmQxIGlzIGJlaW5nIGNhbGxlZCEnKTtcbiAgICAgIHRoaXMucmVjZWl2ZXIuYWN0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGNsYXNzIENvbmNyZXRlQ29tbWFuZDIgZXh0ZW5kcyBDb21tYW5kIHtcbiAgICBwcml2YXRlIHJlY2VpdmVyOiBSZWNlaXZlcjtcblxuICAgIGNvbnN0cnVjdG9yKHJlY2VpdmVyOiBSZWNlaXZlcikge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIHRoaXMucmVjZWl2ZXIgPSByZWNlaXZlcjtcbiAgICB9XG5cbiAgICBwdWJsaWMgZXhlY3V0ZSgpOiB2b2lkIHtcbiAgICAgIGNvbnNvbGUubG9nKCdgZXhlY3V0ZWAgbWV0aG9kIG9mIENvbmNyZXRlQ29tbWFuZDIgaXMgYmVpbmcgY2FsbGVkIScpO1xuICAgICAgdGhpcy5yZWNlaXZlci5hY3Rpb24oKTtcbiAgICB9XG4gIH1cblxuICBleHBvcnQgY2xhc3MgSW52b2tlciB7XG4gICAgcHJpdmF0ZSBjb21tYW5kczogQ29tbWFuZFtdO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICB0aGlzLmNvbW1hbmRzID0gW107XG4gICAgfVxuXG4gICAgcHVibGljIHN0b3JlQW5kRXhlY3V0ZShjbWQ6IENvbW1hbmQpIHtcbiAgICAgIHRoaXMuY29tbWFuZHMucHVzaChjbWQpO1xuICAgICAgY21kLmV4ZWN1dGUoKTtcbiAgICB9XG4gIH1cblxuICBleHBvcnQgY2xhc3MgUmVjZWl2ZXIge1xuICAgIHB1YmxpYyBhY3Rpb24oKTogdm9pZCB7XG4gICAgICBjb25zb2xlLmxvZygnYWN0aW9uIGlzIGJlaW5nIGNhbGxlZCEnKTtcbiAgICB9XG4gIH1cbn1cblxuKGZ1bmN0aW9uIG1haW4oKSB7XG4gIHZhciByZWNlaXZlcjogQ29tbWFuZFBhdHRlcm4uUmVjZWl2ZXIgPSBuZXcgQ29tbWFuZFBhdHRlcm4uUmVjZWl2ZXIoKSxcbiAgICBjb21tYW5kMTogQ29tbWFuZFBhdHRlcm4uQ29tbWFuZCA9IG5ldyBDb21tYW5kUGF0dGVybi5Db25jcmV0ZUNvbW1hbmQxKHJlY2VpdmVyKSxcbiAgICBjb21tYW5kMjogQ29tbWFuZFBhdHRlcm4uQ29tbWFuZCA9IG5ldyBDb21tYW5kUGF0dGVybi5Db25jcmV0ZUNvbW1hbmQyKHJlY2VpdmVyKSxcbiAgICBpbnZva2VyOiBDb21tYW5kUGF0dGVybi5JbnZva2VyID0gbmV3IENvbW1hbmRQYXR0ZXJuLkludm9rZXIoKTtcblxuICBpbnZva2VyLnN0b3JlQW5kRXhlY3V0ZShjb21tYW5kMSk7XG4gIGludm9rZXIuc3RvcmVBbmRFeGVjdXRlKGNvbW1hbmQyKTtcblxufSgpKTtcblxuIl19
