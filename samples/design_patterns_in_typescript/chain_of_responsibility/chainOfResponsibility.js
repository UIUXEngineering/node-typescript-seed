var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ChainOfResponsibilityPattern;
(function (ChainOfResponsibilityPattern) {
    var Handler = (function () {
        function Handler(req) {
            this.req = req;
        }
        Handler.prototype.setHandler = function (handler) {
            this.handler = handler;
        };
        Handler.prototype.operation = function (msg, req) {
            if (req <= this.req) {
                this.handlerRequest(msg);
            }
            else if (this.handler !== null && this.handler !== undefined) {
                this.handler.operation(msg, req);
            }
        };
        Handler.prototype.handlerRequest = function (msg) {
            throw new Error('Abstract method!');
        };
        return Handler;
    }());
    ChainOfResponsibilityPattern.Handler = Handler;
    var ConcreteHandler1 = (function (_super) {
        __extends(ConcreteHandler1, _super);
        function ConcreteHandler1(req) {
            return _super.call(this, req) || this;
        }
        ConcreteHandler1.prototype.handlerRequest = function (msg) {
            console.log('Message (ConcreteHandler1) :: ', msg);
        };
        return ConcreteHandler1;
    }(Handler));
    ChainOfResponsibilityPattern.ConcreteHandler1 = ConcreteHandler1;
    var ConcreteHandler2 = (function (_super) {
        __extends(ConcreteHandler2, _super);
        function ConcreteHandler2(req) {
            return _super.call(this, req) || this;
        }
        ConcreteHandler2.prototype.handlerRequest = function (msg) {
            console.log('Message :: (ConcreteHandler2) ', msg);
        };
        return ConcreteHandler2;
    }(Handler));
    ChainOfResponsibilityPattern.ConcreteHandler2 = ConcreteHandler2;
    var ConcreteHandler3 = (function (_super) {
        __extends(ConcreteHandler3, _super);
        function ConcreteHandler3(req) {
            return _super.call(this, req) || this;
        }
        ConcreteHandler3.prototype.handlerRequest = function (msg) {
            console.log('Message :: (ConcreteHandler3) ', msg);
        };
        return ConcreteHandler3;
    }(Handler));
    ChainOfResponsibilityPattern.ConcreteHandler3 = ConcreteHandler3;
})(ChainOfResponsibilityPattern || (ChainOfResponsibilityPattern = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlc2lnbl9wYXR0ZXJuc19pbl90eXBlc2NyaXB0L2NoYWluX29mX3Jlc3BvbnNpYmlsaXR5L2NoYWluT2ZSZXNwb25zaWJpbGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLElBQVUsNEJBQTRCLENBeURyQztBQXpERCxXQUFVLDRCQUE0QjtJQUVwQztRQUlFLGlCQUFZLEdBQVc7WUFDckIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDakIsQ0FBQztRQUVNLDRCQUFVLEdBQWpCLFVBQWtCLE9BQWdCO1lBQ2hDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3pCLENBQUM7UUFFTSwyQkFBUyxHQUFoQixVQUFpQixHQUFXLEVBQUUsR0FBVztZQUN2QyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDM0IsQ0FBQztZQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQy9ELElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUNuQyxDQUFDO1FBQ0gsQ0FBQztRQUVNLGdDQUFjLEdBQXJCLFVBQXNCLEdBQVc7WUFDL0IsTUFBTSxJQUFJLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3RDLENBQUM7UUFDSCxjQUFDO0lBQUQsQ0F2QkEsQUF1QkMsSUFBQTtJQXZCWSxvQ0FBTyxVQXVCbkIsQ0FBQTtJQUVEO1FBQXNDLG9DQUFPO1FBQzNDLDBCQUFZLEdBQVc7bUJBQ3JCLGtCQUFNLEdBQUcsQ0FBQztRQUNaLENBQUM7UUFFTSx5Q0FBYyxHQUFyQixVQUFzQixHQUFXO1lBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDckQsQ0FBQztRQUNILHVCQUFDO0lBQUQsQ0FSQSxBQVFDLENBUnFDLE9BQU8sR0FRNUM7SUFSWSw2Q0FBZ0IsbUJBUTVCLENBQUE7SUFHRDtRQUFzQyxvQ0FBTztRQUMzQywwQkFBWSxHQUFXO21CQUNyQixrQkFBTSxHQUFHLENBQUM7UUFDWixDQUFDO1FBRU0seUNBQWMsR0FBckIsVUFBc0IsR0FBVztZQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3JELENBQUM7UUFDSCx1QkFBQztJQUFELENBUkEsQUFRQyxDQVJxQyxPQUFPLEdBUTVDO0lBUlksNkNBQWdCLG1CQVE1QixDQUFBO0lBRUQ7UUFBc0Msb0NBQU87UUFDM0MsMEJBQVksR0FBVzttQkFDckIsa0JBQU0sR0FBRyxDQUFDO1FBQ1osQ0FBQztRQUVNLHlDQUFjLEdBQXJCLFVBQXNCLEdBQVc7WUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNyRCxDQUFDO1FBQ0gsdUJBQUM7SUFBRCxDQVJBLEFBUUMsQ0FScUMsT0FBTyxHQVE1QztJQVJZLDZDQUFnQixtQkFRNUIsQ0FBQTtBQUNILENBQUMsRUF6RFMsNEJBQTRCLEtBQTVCLDRCQUE0QixRQXlEckMiLCJmaWxlIjoiZGVzaWduX3BhdHRlcm5zX2luX3R5cGVzY3JpcHQvY2hhaW5fb2ZfcmVzcG9uc2liaWxpdHkvY2hhaW5PZlJlc3BvbnNpYmlsaXR5LmpzIiwic291cmNlc0NvbnRlbnQiOlsibmFtZXNwYWNlIENoYWluT2ZSZXNwb25zaWJpbGl0eVBhdHRlcm4ge1xuXG4gIGV4cG9ydCBjbGFzcyBIYW5kbGVyIHtcbiAgICBwcml2YXRlIGhhbmRsZXI6IEhhbmRsZXI7XG4gICAgcHJpdmF0ZSByZXE6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHJlcTogbnVtYmVyKSB7XG4gICAgICB0aGlzLnJlcSA9IHJlcTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0SGFuZGxlcihoYW5kbGVyOiBIYW5kbGVyKTogdm9pZCB7XG4gICAgICB0aGlzLmhhbmRsZXIgPSBoYW5kbGVyO1xuICAgIH1cblxuICAgIHB1YmxpYyBvcGVyYXRpb24obXNnOiBzdHJpbmcsIHJlcTogbnVtYmVyKTogdm9pZCB7XG4gICAgICBpZiAocmVxIDw9IHRoaXMucmVxKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlclJlcXVlc3QobXNnKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5oYW5kbGVyICE9PSBudWxsICYmIHRoaXMuaGFuZGxlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlci5vcGVyYXRpb24obXNnLCByZXEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBoYW5kbGVyUmVxdWVzdChtc2c6IHN0cmluZyk6IHZvaWQge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBYnN0cmFjdCBtZXRob2QhJyk7XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGNsYXNzIENvbmNyZXRlSGFuZGxlcjEgZXh0ZW5kcyBIYW5kbGVyIHtcbiAgICBjb25zdHJ1Y3RvcihyZXE6IG51bWJlcikge1xuICAgICAgc3VwZXIocmVxKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaGFuZGxlclJlcXVlc3QobXNnOiBzdHJpbmcpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdNZXNzYWdlIChDb25jcmV0ZUhhbmRsZXIxKSA6OiAnLCBtc2cpO1xuICAgIH1cbiAgfVxuXG5cbiAgZXhwb3J0IGNsYXNzIENvbmNyZXRlSGFuZGxlcjIgZXh0ZW5kcyBIYW5kbGVyIHtcbiAgICBjb25zdHJ1Y3RvcihyZXE6IG51bWJlcikge1xuICAgICAgc3VwZXIocmVxKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaGFuZGxlclJlcXVlc3QobXNnOiBzdHJpbmcpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdNZXNzYWdlIDo6IChDb25jcmV0ZUhhbmRsZXIyKSAnLCBtc2cpO1xuICAgIH1cbiAgfVxuXG4gIGV4cG9ydCBjbGFzcyBDb25jcmV0ZUhhbmRsZXIzIGV4dGVuZHMgSGFuZGxlciB7XG4gICAgY29uc3RydWN0b3IocmVxOiBudW1iZXIpIHtcbiAgICAgIHN1cGVyKHJlcSk7XG4gICAgfVxuXG4gICAgcHVibGljIGhhbmRsZXJSZXF1ZXN0KG1zZzogc3RyaW5nKSB7XG4gICAgICBjb25zb2xlLmxvZygnTWVzc2FnZSA6OiAoQ29uY3JldGVIYW5kbGVyMykgJywgbXNnKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
