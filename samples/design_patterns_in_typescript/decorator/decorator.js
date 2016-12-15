var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var DecoratorPattern;
(function (DecoratorPattern) {
    var ConcreteComponent = (function () {
        function ConcreteComponent(s) {
            this.s = s;
        }
        ConcreteComponent.prototype.operation = function () {
            console.log('`operation` of ConcreteComponent', this.s, ' is being called!');
        };
        return ConcreteComponent;
    }());
    DecoratorPattern.ConcreteComponent = ConcreteComponent;
    var Decorator = (function () {
        function Decorator(id, component) {
            this.id = id;
            this.component = component;
        }
        Object.defineProperty(Decorator.prototype, "Id", {
            get: function () {
                return this.id;
            },
            enumerable: true,
            configurable: true
        });
        Decorator.prototype.operation = function () {
            console.log('`operation` of Decorator', this.id, ' is being called!');
            this.component.operation();
        };
        return Decorator;
    }());
    DecoratorPattern.Decorator = Decorator;
    var ConcreteDecorator = (function (_super) {
        __extends(ConcreteDecorator, _super);
        function ConcreteDecorator(id, component) {
            return _super.call(this, id, component) || this;
        }
        ConcreteDecorator.prototype.operation = function () {
            _super.prototype.operation.call(this);
            console.log('`operation` of ConcreteDecorator', this.Id, ' is being called!');
        };
        return ConcreteDecorator;
    }(Decorator));
    DecoratorPattern.ConcreteDecorator = ConcreteDecorator;
})(DecoratorPattern || (DecoratorPattern = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlc2lnbl9wYXR0ZXJuc19pbl90eXBlc2NyaXB0L2RlY29yYXRvci9kZWNvcmF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxJQUFVLGdCQUFnQixDQStDekI7QUEvQ0QsV0FBVSxnQkFBZ0I7SUFNeEI7UUFHRSwyQkFBWSxDQUFTO1lBQ25CLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsQ0FBQztRQUVNLHFDQUFTLEdBQWhCO1lBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLG1CQUFtQixDQUFDLENBQUM7UUFDL0UsQ0FBQztRQUNILHdCQUFDO0lBQUQsQ0FWQSxBQVVDLElBQUE7SUFWWSxrQ0FBaUIsb0JBVTdCLENBQUE7SUFFRDtRQUlFLG1CQUFZLEVBQVUsRUFBRSxTQUFvQjtZQUMxQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztZQUNiLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzdCLENBQUM7UUFFRCxzQkFBVyx5QkFBRTtpQkFBYjtnQkFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUNqQixDQUFDOzs7V0FBQTtRQUVNLDZCQUFTLEdBQWhCO1lBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLG1CQUFtQixDQUFDLENBQUM7WUFDdEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUM3QixDQUFDO1FBQ0gsZ0JBQUM7SUFBRCxDQWpCQSxBQWlCQyxJQUFBO0lBakJZLDBCQUFTLFlBaUJyQixDQUFBO0lBRUQ7UUFBdUMscUNBQVM7UUFDOUMsMkJBQVksRUFBVSxFQUFFLFNBQW9CO21CQUMxQyxrQkFBTSxFQUFFLEVBQUUsU0FBUyxDQUFDO1FBQ3RCLENBQUM7UUFFTSxxQ0FBUyxHQUFoQjtZQUNFLGlCQUFNLFNBQVMsV0FBRSxDQUFDO1lBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0NBQWtDLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1FBQ2hGLENBQUM7UUFDSCx3QkFBQztJQUFELENBVEEsQUFTQyxDQVRzQyxTQUFTLEdBUy9DO0lBVFksa0NBQWlCLG9CQVM3QixDQUFBO0FBQ0gsQ0FBQyxFQS9DUyxnQkFBZ0IsS0FBaEIsZ0JBQWdCLFFBK0N6QiIsImZpbGUiOiJkZXNpZ25fcGF0dGVybnNfaW5fdHlwZXNjcmlwdC9kZWNvcmF0b3IvZGVjb3JhdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsibmFtZXNwYWNlIERlY29yYXRvclBhdHRlcm4ge1xuXG4gIGV4cG9ydCBpbnRlcmZhY2UgQ29tcG9uZW50IHtcbiAgICBvcGVyYXRpb24oKTogdm9pZDtcbiAgfVxuXG4gIGV4cG9ydCBjbGFzcyBDb25jcmV0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIENvbXBvbmVudCB7XG4gICAgcHJpdmF0ZSBzOiBTdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihzOiBTdHJpbmcpIHtcbiAgICAgIHRoaXMucyA9IHM7XG4gICAgfVxuXG4gICAgcHVibGljIG9wZXJhdGlvbigpOiB2b2lkIHtcbiAgICAgIGNvbnNvbGUubG9nKCdgb3BlcmF0aW9uYCBvZiBDb25jcmV0ZUNvbXBvbmVudCcsIHRoaXMucywgJyBpcyBiZWluZyBjYWxsZWQhJyk7XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGNsYXNzIERlY29yYXRvciBpbXBsZW1lbnRzIENvbXBvbmVudCB7XG4gICAgcHJpdmF0ZSBjb21wb25lbnQ6IENvbXBvbmVudDtcbiAgICBwcml2YXRlIGlkOiBOdW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihpZDogTnVtYmVyLCBjb21wb25lbnQ6IENvbXBvbmVudCkge1xuICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgdGhpcy5jb21wb25lbnQgPSBjb21wb25lbnQ7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBJZCgpOiBOdW1iZXIge1xuICAgICAgcmV0dXJuIHRoaXMuaWQ7XG4gICAgfVxuXG4gICAgcHVibGljIG9wZXJhdGlvbigpOiB2b2lkIHtcbiAgICAgIGNvbnNvbGUubG9nKCdgb3BlcmF0aW9uYCBvZiBEZWNvcmF0b3InLCB0aGlzLmlkLCAnIGlzIGJlaW5nIGNhbGxlZCEnKTtcbiAgICAgIHRoaXMuY29tcG9uZW50Lm9wZXJhdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIGV4cG9ydCBjbGFzcyBDb25jcmV0ZURlY29yYXRvciBleHRlbmRzIERlY29yYXRvciB7XG4gICAgY29uc3RydWN0b3IoaWQ6IE51bWJlciwgY29tcG9uZW50OiBDb21wb25lbnQpIHtcbiAgICAgIHN1cGVyKGlkLCBjb21wb25lbnQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvcGVyYXRpb24oKTogdm9pZCB7XG4gICAgICBzdXBlci5vcGVyYXRpb24oKTtcbiAgICAgIGNvbnNvbGUubG9nKCdgb3BlcmF0aW9uYCBvZiBDb25jcmV0ZURlY29yYXRvcicsIHRoaXMuSWQsICcgaXMgYmVpbmcgY2FsbGVkIScpO1xuICAgIH1cbiAgfVxufVxuIl19
