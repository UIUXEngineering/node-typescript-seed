var IteratorPattern;
(function (IteratorPattern) {
    var ConcreteIterator = (function () {
        function ConcreteIterator(collection) {
            this.collection = [];
            this.position = 0;
            this.collection = collection;
        }
        ConcreteIterator.prototype.next = function () {
            var result = this.collection[this.position];
            this.position += 1;
            return result;
        };
        ConcreteIterator.prototype.hasNext = function () {
            if (this.position < this.collection.length) {
                return true;
            }
            else {
                return false;
            }
        };
        return ConcreteIterator;
    }());
    IteratorPattern.ConcreteIterator = ConcreteIterator;
    var Numbers = (function () {
        function Numbers(collection) {
            this.collection = [];
            this.collection = collection;
        }
        Numbers.prototype.createIterator = function () {
            return new ConcreteIterator(this.collection);
        };
        return Numbers;
    }());
    IteratorPattern.Numbers = Numbers;
})(IteratorPattern || (IteratorPattern = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlc2lnbl9wYXR0ZXJuc19pbl90eXBlc2NyaXB0L2l0ZXJhdG9yL2l0ZXJhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQVUsZUFBZSxDQTZDeEI7QUE3Q0QsV0FBVSxlQUFlO0lBV3JCO1FBSUksMEJBQVksVUFBaUI7WUFIckIsZUFBVSxHQUFVLEVBQUUsQ0FBQztZQUN2QixhQUFRLEdBQVcsQ0FBQyxDQUFDO1lBR3pCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQ2pDLENBQUM7UUFFTSwrQkFBSSxHQUFYO1lBRUksSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDNUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUM7WUFDbkIsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUNsQixDQUFDO1FBRU0sa0NBQU8sR0FBZDtZQUNJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUN6QyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2hCLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDSixNQUFNLENBQUMsS0FBSyxDQUFDO1lBQ2pCLENBQUM7UUFDTCxDQUFDO1FBQ0wsdUJBQUM7SUFBRCxDQXRCQSxBQXNCQyxJQUFBO0lBdEJZLGdDQUFnQixtQkFzQjVCLENBQUE7SUFFRDtRQUdJLGlCQUFZLFVBQW9CO1lBRnhCLGVBQVUsR0FBYSxFQUFFLENBQUM7WUFHOUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDakMsQ0FBQztRQUNNLGdDQUFjLEdBQXJCO1lBQ0ksTUFBTSxDQUFDLElBQUksZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2pELENBQUM7UUFDTCxjQUFDO0lBQUQsQ0FUQSxBQVNDLElBQUE7SUFUWSx1QkFBTyxVQVNuQixDQUFBO0FBQ0wsQ0FBQyxFQTdDUyxlQUFlLEtBQWYsZUFBZSxRQTZDeEIiLCJmaWxlIjoiZGVzaWduX3BhdHRlcm5zX2luX3R5cGVzY3JpcHQvaXRlcmF0b3IvaXRlcmF0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJuYW1lc3BhY2UgSXRlcmF0b3JQYXR0ZXJuIHtcbiAgICBleHBvcnQgaW50ZXJmYWNlIEl0ZXJhdG9yIHtcblxuICAgICAgICBuZXh0KCk6IGFueTtcbiAgICAgICAgaGFzTmV4dCgpOiBib29sZWFuO1xuICAgIH1cblxuICAgIGV4cG9ydCBpbnRlcmZhY2UgQWdncmVnYXRvciB7XG4gICAgICAgIGNyZWF0ZUl0ZXJhdG9yKCk6IEl0ZXJhdG9yO1xuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBDb25jcmV0ZUl0ZXJhdG9yIGltcGxlbWVudHMgSXRlcmF0b3Ige1xuICAgICAgICBwcml2YXRlIGNvbGxlY3Rpb246IGFueVtdID0gW107XG4gICAgICAgIHByaXZhdGUgcG9zaXRpb246IG51bWJlciA9IDA7XG5cbiAgICAgICAgY29uc3RydWN0b3IoY29sbGVjdGlvbjogYW55W10pIHtcbiAgICAgICAgICAgIHRoaXMuY29sbGVjdGlvbiA9IGNvbGxlY3Rpb247XG4gICAgICAgIH1cblxuICAgICAgICBwdWJsaWMgbmV4dCgpOiBhbnkge1xuICAgICAgICAgICAgLy8gRXJyb3IgaGFuZGxpbmcgaXMgbGVmdCBvdXRcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSB0aGlzLmNvbGxlY3Rpb25bdGhpcy5wb3NpdGlvbl07XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uICs9IDE7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG5cbiAgICAgICAgcHVibGljIGhhc05leHQoKTogYm9vbGVhbiB7XG4gICAgICAgICAgICBpZiAodGhpcy5wb3NpdGlvbiA8IHRoaXMuY29sbGVjdGlvbi5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwb3J0IGNsYXNzIE51bWJlcnMgaW1wbGVtZW50cyBBZ2dyZWdhdG9yIHtcbiAgICAgICAgcHJpdmF0ZSBjb2xsZWN0aW9uOiBudW1iZXJbXSA9IFtdO1xuXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbGxlY3Rpb246IG51bWJlcltdKSB7XG4gICAgICAgICAgICB0aGlzLmNvbGxlY3Rpb24gPSBjb2xsZWN0aW9uO1xuICAgICAgICB9XG4gICAgICAgIHB1YmxpYyBjcmVhdGVJdGVyYXRvcigpOiBJdGVyYXRvciB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IENvbmNyZXRlSXRlcmF0b3IodGhpcy5jb2xsZWN0aW9uKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuIl19
