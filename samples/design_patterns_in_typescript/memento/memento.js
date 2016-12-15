var MementoPattern;
(function (MementoPattern) {
    var State = (function () {
        function State(str) {
            this.str = str;
        }
        Object.defineProperty(State.prototype, "Str", {
            get: function () {
                return this.str;
            },
            set: function (str) {
                this.str = str;
            },
            enumerable: true,
            configurable: true
        });
        return State;
    }());
    MementoPattern.State = State;
    var Originator = (function () {
        function Originator(state) {
            this.state = state;
        }
        Object.defineProperty(Originator.prototype, "State", {
            get: function () {
                return this.state;
            },
            set: function (state) {
                console.log('State :: ', state);
                this.state = state;
            },
            enumerable: true,
            configurable: true
        });
        Originator.prototype.createMemento = function () {
            console.log('creates a memento with a given state!');
            return new Memento(this.state);
        };
        Originator.prototype.setMemento = function (memento) {
            console.log('sets the state back');
            this.State = memento.State;
        };
        return Originator;
    }());
    MementoPattern.Originator = Originator;
    var Memento = (function () {
        function Memento(state) {
            this.state = state;
        }
        Object.defineProperty(Memento.prototype, "State", {
            get: function () {
                console.log('get memento\'s state');
                return this.state;
            },
            enumerable: true,
            configurable: true
        });
        return Memento;
    }());
    MementoPattern.Memento = Memento;
    var CareTaker = (function () {
        function CareTaker() {
        }
        Object.defineProperty(CareTaker.prototype, "Memento", {
            get: function () {
                return this.memento;
            },
            set: function (memento) {
                this.memento = memento;
            },
            enumerable: true,
            configurable: true
        });
        return CareTaker;
    }());
    MementoPattern.CareTaker = CareTaker;
})(MementoPattern || (MementoPattern = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlc2lnbl9wYXR0ZXJuc19pbl90eXBlc2NyaXB0L21lbWVudG8vbWVtZW50by50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLGNBQWMsQ0FvRXZCO0FBcEVELFdBQVUsY0FBYztJQUN0QjtRQUdFLGVBQVksR0FBVztZQUNyQixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNqQixDQUFDO1FBRUQsc0JBQUksc0JBQUc7aUJBQVA7Z0JBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7WUFDbEIsQ0FBQztpQkFFRCxVQUFRLEdBQVc7Z0JBQ2pCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1lBQ2pCLENBQUM7OztXQUpBO1FBS0gsWUFBQztJQUFELENBZEEsQUFjQyxJQUFBO0lBZFksb0JBQUssUUFjakIsQ0FBQTtJQUVEO1FBR0Usb0JBQVksS0FBWTtZQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNyQixDQUFDO1FBRUQsc0JBQUksNkJBQUs7aUJBQVQ7Z0JBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDcEIsQ0FBQztpQkFFRCxVQUFVLEtBQVk7Z0JBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUNoQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUNyQixDQUFDOzs7V0FMQTtRQU9NLGtDQUFhLEdBQXBCO1lBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDO1lBQ3JELE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakMsQ0FBQztRQUVNLCtCQUFVLEdBQWpCLFVBQWtCLE9BQWdCO1lBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztZQUNuQyxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDN0IsQ0FBQztRQUNILGlCQUFDO0lBQUQsQ0F6QkEsQUF5QkMsSUFBQTtJQXpCWSx5QkFBVSxhQXlCdEIsQ0FBQTtJQUVEO1FBR0UsaUJBQVksS0FBWTtZQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNyQixDQUFDO1FBRUQsc0JBQUksMEJBQUs7aUJBQVQ7Z0JBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO2dCQUNwQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUNwQixDQUFDOzs7V0FBQTtRQUNILGNBQUM7SUFBRCxDQVhBLEFBV0MsSUFBQTtJQVhZLHNCQUFPLFVBV25CLENBQUE7SUFFRDtRQUFBO1FBVUEsQ0FBQztRQVBDLHNCQUFJLDhCQUFPO2lCQUFYO2dCQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ3RCLENBQUM7aUJBRUQsVUFBWSxPQUFnQjtnQkFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7WUFDekIsQ0FBQzs7O1dBSkE7UUFLSCxnQkFBQztJQUFELENBVkEsQUFVQyxJQUFBO0lBVlksd0JBQVMsWUFVckIsQ0FBQTtBQUNILENBQUMsRUFwRVMsY0FBYyxLQUFkLGNBQWMsUUFvRXZCIiwiZmlsZSI6ImRlc2lnbl9wYXR0ZXJuc19pbl90eXBlc2NyaXB0L21lbWVudG8vbWVtZW50by5qcyIsInNvdXJjZXNDb250ZW50IjpbIm5hbWVzcGFjZSBNZW1lbnRvUGF0dGVybiB7XG4gIGV4cG9ydCBjbGFzcyBTdGF0ZSB7XG4gICAgcHJpdmF0ZSBzdHI6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHN0cjogc3RyaW5nKSB7XG4gICAgICB0aGlzLnN0ciA9IHN0cjtcbiAgICB9XG5cbiAgICBnZXQgU3RyKCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gdGhpcy5zdHI7XG4gICAgfVxuXG4gICAgc2V0IFN0cihzdHI6IHN0cmluZykge1xuICAgICAgdGhpcy5zdHIgPSBzdHI7XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGNsYXNzIE9yaWdpbmF0b3Ige1xuICAgIHByaXZhdGUgc3RhdGU6IFN0YXRlO1xuXG4gICAgY29uc3RydWN0b3Ioc3RhdGU6IFN0YXRlKSB7XG4gICAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gICAgfVxuXG4gICAgZ2V0IFN0YXRlKCk6IFN0YXRlIHtcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlO1xuICAgIH1cblxuICAgIHNldCBTdGF0ZShzdGF0ZTogU3RhdGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdTdGF0ZSA6OiAnLCBzdGF0ZSk7XG4gICAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gICAgfVxuXG4gICAgcHVibGljIGNyZWF0ZU1lbWVudG8oKTogTWVtZW50byB7XG4gICAgICBjb25zb2xlLmxvZygnY3JlYXRlcyBhIG1lbWVudG8gd2l0aCBhIGdpdmVuIHN0YXRlIScpO1xuICAgICAgcmV0dXJuIG5ldyBNZW1lbnRvKHRoaXMuc3RhdGUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRNZW1lbnRvKG1lbWVudG86IE1lbWVudG8pIHtcbiAgICAgIGNvbnNvbGUubG9nKCdzZXRzIHRoZSBzdGF0ZSBiYWNrJyk7XG4gICAgICB0aGlzLlN0YXRlID0gbWVtZW50by5TdGF0ZTtcbiAgICB9XG4gIH1cblxuICBleHBvcnQgY2xhc3MgTWVtZW50byB7XG4gICAgcHJpdmF0ZSBzdGF0ZTogU3RhdGU7XG5cbiAgICBjb25zdHJ1Y3RvcihzdGF0ZTogU3RhdGUpIHtcbiAgICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICB9XG5cbiAgICBnZXQgU3RhdGUoKTogU3RhdGUge1xuICAgICAgY29uc29sZS5sb2coJ2dldCBtZW1lbnRvXFwncyBzdGF0ZScpO1xuICAgICAgcmV0dXJuIHRoaXMuc3RhdGU7XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGNsYXNzIENhcmVUYWtlciB7XG4gICAgcHJpdmF0ZSBtZW1lbnRvOiBNZW1lbnRvO1xuXG4gICAgZ2V0IE1lbWVudG8oKTogTWVtZW50byB7XG4gICAgICByZXR1cm4gdGhpcy5tZW1lbnRvO1xuICAgIH1cblxuICAgIHNldCBNZW1lbnRvKG1lbWVudG86IE1lbWVudG8pIHtcbiAgICAgIHRoaXMubWVtZW50byA9IG1lbWVudG87XG4gICAgfVxuICB9XG59XG4iXX0=
