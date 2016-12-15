var AbstractFactoryPattern;
(function (AbstractFactoryPattern) {
    var ProductA1 = (function () {
        function ProductA1() {
            this.methodA = function () {
                return 'This is methodA of ProductA1';
            };
        }
        return ProductA1;
    }());
    AbstractFactoryPattern.ProductA1 = ProductA1;
    var ProductB1 = (function () {
        function ProductB1() {
            this.methodB = function () {
                return 1;
            };
        }
        return ProductB1;
    }());
    AbstractFactoryPattern.ProductB1 = ProductB1;
    var ProductA2 = (function () {
        function ProductA2() {
            this.methodA = function () {
                return 'This is methodA of ProductA2';
            };
        }
        return ProductA2;
    }());
    AbstractFactoryPattern.ProductA2 = ProductA2;
    var ProductB2 = (function () {
        function ProductB2() {
            this.methodB = function () {
                return 2;
            };
        }
        return ProductB2;
    }());
    AbstractFactoryPattern.ProductB2 = ProductB2;
    var ConcreteFactory1 = (function () {
        function ConcreteFactory1() {
        }
        ConcreteFactory1.prototype.createProductA = function (param) {
            return new ProductA1();
        };
        ConcreteFactory1.prototype.createProductB = function (param) {
            return new ProductB1();
        };
        return ConcreteFactory1;
    }());
    AbstractFactoryPattern.ConcreteFactory1 = ConcreteFactory1;
    var ConcreteFactory2 = (function () {
        function ConcreteFactory2() {
        }
        ConcreteFactory2.prototype.createProductA = function (param) {
            return new ProductA2();
        };
        ConcreteFactory2.prototype.createProductB = function (param) {
            return new ProductB2();
        };
        return ConcreteFactory2;
    }());
    AbstractFactoryPattern.ConcreteFactory2 = ConcreteFactory2;
    var Tester = (function () {
        function Tester(factory) {
            this.abstractProductA = factory.createProductA();
            this.abstractProductB = factory.createProductB();
        }
        Tester.prototype.test = function () {
            console.log(this.abstractProductA.methodA());
            console.log(this.abstractProductB.methodB());
        };
        return Tester;
    }());
    AbstractFactoryPattern.Tester = Tester;
})(AbstractFactoryPattern || (AbstractFactoryPattern = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9zYW1wbGVzL2Rlc2lnbl9wYXR0ZXJuc19pbl90eXBlc2NyaXB0L2Fic3RyYWN0X2ZhY3RvcnkvYWJzdHJhY3RGYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQVUsc0JBQXNCLENBd0UvQjtBQXhFRCxXQUFVLHNCQUFzQjtJQWM5QjtRQUFBO1lBQ0UsWUFBTyxHQUFHO2dCQUNSLE1BQU0sQ0FBQyw4QkFBOEIsQ0FBQztZQUN4QyxDQUFDLENBQUE7UUFDSCxDQUFDO1FBQUQsZ0JBQUM7SUFBRCxDQUpBLEFBSUMsSUFBQTtJQUpZLGdDQUFTLFlBSXJCLENBQUE7SUFDRDtRQUFBO1lBQ0UsWUFBTyxHQUFHO2dCQUNSLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDWCxDQUFDLENBQUE7UUFDSCxDQUFDO1FBQUQsZ0JBQUM7SUFBRCxDQUpBLEFBSUMsSUFBQTtJQUpZLGdDQUFTLFlBSXJCLENBQUE7SUFFRDtRQUFBO1lBQ0UsWUFBTyxHQUFHO2dCQUNSLE1BQU0sQ0FBQyw4QkFBOEIsQ0FBQztZQUN4QyxDQUFDLENBQUE7UUFDSCxDQUFDO1FBQUQsZ0JBQUM7SUFBRCxDQUpBLEFBSUMsSUFBQTtJQUpZLGdDQUFTLFlBSXJCLENBQUE7SUFDRDtRQUFBO1lBQ0UsWUFBTyxHQUFHO2dCQUNSLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDWCxDQUFDLENBQUE7UUFDSCxDQUFDO1FBQUQsZ0JBQUM7SUFBRCxDQUpBLEFBSUMsSUFBQTtJQUpZLGdDQUFTLFlBSXJCLENBQUE7SUFHRDtRQUFBO1FBUUEsQ0FBQztRQVBDLHlDQUFjLEdBQWQsVUFBZSxLQUFXO1lBQ3hCLE1BQU0sQ0FBQyxJQUFJLFNBQVMsRUFBRSxDQUFDO1FBQ3pCLENBQUM7UUFFRCx5Q0FBYyxHQUFkLFVBQWUsS0FBVztZQUN4QixNQUFNLENBQUMsSUFBSSxTQUFTLEVBQUUsQ0FBQztRQUN6QixDQUFDO1FBQ0gsdUJBQUM7SUFBRCxDQVJBLEFBUUMsSUFBQTtJQVJZLHVDQUFnQixtQkFRNUIsQ0FBQTtJQUNEO1FBQUE7UUFRQSxDQUFDO1FBUEMseUNBQWMsR0FBZCxVQUFlLEtBQVc7WUFDeEIsTUFBTSxDQUFDLElBQUksU0FBUyxFQUFFLENBQUM7UUFDekIsQ0FBQztRQUVELHlDQUFjLEdBQWQsVUFBZSxLQUFXO1lBQ3hCLE1BQU0sQ0FBQyxJQUFJLFNBQVMsRUFBRSxDQUFDO1FBQ3pCLENBQUM7UUFDSCx1QkFBQztJQUFELENBUkEsQUFRQyxJQUFBO0lBUlksdUNBQWdCLG1CQVE1QixDQUFBO0lBR0Q7UUFJRSxnQkFBWSxPQUF3QjtZQUNsQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ2pELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbkQsQ0FBQztRQUVNLHFCQUFJLEdBQVg7WUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1lBQzdDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDL0MsQ0FBQztRQUNILGFBQUM7SUFBRCxDQWJBLEFBYUMsSUFBQTtJQWJZLDZCQUFNLFNBYWxCLENBQUE7QUFFSCxDQUFDLEVBeEVTLHNCQUFzQixLQUF0QixzQkFBc0IsUUF3RS9CIiwiZmlsZSI6Il9zYW1wbGVzL2Rlc2lnbl9wYXR0ZXJuc19pbl90eXBlc2NyaXB0L2Fic3RyYWN0X2ZhY3RvcnkvYWJzdHJhY3RGYWN0b3J5LmpzIiwic291cmNlc0NvbnRlbnQiOlsibmFtZXNwYWNlIEFic3RyYWN0RmFjdG9yeVBhdHRlcm4ge1xuICBleHBvcnQgaW50ZXJmYWNlIEFic3RyYWN0UHJvZHVjdEEge1xuICAgIG1ldGhvZEEoKTogc3RyaW5nO1xuICB9XG4gIGV4cG9ydCBpbnRlcmZhY2UgQWJzdHJhY3RQcm9kdWN0QiB7XG4gICAgbWV0aG9kQigpOiBudW1iZXI7XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIEFic3RyYWN0RmFjdG9yeSB7XG4gICAgY3JlYXRlUHJvZHVjdEEocGFyYW0/OiBhbnkpOiBBYnN0cmFjdFByb2R1Y3RBO1xuICAgIGNyZWF0ZVByb2R1Y3RCKCk6IEFic3RyYWN0UHJvZHVjdEI7XG4gIH1cblxuXG4gIGV4cG9ydCBjbGFzcyBQcm9kdWN0QTEgaW1wbGVtZW50cyBBYnN0cmFjdFByb2R1Y3RBIHtcbiAgICBtZXRob2RBID0gKCkgPT4ge1xuICAgICAgcmV0dXJuICdUaGlzIGlzIG1ldGhvZEEgb2YgUHJvZHVjdEExJztcbiAgICB9XG4gIH1cbiAgZXhwb3J0IGNsYXNzIFByb2R1Y3RCMSBpbXBsZW1lbnRzIEFic3RyYWN0UHJvZHVjdEIge1xuICAgIG1ldGhvZEIgPSAoKSA9PiB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9XG4gIH1cblxuICBleHBvcnQgY2xhc3MgUHJvZHVjdEEyIGltcGxlbWVudHMgQWJzdHJhY3RQcm9kdWN0QSB7XG4gICAgbWV0aG9kQSA9ICgpID0+IHtcbiAgICAgIHJldHVybiAnVGhpcyBpcyBtZXRob2RBIG9mIFByb2R1Y3RBMic7XG4gICAgfVxuICB9XG4gIGV4cG9ydCBjbGFzcyBQcm9kdWN0QjIgaW1wbGVtZW50cyBBYnN0cmFjdFByb2R1Y3RCIHtcbiAgICBtZXRob2RCID0gKCkgPT4ge1xuICAgICAgcmV0dXJuIDI7XG4gICAgfVxuICB9XG5cblxuICBleHBvcnQgY2xhc3MgQ29uY3JldGVGYWN0b3J5MSBpbXBsZW1lbnRzIEFic3RyYWN0RmFjdG9yeSB7XG4gICAgY3JlYXRlUHJvZHVjdEEocGFyYW0/OiBhbnkpOiBBYnN0cmFjdFByb2R1Y3RBIHtcbiAgICAgIHJldHVybiBuZXcgUHJvZHVjdEExKCk7XG4gICAgfVxuXG4gICAgY3JlYXRlUHJvZHVjdEIocGFyYW0/OiBhbnkpOiBBYnN0cmFjdFByb2R1Y3RCIHtcbiAgICAgIHJldHVybiBuZXcgUHJvZHVjdEIxKCk7XG4gICAgfVxuICB9XG4gIGV4cG9ydCBjbGFzcyBDb25jcmV0ZUZhY3RvcnkyIGltcGxlbWVudHMgQWJzdHJhY3RGYWN0b3J5IHtcbiAgICBjcmVhdGVQcm9kdWN0QShwYXJhbT86IGFueSk6IEFic3RyYWN0UHJvZHVjdEEge1xuICAgICAgcmV0dXJuIG5ldyBQcm9kdWN0QTIoKTtcbiAgICB9XG5cbiAgICBjcmVhdGVQcm9kdWN0QihwYXJhbT86IGFueSk6IEFic3RyYWN0UHJvZHVjdEIge1xuICAgICAgcmV0dXJuIG5ldyBQcm9kdWN0QjIoKTtcbiAgICB9XG4gIH1cblxuXG4gIGV4cG9ydCBjbGFzcyBUZXN0ZXIge1xuICAgIHByaXZhdGUgYWJzdHJhY3RQcm9kdWN0QTogQWJzdHJhY3RQcm9kdWN0QTtcbiAgICBwcml2YXRlIGFic3RyYWN0UHJvZHVjdEI6IEFic3RyYWN0UHJvZHVjdEI7XG5cbiAgICBjb25zdHJ1Y3RvcihmYWN0b3J5OiBBYnN0cmFjdEZhY3RvcnkpIHtcbiAgICAgIHRoaXMuYWJzdHJhY3RQcm9kdWN0QSA9IGZhY3RvcnkuY3JlYXRlUHJvZHVjdEEoKTtcbiAgICAgIHRoaXMuYWJzdHJhY3RQcm9kdWN0QiA9IGZhY3RvcnkuY3JlYXRlUHJvZHVjdEIoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdGVzdCgpOiB2b2lkIHtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuYWJzdHJhY3RQcm9kdWN0QS5tZXRob2RBKCkpO1xuICAgICAgY29uc29sZS5sb2codGhpcy5hYnN0cmFjdFByb2R1Y3RCLm1ldGhvZEIoKSk7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==
