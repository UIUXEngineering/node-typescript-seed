var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BridgePattern;
(function (BridgePattern) {
    var Abstraction = (function () {
        function Abstraction(imp) {
            this.implementor = imp;
        }
        Abstraction.prototype.callIt = function (s) {
            throw new Error('This method is abstract!');
        };
        return Abstraction;
    }());
    BridgePattern.Abstraction = Abstraction;
    var RefinedAbstractionA = (function (_super) {
        __extends(RefinedAbstractionA, _super);
        function RefinedAbstractionA(imp) {
            return _super.call(this, imp) || this;
        }
        RefinedAbstractionA.prototype.callIt = function (s) {
            console.log('This is RefinedAbstractionA');
            this.implementor.callee(s);
        };
        return RefinedAbstractionA;
    }(Abstraction));
    BridgePattern.RefinedAbstractionA = RefinedAbstractionA;
    var RefinedAbstractionB = (function (_super) {
        __extends(RefinedAbstractionB, _super);
        function RefinedAbstractionB(imp) {
            return _super.call(this, imp) || this;
        }
        RefinedAbstractionB.prototype.callIt = function (s) {
            console.log('This is RefinedAbstractionB');
            this.implementor.callee(s);
        };
        return RefinedAbstractionB;
    }(Abstraction));
    BridgePattern.RefinedAbstractionB = RefinedAbstractionB;
    var ConcreteImplementorA = (function () {
        function ConcreteImplementorA() {
        }
        ConcreteImplementorA.prototype.callee = function (s) {
            console.log('`callee` of ConcreteImplementorA is being called.');
            console.log(s);
        };
        return ConcreteImplementorA;
    }());
    BridgePattern.ConcreteImplementorA = ConcreteImplementorA;
    var ConcreteImplementorB = (function () {
        function ConcreteImplementorB() {
        }
        ConcreteImplementorB.prototype.callee = function (s) {
            console.log('`callee` of ConcreteImplementorB is being called.');
            console.log(s);
        };
        return ConcreteImplementorB;
    }());
    BridgePattern.ConcreteImplementorB = ConcreteImplementorB;
})(BridgePattern || (BridgePattern = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9zYW1wbGVzL2Rlc2lnbl9wYXR0ZXJuc19pbl90eXBlc2NyaXB0L2JyaWRnZS9icmlkZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxJQUFVLGFBQWEsQ0FxRHRCO0FBckRELFdBQVUsYUFBYTtJQUVyQjtRQUdFLHFCQUFZLEdBQWdCO1lBQzFCLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO1FBQ3pCLENBQUM7UUFFTSw0QkFBTSxHQUFiLFVBQWMsQ0FBUztZQUNyQixNQUFNLElBQUksS0FBSyxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFDOUMsQ0FBQztRQUNILGtCQUFDO0lBQUQsQ0FWQSxBQVVDLElBQUE7SUFWWSx5QkFBVyxjQVV2QixDQUFBO0lBRUQ7UUFBeUMsdUNBQVc7UUFDbEQsNkJBQVksR0FBZ0I7bUJBQzFCLGtCQUFNLEdBQUcsQ0FBQztRQUNaLENBQUM7UUFFTSxvQ0FBTSxHQUFiLFVBQWMsQ0FBUztZQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUM7WUFDM0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0IsQ0FBQztRQUNILDBCQUFDO0lBQUQsQ0FUQSxBQVNDLENBVHdDLFdBQVcsR0FTbkQ7SUFUWSxpQ0FBbUIsc0JBUy9CLENBQUE7SUFFRDtRQUF5Qyx1Q0FBVztRQUNsRCw2QkFBWSxHQUFnQjttQkFDMUIsa0JBQU0sR0FBRyxDQUFDO1FBQ1osQ0FBQztRQUVNLG9DQUFNLEdBQWIsVUFBYyxDQUFTO1lBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQztZQUMzQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3QixDQUFDO1FBQ0gsMEJBQUM7SUFBRCxDQVRBLEFBU0MsQ0FUd0MsV0FBVyxHQVNuRDtJQVRZLGlDQUFtQixzQkFTL0IsQ0FBQTtJQU1EO1FBQUE7UUFLQSxDQUFDO1FBSlEscUNBQU0sR0FBYixVQUFjLENBQU07WUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtREFBbUQsQ0FBQyxDQUFDO1lBQ2pFLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakIsQ0FBQztRQUNILDJCQUFDO0lBQUQsQ0FMQSxBQUtDLElBQUE7SUFMWSxrQ0FBb0IsdUJBS2hDLENBQUE7SUFFRDtRQUFBO1FBS0EsQ0FBQztRQUpRLHFDQUFNLEdBQWIsVUFBYyxDQUFNO1lBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbURBQW1ELENBQUMsQ0FBQztZQUNqRSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pCLENBQUM7UUFDSCwyQkFBQztJQUFELENBTEEsQUFLQyxJQUFBO0lBTFksa0NBQW9CLHVCQUtoQyxDQUFBO0FBQ0gsQ0FBQyxFQXJEUyxhQUFhLEtBQWIsYUFBYSxRQXFEdEIiLCJmaWxlIjoiX3NhbXBsZXMvZGVzaWduX3BhdHRlcm5zX2luX3R5cGVzY3JpcHQvYnJpZGdlL2JyaWRnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm5hbWVzcGFjZSBCcmlkZ2VQYXR0ZXJuIHtcblxuICBleHBvcnQgY2xhc3MgQWJzdHJhY3Rpb24ge1xuICAgIGltcGxlbWVudG9yOiBJbXBsZW1lbnRvcjtcblxuICAgIGNvbnN0cnVjdG9yKGltcDogSW1wbGVtZW50b3IpIHtcbiAgICAgIHRoaXMuaW1wbGVtZW50b3IgPSBpbXA7XG4gICAgfVxuXG4gICAgcHVibGljIGNhbGxJdChzOiBTdHJpbmcpOiB2b2lkIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVGhpcyBtZXRob2QgaXMgYWJzdHJhY3QhJyk7XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGNsYXNzIFJlZmluZWRBYnN0cmFjdGlvbkEgZXh0ZW5kcyBBYnN0cmFjdGlvbiB7XG4gICAgY29uc3RydWN0b3IoaW1wOiBJbXBsZW1lbnRvcikge1xuICAgICAgc3VwZXIoaW1wKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2FsbEl0KHM6IFN0cmluZyk6IHZvaWQge1xuICAgICAgY29uc29sZS5sb2coJ1RoaXMgaXMgUmVmaW5lZEFic3RyYWN0aW9uQScpO1xuICAgICAgdGhpcy5pbXBsZW1lbnRvci5jYWxsZWUocyk7XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGNsYXNzIFJlZmluZWRBYnN0cmFjdGlvbkIgZXh0ZW5kcyBBYnN0cmFjdGlvbiB7XG4gICAgY29uc3RydWN0b3IoaW1wOiBJbXBsZW1lbnRvcikge1xuICAgICAgc3VwZXIoaW1wKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2FsbEl0KHM6IFN0cmluZyk6IHZvaWQge1xuICAgICAgY29uc29sZS5sb2coJ1RoaXMgaXMgUmVmaW5lZEFic3RyYWN0aW9uQicpO1xuICAgICAgdGhpcy5pbXBsZW1lbnRvci5jYWxsZWUocyk7XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBJbXBsZW1lbnRvciB7XG4gICAgY2FsbGVlKHM6IGFueSk6IHZvaWQ7XG4gIH1cblxuICBleHBvcnQgY2xhc3MgQ29uY3JldGVJbXBsZW1lbnRvckEgaW1wbGVtZW50cyBJbXBsZW1lbnRvciB7XG4gICAgcHVibGljIGNhbGxlZShzOiBhbnkpOiB2b2lkIHtcbiAgICAgIGNvbnNvbGUubG9nKCdgY2FsbGVlYCBvZiBDb25jcmV0ZUltcGxlbWVudG9yQSBpcyBiZWluZyBjYWxsZWQuJyk7XG4gICAgICBjb25zb2xlLmxvZyhzKTtcbiAgICB9XG4gIH1cblxuICBleHBvcnQgY2xhc3MgQ29uY3JldGVJbXBsZW1lbnRvckIgaW1wbGVtZW50cyBJbXBsZW1lbnRvciB7XG4gICAgcHVibGljIGNhbGxlZShzOiBhbnkpOiB2b2lkIHtcbiAgICAgIGNvbnNvbGUubG9nKCdgY2FsbGVlYCBvZiBDb25jcmV0ZUltcGxlbWVudG9yQiBpcyBiZWluZyBjYWxsZWQuJyk7XG4gICAgICBjb25zb2xlLmxvZyhzKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
