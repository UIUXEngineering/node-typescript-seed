var FacadePattern;
(function (FacadePattern) {
    var Part1 = (function () {
        function Part1() {
        }
        Part1.prototype.method1 = function () {
            console.log('`method1` of Part1');
        };
        return Part1;
    }());
    FacadePattern.Part1 = Part1;
    var Part2 = (function () {
        function Part2() {
        }
        Part2.prototype.method2 = function () {
            console.log('`method2` of Part2');
        };
        return Part2;
    }());
    FacadePattern.Part2 = Part2;
    var Part3 = (function () {
        function Part3() {
        }
        Part3.prototype.method3 = function () {
            console.log('`method3` of Part3');
        };
        return Part3;
    }());
    FacadePattern.Part3 = Part3;
    var Facade = (function () {
        function Facade() {
            this.part1 = new Part1();
            this.part2 = new Part2();
            this.part3 = new Part3();
        }
        Facade.prototype.operation1 = function () {
            console.log('`operation1` is called ===');
            this.part1.method1();
            this.part2.method2();
            console.log('==========================');
        };
        Facade.prototype.operation2 = function () {
            console.log('`operation2` is called ===');
            this.part1.method1();
            this.part3.method3();
            console.log('==========================');
        };
        return Facade;
    }());
    FacadePattern.Facade = Facade;
})(FacadePattern || (FacadePattern = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlc2lnbl9wYXR0ZXJuc19pbl90eXBlc2NyaXB0L2ZhY2FkZS9mYWNhZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBVSxhQUFhLENBdUN0QjtBQXZDRCxXQUFVLGFBQWE7SUFFckI7UUFBQTtRQUlBLENBQUM7UUFIUSx1QkFBTyxHQUFkO1lBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ3BDLENBQUM7UUFDSCxZQUFDO0lBQUQsQ0FKQSxBQUlDLElBQUE7SUFKWSxtQkFBSyxRQUlqQixDQUFBO0lBRUQ7UUFBQTtRQUlBLENBQUM7UUFIUSx1QkFBTyxHQUFkO1lBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ3BDLENBQUM7UUFDSCxZQUFDO0lBQUQsQ0FKQSxBQUlDLElBQUE7SUFKWSxtQkFBSyxRQUlqQixDQUFBO0lBRUQ7UUFBQTtRQUlBLENBQUM7UUFIUSx1QkFBTyxHQUFkO1lBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ3BDLENBQUM7UUFDSCxZQUFDO0lBQUQsQ0FKQSxBQUlDLElBQUE7SUFKWSxtQkFBSyxRQUlqQixDQUFBO0lBRUQ7UUFBQTtZQUNVLFVBQUssR0FBVSxJQUFJLEtBQUssRUFBRSxDQUFDO1lBQzNCLFVBQUssR0FBVSxJQUFJLEtBQUssRUFBRSxDQUFDO1lBQzNCLFVBQUssR0FBVSxJQUFJLEtBQUssRUFBRSxDQUFDO1FBZXJDLENBQUM7UUFiUSwyQkFBVSxHQUFqQjtZQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQztZQUMxQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1FBQzVDLENBQUM7UUFFTSwyQkFBVSxHQUFqQjtZQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQztZQUMxQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1FBQzVDLENBQUM7UUFDSCxhQUFDO0lBQUQsQ0FsQkEsQUFrQkMsSUFBQTtJQWxCWSxvQkFBTSxTQWtCbEIsQ0FBQTtBQUNILENBQUMsRUF2Q1MsYUFBYSxLQUFiLGFBQWEsUUF1Q3RCIiwiZmlsZSI6ImRlc2lnbl9wYXR0ZXJuc19pbl90eXBlc2NyaXB0L2ZhY2FkZS9mYWNhZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJuYW1lc3BhY2UgRmFjYWRlUGF0dGVybiB7XG5cbiAgZXhwb3J0IGNsYXNzIFBhcnQxIHtcbiAgICBwdWJsaWMgbWV0aG9kMSgpOiB2b2lkIHtcbiAgICAgIGNvbnNvbGUubG9nKCdgbWV0aG9kMWAgb2YgUGFydDEnKTtcbiAgICB9XG4gIH1cblxuICBleHBvcnQgY2xhc3MgUGFydDIge1xuICAgIHB1YmxpYyBtZXRob2QyKCk6IHZvaWQge1xuICAgICAgY29uc29sZS5sb2coJ2BtZXRob2QyYCBvZiBQYXJ0MicpO1xuICAgIH1cbiAgfVxuXG4gIGV4cG9ydCBjbGFzcyBQYXJ0MyB7XG4gICAgcHVibGljIG1ldGhvZDMoKTogdm9pZCB7XG4gICAgICBjb25zb2xlLmxvZygnYG1ldGhvZDNgIG9mIFBhcnQzJyk7XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGNsYXNzIEZhY2FkZSB7XG4gICAgcHJpdmF0ZSBwYXJ0MTogUGFydDEgPSBuZXcgUGFydDEoKTtcbiAgICBwcml2YXRlIHBhcnQyOiBQYXJ0MiA9IG5ldyBQYXJ0MigpO1xuICAgIHByaXZhdGUgcGFydDM6IFBhcnQzID0gbmV3IFBhcnQzKCk7XG5cbiAgICBwdWJsaWMgb3BlcmF0aW9uMSgpOiB2b2lkIHtcbiAgICAgIGNvbnNvbGUubG9nKCdgb3BlcmF0aW9uMWAgaXMgY2FsbGVkID09PScpO1xuICAgICAgdGhpcy5wYXJ0MS5tZXRob2QxKCk7XG4gICAgICB0aGlzLnBhcnQyLm1ldGhvZDIoKTtcbiAgICAgIGNvbnNvbGUubG9nKCc9PT09PT09PT09PT09PT09PT09PT09PT09PScpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvcGVyYXRpb24yKCk6IHZvaWQge1xuICAgICAgY29uc29sZS5sb2coJ2BvcGVyYXRpb24yYCBpcyBjYWxsZWQgPT09Jyk7XG4gICAgICB0aGlzLnBhcnQxLm1ldGhvZDEoKTtcbiAgICAgIHRoaXMucGFydDMubWV0aG9kMygpO1xuICAgICAgY29uc29sZS5sb2coJz09PT09PT09PT09PT09PT09PT09PT09PT09Jyk7XG4gICAgfVxuICB9XG59XG4iXX0=
