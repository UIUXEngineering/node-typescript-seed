var FactoryMethodPattern;
(function (FactoryMethodPattern) {
    var ConcreteProductA = (function () {
        function ConcreteProductA() {
            this.method = function (param) {
                return 'Method of ConcreteProductA';
            };
        }
        return ConcreteProductA;
    }());
    FactoryMethodPattern.ConcreteProductA = ConcreteProductA;
    var ConcreteProductB = (function () {
        function ConcreteProductB() {
            this.method = function (param) {
                return 'Method of ConcreteProductB';
            };
        }
        return ConcreteProductB;
    }());
    FactoryMethodPattern.ConcreteProductB = ConcreteProductB;
    var ProductFactory = (function () {
        function ProductFactory() {
        }
        ProductFactory.createProduct = function (type) {
            if (type === 'A') {
                return new ConcreteProductA();
            }
            else if (type === 'B') {
                return new ConcreteProductB();
            }
            return null;
        };
        return ProductFactory;
    }());
    FactoryMethodPattern.ProductFactory = ProductFactory;
})(FactoryMethodPattern || (FactoryMethodPattern = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9zYW1wbGVzL2Rlc2lnbl9wYXR0ZXJuc19pbl90eXBlc2NyaXB0L2ZhY3RvcnlfbWV0aG9kL2ZhY3RvcnlNZXRob2QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBVSxvQkFBb0IsQ0E4QjdCO0FBOUJELFdBQVUsb0JBQW9CO0lBTTFCO1FBQUE7WUFDSSxXQUFNLEdBQUcsVUFBQyxLQUFXO2dCQUNqQixNQUFNLENBQUMsNEJBQTRCLENBQUM7WUFDeEMsQ0FBQyxDQUFBO1FBQ0wsQ0FBQztRQUFELHVCQUFDO0lBQUQsQ0FKQSxBQUlDLElBQUE7SUFKWSxxQ0FBZ0IsbUJBSTVCLENBQUE7SUFFRDtRQUFBO1lBQ0ksV0FBTSxHQUFHLFVBQUMsS0FBVztnQkFDakIsTUFBTSxDQUFDLDRCQUE0QixDQUFDO1lBQ3hDLENBQUMsQ0FBQTtRQUNMLENBQUM7UUFBRCx1QkFBQztJQUFELENBSkEsQUFJQyxJQUFBO0lBSlkscUNBQWdCLG1CQUk1QixDQUFBO0lBR0Q7UUFBQTtRQVVBLENBQUM7UUFUaUIsNEJBQWEsR0FBM0IsVUFBNEIsSUFBWTtZQUNwQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDZixNQUFNLENBQUMsSUFBSSxnQkFBZ0IsRUFBRSxDQUFDO1lBQ2xDLENBQUM7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RCLE1BQU0sQ0FBQyxJQUFJLGdCQUFnQixFQUFFLENBQUM7WUFDbEMsQ0FBQztZQUVELE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUNMLHFCQUFDO0lBQUQsQ0FWQSxBQVVDLElBQUE7SUFWWSxtQ0FBYyxpQkFVMUIsQ0FBQTtBQUNMLENBQUMsRUE5QlMsb0JBQW9CLEtBQXBCLG9CQUFvQixRQThCN0IiLCJmaWxlIjoiX3NhbXBsZXMvZGVzaWduX3BhdHRlcm5zX2luX3R5cGVzY3JpcHQvZmFjdG9yeV9tZXRob2QvZmFjdG9yeU1ldGhvZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm5hbWVzcGFjZSBGYWN0b3J5TWV0aG9kUGF0dGVybiB7XG5cbiAgICBleHBvcnQgaW50ZXJmYWNlIEFic3RyYWN0UHJvZHVjdCB7XG4gICAgICAgIG1ldGhvZChwYXJhbT86IGFueSkgOiB2b2lkO1xuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBDb25jcmV0ZVByb2R1Y3RBIGltcGxlbWVudHMgQWJzdHJhY3RQcm9kdWN0IHtcbiAgICAgICAgbWV0aG9kID0gKHBhcmFtPzogYW55KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gJ01ldGhvZCBvZiBDb25jcmV0ZVByb2R1Y3RBJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBDb25jcmV0ZVByb2R1Y3RCIGltcGxlbWVudHMgQWJzdHJhY3RQcm9kdWN0IHtcbiAgICAgICAgbWV0aG9kID0gKHBhcmFtPzogYW55KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gJ01ldGhvZCBvZiBDb25jcmV0ZVByb2R1Y3RCJztcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgZXhwb3J0IGNsYXNzIFByb2R1Y3RGYWN0b3J5IHtcbiAgICAgICAgcHVibGljIHN0YXRpYyBjcmVhdGVQcm9kdWN0KHR5cGU6IHN0cmluZykgOiBBYnN0cmFjdFByb2R1Y3Qge1xuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdBJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29uY3JldGVQcm9kdWN0QSgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnQicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbmNyZXRlUHJvZHVjdEIoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=
