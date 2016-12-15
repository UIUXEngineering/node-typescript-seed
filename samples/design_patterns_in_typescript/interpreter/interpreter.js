var InterpreterPattern;
(function (InterpreterPattern) {
    var Context = (function () {
        function Context() {
        }
        return Context;
    }());
    InterpreterPattern.Context = Context;
    var TerminalExpression = (function () {
        function TerminalExpression() {
        }
        TerminalExpression.prototype.interpret = function (context) {
            console.log('`interpret` method of TerminalExpression is being called!');
        };
        return TerminalExpression;
    }());
    InterpreterPattern.TerminalExpression = TerminalExpression;
    var NonterminalExpression = (function () {
        function NonterminalExpression() {
        }
        NonterminalExpression.prototype.interpret = function (context) {
            console.log('`interpret` method of NonterminalExpression is being called!');
        };
        return NonterminalExpression;
    }());
    InterpreterPattern.NonterminalExpression = NonterminalExpression;
})(InterpreterPattern || (InterpreterPattern = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9zYW1wbGVzL2Rlc2lnbl9wYXR0ZXJuc19pbl90eXBlc2NyaXB0L2ludGVycHJldGVyL2ludGVycHJldGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQVUsa0JBQWtCLENBb0IzQjtBQXBCRCxXQUFVLGtCQUFrQjtJQUMxQjtRQUFBO1FBQ0EsQ0FBQztRQUFELGNBQUM7SUFBRCxDQURBLEFBQ0MsSUFBQTtJQURZLDBCQUFPLFVBQ25CLENBQUE7SUFNRDtRQUFBO1FBSUEsQ0FBQztRQUhRLHNDQUFTLEdBQWhCLFVBQWlCLE9BQWdCO1lBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkRBQTJELENBQUMsQ0FBQztRQUMzRSxDQUFDO1FBQ0gseUJBQUM7SUFBRCxDQUpBLEFBSUMsSUFBQTtJQUpZLHFDQUFrQixxQkFJOUIsQ0FBQTtJQUVEO1FBQUE7UUFLQSxDQUFDO1FBSFEseUNBQVMsR0FBaEIsVUFBaUIsT0FBZ0I7WUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4REFBOEQsQ0FBQyxDQUFDO1FBQzlFLENBQUM7UUFDSCw0QkFBQztJQUFELENBTEEsQUFLQyxJQUFBO0lBTFksd0NBQXFCLHdCQUtqQyxDQUFBO0FBQ0gsQ0FBQyxFQXBCUyxrQkFBa0IsS0FBbEIsa0JBQWtCLFFBb0IzQiIsImZpbGUiOiJfc2FtcGxlcy9kZXNpZ25fcGF0dGVybnNfaW5fdHlwZXNjcmlwdC9pbnRlcnByZXRlci9pbnRlcnByZXRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm5hbWVzcGFjZSBJbnRlcnByZXRlclBhdHRlcm4ge1xuICBleHBvcnQgY2xhc3MgQ29udGV4dCB7XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIEFic3RyYWN0RXhwcmVzc2lvbiB7XG4gICAgaW50ZXJwcmV0KGNvbnRleHQ6IENvbnRleHQpOiB2b2lkO1xuICB9XG5cbiAgZXhwb3J0IGNsYXNzIFRlcm1pbmFsRXhwcmVzc2lvbiBpbXBsZW1lbnRzIEFic3RyYWN0RXhwcmVzc2lvbiB7XG4gICAgcHVibGljIGludGVycHJldChjb250ZXh0OiBDb250ZXh0KTogdm9pZCB7XG4gICAgICBjb25zb2xlLmxvZygnYGludGVycHJldGAgbWV0aG9kIG9mIFRlcm1pbmFsRXhwcmVzc2lvbiBpcyBiZWluZyBjYWxsZWQhJyk7XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGNsYXNzIE5vbnRlcm1pbmFsRXhwcmVzc2lvbiBpbXBsZW1lbnRzIEFic3RyYWN0RXhwcmVzc2lvbiB7XG5cbiAgICBwdWJsaWMgaW50ZXJwcmV0KGNvbnRleHQ6IENvbnRleHQpOiB2b2lkIHtcbiAgICAgIGNvbnNvbGUubG9nKCdgaW50ZXJwcmV0YCBtZXRob2Qgb2YgTm9udGVybWluYWxFeHByZXNzaW9uIGlzIGJlaW5nIGNhbGxlZCEnKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
