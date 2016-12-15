var CompositePattern;
(function (CompositePattern) {
    var Composite = (function () {
        function Composite(s) {
            this.list = [];
            this.s = s;
        }
        Composite.prototype.operation = function () {
            console.log('`operation of `', this.s);
            for (var i = 0; i < this.list.length; i += 1) {
                this.list[i].operation();
            }
        };
        Composite.prototype.add = function (c) {
            this.list.push(c);
        };
        Composite.prototype.remove = function (i) {
            if (this.list.length <= i) {
                throw new Error('index out of bound!');
            }
            this.list.splice(i, 1);
        };
        return Composite;
    }());
    CompositePattern.Composite = Composite;
    var Leaf = (function () {
        function Leaf(s) {
            this.s = s;
        }
        Leaf.prototype.operation = function () {
            console.log('`operation` of Leaf', this.s, ' is called.');
        };
        return Leaf;
    }());
    CompositePattern.Leaf = Leaf;
})(CompositePattern || (CompositePattern = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlc2lnbl9wYXR0ZXJuc19pbl90eXBlc2NyaXB0L2NvbXBvc2l0ZS9jb21wb3NpdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBVSxnQkFBZ0IsQ0E2Q3pCO0FBN0NELFdBQVUsZ0JBQWdCO0lBS3hCO1FBS0UsbUJBQVksQ0FBUztZQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUNmLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsQ0FBQztRQUVNLDZCQUFTLEdBQWhCO1lBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7Z0JBQzdDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDM0IsQ0FBQztRQUNILENBQUM7UUFFTSx1QkFBRyxHQUFWLFVBQVcsQ0FBWTtZQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwQixDQUFDO1FBRU0sMEJBQU0sR0FBYixVQUFjLENBQVM7WUFDckIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDMUIsTUFBTSxJQUFJLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQ3pDLENBQUM7WUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDekIsQ0FBQztRQUNILGdCQUFDO0lBQUQsQ0EzQkEsQUEyQkMsSUFBQTtJQTNCWSwwQkFBUyxZQTJCckIsQ0FBQTtJQUVEO1FBR0UsY0FBWSxDQUFTO1lBQ25CLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsQ0FBQztRQUVNLHdCQUFTLEdBQWhCO1lBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQzVELENBQUM7UUFDSCxXQUFDO0lBQUQsQ0FWQSxBQVVDLElBQUE7SUFWWSxxQkFBSSxPQVVoQixDQUFBO0FBQ0gsQ0FBQyxFQTdDUyxnQkFBZ0IsS0FBaEIsZ0JBQWdCLFFBNkN6QiIsImZpbGUiOiJkZXNpZ25fcGF0dGVybnNfaW5fdHlwZXNjcmlwdC9jb21wb3NpdGUvY29tcG9zaXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibmFtZXNwYWNlIENvbXBvc2l0ZVBhdHRlcm4ge1xuICBleHBvcnQgaW50ZXJmYWNlIENvbXBvbmVudCB7XG4gICAgb3BlcmF0aW9uKCk6IHZvaWQ7XG4gIH1cblxuICBleHBvcnQgY2xhc3MgQ29tcG9zaXRlIGltcGxlbWVudHMgQ29tcG9uZW50IHtcblxuICAgIHByaXZhdGUgbGlzdDogQ29tcG9uZW50W107XG4gICAgcHJpdmF0ZSBzOiBTdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihzOiBTdHJpbmcpIHtcbiAgICAgIHRoaXMubGlzdCA9IFtdO1xuICAgICAgdGhpcy5zID0gcztcbiAgICB9XG5cbiAgICBwdWJsaWMgb3BlcmF0aW9uKCk6IHZvaWQge1xuICAgICAgY29uc29sZS5sb2coJ2BvcGVyYXRpb24gb2YgYCcsIHRoaXMucyk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGlzdC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICB0aGlzLmxpc3RbaV0ub3BlcmF0aW9uKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGFkZChjOiBDb21wb25lbnQpOiB2b2lkIHtcbiAgICAgIHRoaXMubGlzdC5wdXNoKGMpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW1vdmUoaTogbnVtYmVyKTogdm9pZCB7XG4gICAgICBpZiAodGhpcy5saXN0Lmxlbmd0aCA8PSBpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignaW5kZXggb3V0IG9mIGJvdW5kIScpO1xuICAgICAgfVxuICAgICAgdGhpcy5saXN0LnNwbGljZShpLCAxKTtcbiAgICB9XG4gIH1cblxuICBleHBvcnQgY2xhc3MgTGVhZiBpbXBsZW1lbnRzIENvbXBvbmVudCB7XG4gICAgcHJpdmF0ZSBzOiBTdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihzOiBTdHJpbmcpIHtcbiAgICAgIHRoaXMucyA9IHM7XG4gICAgfVxuXG4gICAgcHVibGljIG9wZXJhdGlvbigpOiB2b2lkIHtcbiAgICAgIGNvbnNvbGUubG9nKCdgb3BlcmF0aW9uYCBvZiBMZWFmJywgdGhpcy5zLCAnIGlzIGNhbGxlZC4nKTtcbiAgICB9XG4gIH1cbn1cblxuIl19
