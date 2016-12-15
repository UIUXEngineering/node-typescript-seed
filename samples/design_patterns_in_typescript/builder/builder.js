var BuilderPattern;
(function (BuilderPattern) {
    var UserBuilder = (function () {
        function UserBuilder(name) {
            this.name = name;
        }
        Object.defineProperty(UserBuilder.prototype, "Name", {
            get: function () {
                return this.name;
            },
            enumerable: true,
            configurable: true
        });
        UserBuilder.prototype.setAge = function (value) {
            this.age = value;
            return this;
        };
        Object.defineProperty(UserBuilder.prototype, "Age", {
            get: function () {
                return this.age;
            },
            enumerable: true,
            configurable: true
        });
        UserBuilder.prototype.setPhone = function (value) {
            this.phone = value;
            return this;
        };
        Object.defineProperty(UserBuilder.prototype, "Phone", {
            get: function () {
                return this.phone;
            },
            enumerable: true,
            configurable: true
        });
        UserBuilder.prototype.setAddress = function (value) {
            this.address = value;
            return this;
        };
        Object.defineProperty(UserBuilder.prototype, "Address", {
            get: function () {
                return this.address;
            },
            enumerable: true,
            configurable: true
        });
        UserBuilder.prototype.build = function () {
            return new User(this);
        };
        return UserBuilder;
    }());
    BuilderPattern.UserBuilder = UserBuilder;
    var User = (function () {
        function User(builder) {
            this.name = builder.Name;
            this.age = builder.Age;
            this.phone = builder.Phone;
            this.address = builder.Address;
        }
        Object.defineProperty(User.prototype, "Name", {
            get: function () {
                return this.name;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(User.prototype, "Age", {
            get: function () {
                return this.age;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(User.prototype, "Phone", {
            get: function () {
                return this.phone;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(User.prototype, "Address", {
            get: function () {
                return this.address;
            },
            enumerable: true,
            configurable: true
        });
        return User;
    }());
    BuilderPattern.User = User;
})(BuilderPattern || (BuilderPattern = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlc2lnbl9wYXR0ZXJuc19pbl90eXBlc2NyaXB0L2J1aWxkZXIvYnVpbGRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLGNBQWMsQ0E2RXZCO0FBN0VELFdBQVUsY0FBYztJQUN0QjtRQU1FLHFCQUFZLElBQVk7WUFDdEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDbkIsQ0FBQztRQUVELHNCQUFJLDZCQUFJO2lCQUFSO2dCQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ25CLENBQUM7OztXQUFBO1FBRUQsNEJBQU0sR0FBTixVQUFPLEtBQWE7WUFDbEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUM7WUFDakIsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNkLENBQUM7UUFFRCxzQkFBSSw0QkFBRztpQkFBUDtnQkFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUNsQixDQUFDOzs7V0FBQTtRQUVELDhCQUFRLEdBQVIsVUFBUyxLQUFhO1lBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDZCxDQUFDO1FBRUQsc0JBQUksOEJBQUs7aUJBQVQ7Z0JBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDcEIsQ0FBQzs7O1dBQUE7UUFFRCxnQ0FBVSxHQUFWLFVBQVcsS0FBYTtZQUN0QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUNyQixNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2QsQ0FBQztRQUVELHNCQUFJLGdDQUFPO2lCQUFYO2dCQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ3RCLENBQUM7OztXQUFBO1FBRUQsMkJBQUssR0FBTDtZQUNFLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixDQUFDO1FBQ0gsa0JBQUM7SUFBRCxDQTVDQSxBQTRDQyxJQUFBO0lBNUNZLDBCQUFXLGNBNEN2QixDQUFBO0lBRUQ7UUFNRSxjQUFZLE9BQW9CO1lBQzlCLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztZQUN6QixJQUFJLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUM7WUFDdkIsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQztRQUNqQyxDQUFDO1FBRUQsc0JBQUksc0JBQUk7aUJBQVI7Z0JBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDbkIsQ0FBQzs7O1dBQUE7UUFFRCxzQkFBSSxxQkFBRztpQkFBUDtnQkFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztZQUNsQixDQUFDOzs7V0FBQTtRQUVELHNCQUFJLHVCQUFLO2lCQUFUO2dCQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3BCLENBQUM7OztXQUFBO1FBRUQsc0JBQUkseUJBQU87aUJBQVg7Z0JBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDdEIsQ0FBQzs7O1dBQUE7UUFDSCxXQUFDO0lBQUQsQ0E1QkEsQUE0QkMsSUFBQTtJQTVCWSxtQkFBSSxPQTRCaEIsQ0FBQTtBQUVILENBQUMsRUE3RVMsY0FBYyxLQUFkLGNBQWMsUUE2RXZCIiwiZmlsZSI6ImRlc2lnbl9wYXR0ZXJuc19pbl90eXBlc2NyaXB0L2J1aWxkZXIvYnVpbGRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm5hbWVzcGFjZSBCdWlsZGVyUGF0dGVybiB7XG4gIGV4cG9ydCBjbGFzcyBVc2VyQnVpbGRlciB7XG4gICAgcHJpdmF0ZSBuYW1lOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBhZ2U6IG51bWJlcjtcbiAgICBwcml2YXRlIHBob25lOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBhZGRyZXNzOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcpIHtcbiAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgfVxuXG4gICAgZ2V0IE5hbWUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH1cblxuICAgIHNldEFnZSh2YWx1ZTogbnVtYmVyKTogVXNlckJ1aWxkZXIge1xuICAgICAgdGhpcy5hZ2UgPSB2YWx1ZTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGdldCBBZ2UoKSB7XG4gICAgICByZXR1cm4gdGhpcy5hZ2U7XG4gICAgfVxuXG4gICAgc2V0UGhvbmUodmFsdWU6IHN0cmluZyk6IFVzZXJCdWlsZGVyIHtcbiAgICAgIHRoaXMucGhvbmUgPSB2YWx1ZTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGdldCBQaG9uZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLnBob25lO1xuICAgIH1cblxuICAgIHNldEFkZHJlc3ModmFsdWU6IHN0cmluZyk6IFVzZXJCdWlsZGVyIHtcbiAgICAgIHRoaXMuYWRkcmVzcyA9IHZhbHVlO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZ2V0IEFkZHJlc3MoKSB7XG4gICAgICByZXR1cm4gdGhpcy5hZGRyZXNzO1xuICAgIH1cblxuICAgIGJ1aWxkKCk6IFVzZXIge1xuICAgICAgcmV0dXJuIG5ldyBVc2VyKHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIGV4cG9ydCBjbGFzcyBVc2VyIHtcbiAgICBwcml2YXRlIG5hbWU6IHN0cmluZztcbiAgICBwcml2YXRlIGFnZTogbnVtYmVyO1xuICAgIHByaXZhdGUgcGhvbmU6IHN0cmluZztcbiAgICBwcml2YXRlIGFkZHJlc3M6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGJ1aWxkZXI6IFVzZXJCdWlsZGVyKSB7XG4gICAgICB0aGlzLm5hbWUgPSBidWlsZGVyLk5hbWU7XG4gICAgICB0aGlzLmFnZSA9IGJ1aWxkZXIuQWdlO1xuICAgICAgdGhpcy5waG9uZSA9IGJ1aWxkZXIuUGhvbmU7XG4gICAgICB0aGlzLmFkZHJlc3MgPSBidWlsZGVyLkFkZHJlc3M7XG4gICAgfVxuXG4gICAgZ2V0IE5hbWUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH1cblxuICAgIGdldCBBZ2UoKSB7XG4gICAgICByZXR1cm4gdGhpcy5hZ2U7XG4gICAgfVxuXG4gICAgZ2V0IFBob25lKCkge1xuICAgICAgcmV0dXJuIHRoaXMucGhvbmU7XG4gICAgfVxuXG4gICAgZ2V0IEFkZHJlc3MoKSB7XG4gICAgICByZXR1cm4gdGhpcy5hZGRyZXNzO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=
