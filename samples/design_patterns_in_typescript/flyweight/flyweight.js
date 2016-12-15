var FlyweightPattern;
(function (FlyweightPattern) {
    var ConcreteFlyweight = (function () {
        function ConcreteFlyweight(instrinsicState) {
            this.instrinsicState = instrinsicState;
        }
        ConcreteFlyweight.prototype.operation = function (s) {
            console.log('`operation` of ConcreteFlyweight', s, ' is being called!');
        };
        return ConcreteFlyweight;
    }());
    FlyweightPattern.ConcreteFlyweight = ConcreteFlyweight;
    var UnsharedConcreteFlyweight = (function () {
        function UnsharedConcreteFlyweight(allState) {
            this.allState = allState;
        }
        UnsharedConcreteFlyweight.prototype.operation = function (s) {
            console.log('`operation` of UnsharedConcreteFlyweight', s, ' is being called!');
        };
        return UnsharedConcreteFlyweight;
    }());
    FlyweightPattern.UnsharedConcreteFlyweight = UnsharedConcreteFlyweight;
    var FlyweightFactory = (function () {
        function FlyweightFactory() {
            this.fliesMap = {};
        }
        FlyweightFactory.prototype.getFlyweight = function (key) {
            if (this.fliesMap[key] === undefined || null) {
                this.fliesMap[key] = new ConcreteFlyweight(key);
            }
            return this.fliesMap[key];
        };
        return FlyweightFactory;
    }());
    FlyweightPattern.FlyweightFactory = FlyweightFactory;
})(FlyweightPattern || (FlyweightPattern = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9zYW1wbGVzL2Rlc2lnbl9wYXR0ZXJuc19pbl90eXBlc2NyaXB0L2ZseXdlaWdodC9mbHl3ZWlnaHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBVSxnQkFBZ0IsQ0EwQ3pCO0FBMUNELFdBQVUsZ0JBQWdCO0lBTXhCO1FBR0UsMkJBQVksZUFBdUI7WUFDakMsSUFBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7UUFDekMsQ0FBQztRQUVNLHFDQUFTLEdBQWhCLFVBQWlCLENBQVM7WUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsRUFBRSxDQUFDLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztRQUMxRSxDQUFDO1FBQ0gsd0JBQUM7SUFBRCxDQVZBLEFBVUMsSUFBQTtJQVZZLGtDQUFpQixvQkFVN0IsQ0FBQTtJQUVEO1FBR0UsbUNBQVksUUFBZ0I7WUFDMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDM0IsQ0FBQztRQUVNLDZDQUFTLEdBQWhCLFVBQWlCLENBQVM7WUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQ0FBMEMsRUFBRSxDQUFDLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztRQUNsRixDQUFDO1FBQ0gsZ0NBQUM7SUFBRCxDQVZBLEFBVUMsSUFBQTtJQVZZLDBDQUF5Qiw0QkFVckMsQ0FBQTtJQUVEO1FBQUE7WUFFVSxhQUFRLEdBQW1DLEVBQUUsQ0FBQztRQVN4RCxDQUFDO1FBUFEsdUNBQVksR0FBbkIsVUFBb0IsR0FBVztZQUU3QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLFNBQVMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUM3QyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbEQsQ0FBQztZQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzVCLENBQUM7UUFDSCx1QkFBQztJQUFELENBWEEsQUFXQyxJQUFBO0lBWFksaUNBQWdCLG1CQVc1QixDQUFBO0FBQ0gsQ0FBQyxFQTFDUyxnQkFBZ0IsS0FBaEIsZ0JBQWdCLFFBMEN6QiIsImZpbGUiOiJfc2FtcGxlcy9kZXNpZ25fcGF0dGVybnNfaW5fdHlwZXNjcmlwdC9mbHl3ZWlnaHQvZmx5d2VpZ2h0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibmFtZXNwYWNlIEZseXdlaWdodFBhdHRlcm4ge1xuXG4gIGV4cG9ydCBpbnRlcmZhY2UgRmx5d2VpZ2h0IHtcbiAgICBvcGVyYXRpb24oczogU3RyaW5nKTogdm9pZDtcbiAgfVxuXG4gIGV4cG9ydCBjbGFzcyBDb25jcmV0ZUZseXdlaWdodCBpbXBsZW1lbnRzIEZseXdlaWdodCB7XG4gICAgcHJpdmF0ZSBpbnN0cmluc2ljU3RhdGU6IFN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGluc3RyaW5zaWNTdGF0ZTogU3RyaW5nKSB7XG4gICAgICB0aGlzLmluc3RyaW5zaWNTdGF0ZSA9IGluc3RyaW5zaWNTdGF0ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb3BlcmF0aW9uKHM6IFN0cmluZyk6IHZvaWQge1xuICAgICAgY29uc29sZS5sb2coJ2BvcGVyYXRpb25gIG9mIENvbmNyZXRlRmx5d2VpZ2h0JywgcywgJyBpcyBiZWluZyBjYWxsZWQhJyk7XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGNsYXNzIFVuc2hhcmVkQ29uY3JldGVGbHl3ZWlnaHQgaW1wbGVtZW50cyBGbHl3ZWlnaHQge1xuICAgIHByaXZhdGUgYWxsU3RhdGU6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGFsbFN0YXRlOiBudW1iZXIpIHtcbiAgICAgIHRoaXMuYWxsU3RhdGUgPSBhbGxTdGF0ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb3BlcmF0aW9uKHM6IFN0cmluZyk6IHZvaWQge1xuICAgICAgY29uc29sZS5sb2coJ2BvcGVyYXRpb25gIG9mIFVuc2hhcmVkQ29uY3JldGVGbHl3ZWlnaHQnLCBzLCAnIGlzIGJlaW5nIGNhbGxlZCEnKTtcbiAgICB9XG4gIH1cblxuICBleHBvcnQgY2xhc3MgRmx5d2VpZ2h0RmFjdG9yeSB7XG5cbiAgICBwcml2YXRlIGZsaWVzTWFwOiB7W3M6IHN0cmluZ106IEZseXdlaWdodDt9ID0gPGFueT57fTtcblxuICAgIHB1YmxpYyBnZXRGbHl3ZWlnaHQoa2V5OiBzdHJpbmcpOiBGbHl3ZWlnaHQge1xuXG4gICAgICBpZiAodGhpcy5mbGllc01hcFtrZXldID09PSB1bmRlZmluZWQgfHwgbnVsbCkge1xuICAgICAgICB0aGlzLmZsaWVzTWFwW2tleV0gPSBuZXcgQ29uY3JldGVGbHl3ZWlnaHQoa2V5KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLmZsaWVzTWFwW2tleV07XG4gICAgfVxuICB9XG59XG4iXX0=
