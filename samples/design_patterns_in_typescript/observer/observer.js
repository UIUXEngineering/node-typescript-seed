var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ObserverPattern;
(function (ObserverPattern) {
    var Subject = (function () {
        function Subject() {
            this.observers = [];
        }
        Subject.prototype.register = function (observer) {
            console.log(observer, 'is pushed!');
            this.observers.push(observer);
        };
        Subject.prototype.unregister = function (observer) {
            var n = this.observers.indexOf(observer);
            console.log(observer, 'is removed');
            this.observers.splice(n, 1);
        };
        Subject.prototype.notify = function () {
            console.log('notify all the observers', this.observers);
            var i, max;
            for (i = 0, max = this.observers.length; i < max; i += 1) {
                this.observers[i].notify();
            }
        };
        return Subject;
    }());
    ObserverPattern.Subject = Subject;
    var ConcreteSubject = (function (_super) {
        __extends(ConcreteSubject, _super);
        function ConcreteSubject() {
            return _super.apply(this, arguments) || this;
        }
        Object.defineProperty(ConcreteSubject.prototype, "SubjectState", {
            get: function () {
                return this.subjectState;
            },
            set: function (subjectState) {
                this.subjectState = subjectState;
            },
            enumerable: true,
            configurable: true
        });
        return ConcreteSubject;
    }(Subject));
    ObserverPattern.ConcreteSubject = ConcreteSubject;
    var Observer = (function () {
        function Observer() {
        }
        Observer.prototype.notify = function () {
            throw new Error('Abstract Method!');
        };
        return Observer;
    }());
    ObserverPattern.Observer = Observer;
    var ConcreteObserver = (function (_super) {
        __extends(ConcreteObserver, _super);
        function ConcreteObserver(subject, name) {
            var _this = _super.call(this) || this;
            console.log('ConcreteObserver', name, 'is created!');
            _this.subject = subject;
            _this.name = name;
            return _this;
        }
        ConcreteObserver.prototype.notify = function () {
            console.log('ConcreteObserver\'s notify method');
            console.log(this.name, this.state);
            this.state = this.subject.SubjectState;
        };
        Object.defineProperty(ConcreteObserver.prototype, "Subject", {
            get: function () {
                return this.subject;
            },
            set: function (subject) {
                this.subject = subject;
            },
            enumerable: true,
            configurable: true
        });
        return ConcreteObserver;
    }(Observer));
    ObserverPattern.ConcreteObserver = ConcreteObserver;
})(ObserverPattern || (ObserverPattern = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9zYW1wbGVzL2Rlc2lnbl9wYXR0ZXJuc19pbl90eXBlc2NyaXB0L29ic2VydmVyL29ic2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsSUFBVSxlQUFlLENBc0V4QjtBQXRFRCxXQUFVLGVBQWU7SUFDdkI7UUFBQTtZQUNVLGNBQVMsR0FBZSxFQUFFLENBQUM7UUFzQnJDLENBQUM7UUFwQlEsMEJBQVEsR0FBZixVQUFnQixRQUFrQjtZQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxZQUFZLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoQyxDQUFDO1FBRU0sNEJBQVUsR0FBakIsVUFBa0IsUUFBa0I7WUFDbEMsSUFBSSxDQUFDLEdBQVcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDakQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsWUFBWSxDQUFDLENBQUM7WUFDcEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzlCLENBQUM7UUFFTSx3QkFBTSxHQUFiO1lBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDeEQsSUFBSSxDQUFTLEVBQ1QsR0FBVyxDQUFDO1lBRWhCLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO2dCQUN6RCxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQzdCLENBQUM7UUFDSCxDQUFDO1FBQ0gsY0FBQztJQUFELENBdkJBLEFBdUJDLElBQUE7SUF2QlksdUJBQU8sVUF1Qm5CLENBQUE7SUFFRDtRQUFxQyxtQ0FBTztRQUE1Qzs7UUFVQSxDQUFDO1FBUEMsc0JBQUkseUNBQVk7aUJBQWhCO2dCQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQzNCLENBQUM7aUJBRUQsVUFBaUIsWUFBb0I7Z0JBQ25DLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1lBQ25DLENBQUM7OztXQUpBO1FBS0gsc0JBQUM7SUFBRCxDQVZBLEFBVUMsQ0FWb0MsT0FBTyxHQVUzQztJQVZZLCtCQUFlLGtCQVUzQixDQUFBO0lBRUQ7UUFBQTtRQUlBLENBQUM7UUFIUSx5QkFBTSxHQUFiO1lBQ0UsTUFBTSxJQUFJLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3RDLENBQUM7UUFDSCxlQUFDO0lBQUQsQ0FKQSxBQUlDLElBQUE7SUFKWSx3QkFBUSxXQUlwQixDQUFBO0lBRUQ7UUFBc0Msb0NBQVE7UUFLNUMsMEJBQVksT0FBd0IsRUFBRSxJQUFZO1lBQWxELFlBQ0UsaUJBQU8sU0FJUjtZQUhDLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1lBQ3JELEtBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDOztRQUNuQixDQUFDO1FBRU0saUNBQU0sR0FBYjtZQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUNBQW1DLENBQUMsQ0FBQztZQUNqRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25DLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUM7UUFDekMsQ0FBQztRQUVELHNCQUFJLHFDQUFPO2lCQUFYO2dCQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ3RCLENBQUM7aUJBRUQsVUFBWSxPQUF3QjtnQkFDbEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7WUFDekIsQ0FBQzs7O1dBSkE7UUFLSCx1QkFBQztJQUFELENBekJBLEFBeUJDLENBekJxQyxRQUFRLEdBeUI3QztJQXpCWSxnQ0FBZ0IsbUJBeUI1QixDQUFBO0FBQ0gsQ0FBQyxFQXRFUyxlQUFlLEtBQWYsZUFBZSxRQXNFeEIiLCJmaWxlIjoiX3NhbXBsZXMvZGVzaWduX3BhdHRlcm5zX2luX3R5cGVzY3JpcHQvb2JzZXJ2ZXIvb2JzZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJuYW1lc3BhY2UgT2JzZXJ2ZXJQYXR0ZXJuIHtcbiAgZXhwb3J0IGNsYXNzIFN1YmplY3Qge1xuICAgIHByaXZhdGUgb2JzZXJ2ZXJzOiBPYnNlcnZlcltdID0gW107XG5cbiAgICBwdWJsaWMgcmVnaXN0ZXIob2JzZXJ2ZXI6IE9ic2VydmVyKTogdm9pZCB7XG4gICAgICBjb25zb2xlLmxvZyhvYnNlcnZlciwgJ2lzIHB1c2hlZCEnKTtcbiAgICAgIHRoaXMub2JzZXJ2ZXJzLnB1c2gob2JzZXJ2ZXIpO1xuICAgIH1cblxuICAgIHB1YmxpYyB1bnJlZ2lzdGVyKG9ic2VydmVyOiBPYnNlcnZlcik6IHZvaWQge1xuICAgICAgdmFyIG46IG51bWJlciA9IHRoaXMub2JzZXJ2ZXJzLmluZGV4T2Yob2JzZXJ2ZXIpO1xuICAgICAgY29uc29sZS5sb2cob2JzZXJ2ZXIsICdpcyByZW1vdmVkJyk7XG4gICAgICB0aGlzLm9ic2VydmVycy5zcGxpY2UobiwgMSk7XG4gICAgfVxuXG4gICAgcHVibGljIG5vdGlmeSgpOiB2b2lkIHtcbiAgICAgIGNvbnNvbGUubG9nKCdub3RpZnkgYWxsIHRoZSBvYnNlcnZlcnMnLCB0aGlzLm9ic2VydmVycyk7XG4gICAgICB2YXIgaTogbnVtYmVyXG4gICAgICAgICwgbWF4OiBudW1iZXI7XG5cbiAgICAgIGZvciAoaSA9IDAsIG1heCA9IHRoaXMub2JzZXJ2ZXJzLmxlbmd0aDsgaSA8IG1heDsgaSArPSAxKSB7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzW2ldLm5vdGlmeSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGV4cG9ydCBjbGFzcyBDb25jcmV0ZVN1YmplY3QgZXh0ZW5kcyBTdWJqZWN0IHtcbiAgICBwcml2YXRlIHN1YmplY3RTdGF0ZTogbnVtYmVyO1xuXG4gICAgZ2V0IFN1YmplY3RTdGF0ZSgpOiBudW1iZXIge1xuICAgICAgcmV0dXJuIHRoaXMuc3ViamVjdFN0YXRlO1xuICAgIH1cblxuICAgIHNldCBTdWJqZWN0U3RhdGUoc3ViamVjdFN0YXRlOiBudW1iZXIpIHtcbiAgICAgIHRoaXMuc3ViamVjdFN0YXRlID0gc3ViamVjdFN0YXRlO1xuICAgIH1cbiAgfVxuXG4gIGV4cG9ydCBjbGFzcyBPYnNlcnZlciB7XG4gICAgcHVibGljIG5vdGlmeSgpOiB2b2lkIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQWJzdHJhY3QgTWV0aG9kIScpO1xuICAgIH1cbiAgfVxuXG4gIGV4cG9ydCBjbGFzcyBDb25jcmV0ZU9ic2VydmVyIGV4dGVuZHMgT2JzZXJ2ZXIge1xuICAgIHByaXZhdGUgbmFtZTogc3RyaW5nO1xuICAgIHByaXZhdGUgc3RhdGU6IG51bWJlcjtcbiAgICBwcml2YXRlIHN1YmplY3Q6IENvbmNyZXRlU3ViamVjdDtcblxuICAgIGNvbnN0cnVjdG9yKHN1YmplY3Q6IENvbmNyZXRlU3ViamVjdCwgbmFtZTogc3RyaW5nKSB7XG4gICAgICBzdXBlcigpO1xuICAgICAgY29uc29sZS5sb2coJ0NvbmNyZXRlT2JzZXJ2ZXInLCBuYW1lLCAnaXMgY3JlYXRlZCEnKTtcbiAgICAgIHRoaXMuc3ViamVjdCA9IHN1YmplY3Q7XG4gICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIH1cblxuICAgIHB1YmxpYyBub3RpZnkoKTogdm9pZCB7XG4gICAgICBjb25zb2xlLmxvZygnQ29uY3JldGVPYnNlcnZlclxcJ3Mgbm90aWZ5IG1ldGhvZCcpO1xuICAgICAgY29uc29sZS5sb2codGhpcy5uYW1lLCB0aGlzLnN0YXRlKTtcbiAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLnN1YmplY3QuU3ViamVjdFN0YXRlO1xuICAgIH1cblxuICAgIGdldCBTdWJqZWN0KCk6IENvbmNyZXRlU3ViamVjdCB7XG4gICAgICByZXR1cm4gdGhpcy5zdWJqZWN0O1xuICAgIH1cblxuICAgIHNldCBTdWJqZWN0KHN1YmplY3Q6IENvbmNyZXRlU3ViamVjdCkge1xuICAgICAgdGhpcy5zdWJqZWN0ID0gc3ViamVjdDtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
