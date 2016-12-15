var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var TemplateMethodPattern;
(function (TemplateMethodPattern) {
    var AbstractClass = (function () {
        function AbstractClass() {
        }
        AbstractClass.prototype.method1 = function () {
            throw new Error('Abstract Method');
        };
        AbstractClass.prototype.method2 = function () {
            throw new Error('Abstract Method');
        };
        AbstractClass.prototype.method3 = function () {
            throw new Error('Abstract Method');
        };
        AbstractClass.prototype.templateMethod = function () {
            console.log('templateMethod is being called');
            this.method1();
            this.method2();
            this.method3();
        };
        return AbstractClass;
    }());
    TemplateMethodPattern.AbstractClass = AbstractClass;
    var ConcreteClass1 = (function (_super) {
        __extends(ConcreteClass1, _super);
        function ConcreteClass1() {
            return _super.apply(this, arguments) || this;
        }
        ConcreteClass1.prototype.method1 = function () {
            console.log('method1 of ConcreteClass1');
        };
        ConcreteClass1.prototype.method2 = function () {
            console.log('method2 of ConcreteClass1');
        };
        ConcreteClass1.prototype.method3 = function () {
            console.log('method3 of ConcreteClass1');
        };
        return ConcreteClass1;
    }(AbstractClass));
    TemplateMethodPattern.ConcreteClass1 = ConcreteClass1;
    var ConcreteClass2 = (function (_super) {
        __extends(ConcreteClass2, _super);
        function ConcreteClass2() {
            return _super.apply(this, arguments) || this;
        }
        ConcreteClass2.prototype.method1 = function () {
            console.log('method1 of ConcreteClass2');
        };
        ConcreteClass2.prototype.method2 = function () {
            console.log('method2 of ConcreteClass2');
        };
        ConcreteClass2.prototype.method3 = function () {
            console.log('method3 of ConcreteClass2');
        };
        return ConcreteClass2;
    }(AbstractClass));
    TemplateMethodPattern.ConcreteClass2 = ConcreteClass2;
})(TemplateMethodPattern || (TemplateMethodPattern = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9zYW1wbGVzL2Rlc2lnbl9wYXR0ZXJuc19pbl90eXBlc2NyaXB0L3RlbXBsYXRlX21ldGhvZC90ZW1wbGF0ZU1ldGhvZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLElBQVUscUJBQXFCLENBaUQ5QjtBQWpERCxXQUFVLHFCQUFxQjtJQUM3QjtRQUFBO1FBbUJBLENBQUM7UUFsQlEsK0JBQU8sR0FBZDtZQUNFLE1BQU0sSUFBSSxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUNyQyxDQUFDO1FBRU0sK0JBQU8sR0FBZDtZQUNFLE1BQU0sSUFBSSxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUNyQyxDQUFDO1FBRU0sK0JBQU8sR0FBZDtZQUNFLE1BQU0sSUFBSSxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUNyQyxDQUFDO1FBRU0sc0NBQWMsR0FBckI7WUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7WUFDOUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2YsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2YsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2pCLENBQUM7UUFDSCxvQkFBQztJQUFELENBbkJBLEFBbUJDLElBQUE7SUFuQlksbUNBQWEsZ0JBbUJ6QixDQUFBO0lBRUQ7UUFBb0Msa0NBQWE7UUFBakQ7O1FBWUEsQ0FBQztRQVhRLGdDQUFPLEdBQWQ7WUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUM7UUFDM0MsQ0FBQztRQUVNLGdDQUFPLEdBQWQ7WUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUM7UUFDM0MsQ0FBQztRQUVNLGdDQUFPLEdBQWQ7WUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUM7UUFDM0MsQ0FBQztRQUNILHFCQUFDO0lBQUQsQ0FaQSxBQVlDLENBWm1DLGFBQWEsR0FZaEQ7SUFaWSxvQ0FBYyxpQkFZMUIsQ0FBQTtJQUVEO1FBQW9DLGtDQUFhO1FBQWpEOztRQVlBLENBQUM7UUFYUSxnQ0FBTyxHQUFkO1lBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1FBQzNDLENBQUM7UUFFTSxnQ0FBTyxHQUFkO1lBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1FBQzNDLENBQUM7UUFFTSxnQ0FBTyxHQUFkO1lBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1FBQzNDLENBQUM7UUFDSCxxQkFBQztJQUFELENBWkEsQUFZQyxDQVptQyxhQUFhLEdBWWhEO0lBWlksb0NBQWMsaUJBWTFCLENBQUE7QUFDSCxDQUFDLEVBakRTLHFCQUFxQixLQUFyQixxQkFBcUIsUUFpRDlCIiwiZmlsZSI6Il9zYW1wbGVzL2Rlc2lnbl9wYXR0ZXJuc19pbl90eXBlc2NyaXB0L3RlbXBsYXRlX21ldGhvZC90ZW1wbGF0ZU1ldGhvZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm5hbWVzcGFjZSBUZW1wbGF0ZU1ldGhvZFBhdHRlcm4ge1xuICBleHBvcnQgY2xhc3MgQWJzdHJhY3RDbGFzcyB7XG4gICAgcHVibGljIG1ldGhvZDEoKTogdm9pZCB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Fic3RyYWN0IE1ldGhvZCcpO1xuICAgIH1cblxuICAgIHB1YmxpYyBtZXRob2QyKCk6IHZvaWQge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBYnN0cmFjdCBNZXRob2QnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbWV0aG9kMygpOiB2b2lkIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQWJzdHJhY3QgTWV0aG9kJyk7XG4gICAgfVxuXG4gICAgcHVibGljIHRlbXBsYXRlTWV0aG9kKCk6IHZvaWQge1xuICAgICAgY29uc29sZS5sb2coJ3RlbXBsYXRlTWV0aG9kIGlzIGJlaW5nIGNhbGxlZCcpO1xuICAgICAgdGhpcy5tZXRob2QxKCk7XG4gICAgICB0aGlzLm1ldGhvZDIoKTtcbiAgICAgIHRoaXMubWV0aG9kMygpO1xuICAgIH1cbiAgfVxuXG4gIGV4cG9ydCBjbGFzcyBDb25jcmV0ZUNsYXNzMSBleHRlbmRzIEFic3RyYWN0Q2xhc3Mge1xuICAgIHB1YmxpYyBtZXRob2QxKCk6IHZvaWQge1xuICAgICAgY29uc29sZS5sb2coJ21ldGhvZDEgb2YgQ29uY3JldGVDbGFzczEnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbWV0aG9kMigpOiB2b2lkIHtcbiAgICAgIGNvbnNvbGUubG9nKCdtZXRob2QyIG9mIENvbmNyZXRlQ2xhc3MxJyk7XG4gICAgfVxuXG4gICAgcHVibGljIG1ldGhvZDMoKTogdm9pZCB7XG4gICAgICBjb25zb2xlLmxvZygnbWV0aG9kMyBvZiBDb25jcmV0ZUNsYXNzMScpO1xuICAgIH1cbiAgfVxuXG4gIGV4cG9ydCBjbGFzcyBDb25jcmV0ZUNsYXNzMiBleHRlbmRzIEFic3RyYWN0Q2xhc3Mge1xuICAgIHB1YmxpYyBtZXRob2QxKCk6IHZvaWQge1xuICAgICAgY29uc29sZS5sb2coJ21ldGhvZDEgb2YgQ29uY3JldGVDbGFzczInKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbWV0aG9kMigpOiB2b2lkIHtcbiAgICAgIGNvbnNvbGUubG9nKCdtZXRob2QyIG9mIENvbmNyZXRlQ2xhc3MyJyk7XG4gICAgfVxuXG4gICAgcHVibGljIG1ldGhvZDMoKTogdm9pZCB7XG4gICAgICBjb25zb2xlLmxvZygnbWV0aG9kMyBvZiBDb25jcmV0ZUNsYXNzMicpO1xuICAgIH1cbiAgfVxufVxuIl19
