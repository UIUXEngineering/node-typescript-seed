var PrototypePattern;
(function (PrototypePattern) {
    var Concrete1 = (function () {
        function Concrete1() {
        }
        Concrete1.prototype.clone = function () {
            return new Concrete1();
        };
        Concrete1.prototype.toString = function () {
            return 'This is Concrete1';
        };
        return Concrete1;
    }());
    PrototypePattern.Concrete1 = Concrete1;
    var Concrete2 = (function () {
        function Concrete2() {
        }
        Concrete2.prototype.clone = function () {
            return new Concrete2();
        };
        Concrete2.prototype.toString = function () {
            return 'This is Concrete2';
        };
        return Concrete2;
    }());
    PrototypePattern.Concrete2 = Concrete2;
    var Concrete3 = (function () {
        function Concrete3() {
        }
        Concrete3.prototype.clone = function () {
            return new Concrete3();
        };
        Concrete3.prototype.toString = function () {
            return 'This is Concrete3';
        };
        return Concrete3;
    }());
    PrototypePattern.Concrete3 = Concrete3;
    var Builder = (function () {
        function Builder() {
            this.prototypeMap = {};
            this.prototypeMap['c1'] = new Concrete1();
            this.prototypeMap['c2'] = new Concrete2();
            this.prototypeMap['c3'] = new Concrete3();
        }
        Builder.prototype.createOne = function (s) {
            console.log(s);
            return this.prototypeMap[s].clone();
        };
        return Builder;
    }());
    PrototypePattern.Builder = Builder;
})(PrototypePattern || (PrototypePattern = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9zYW1wbGVzL2Rlc2lnbl9wYXR0ZXJuc19pbl90eXBlc2NyaXB0L3Byb3RvdHlwZS9wcm90b3R5cGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBVSxnQkFBZ0IsQ0FzRHpCO0FBdERELFdBQVUsZ0JBQWdCO0lBTXhCO1FBQUE7UUFTQSxDQUFDO1FBUEMseUJBQUssR0FBTDtZQUNFLE1BQU0sQ0FBQyxJQUFJLFNBQVMsRUFBRSxDQUFDO1FBQ3pCLENBQUM7UUFFRCw0QkFBUSxHQUFSO1lBQ0UsTUFBTSxDQUFDLG1CQUFtQixDQUFDO1FBQzdCLENBQUM7UUFDSCxnQkFBQztJQUFELENBVEEsQUFTQyxJQUFBO0lBVFksMEJBQVMsWUFTckIsQ0FBQTtJQUVEO1FBQUE7UUFTQSxDQUFDO1FBUEMseUJBQUssR0FBTDtZQUNFLE1BQU0sQ0FBQyxJQUFJLFNBQVMsRUFBRSxDQUFDO1FBQ3pCLENBQUM7UUFFRCw0QkFBUSxHQUFSO1lBQ0UsTUFBTSxDQUFDLG1CQUFtQixDQUFDO1FBQzdCLENBQUM7UUFDSCxnQkFBQztJQUFELENBVEEsQUFTQyxJQUFBO0lBVFksMEJBQVMsWUFTckIsQ0FBQTtJQUVEO1FBQUE7UUFTQSxDQUFDO1FBUEMseUJBQUssR0FBTDtZQUNFLE1BQU0sQ0FBQyxJQUFJLFNBQVMsRUFBRSxDQUFDO1FBQ3pCLENBQUM7UUFFRCw0QkFBUSxHQUFSO1lBQ0UsTUFBTSxDQUFDLG1CQUFtQixDQUFDO1FBQzdCLENBQUM7UUFDSCxnQkFBQztJQUFELENBVEEsQUFTQyxJQUFBO0lBVFksMEJBQVMsWUFTckIsQ0FBQTtJQUdEO1FBR0U7WUFGUSxpQkFBWSxHQUE4QixFQUFFLENBQUM7WUFHbkQsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLFNBQVMsRUFBRSxDQUFDO1lBQzFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxTQUFTLEVBQUUsQ0FBQztZQUMxQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksU0FBUyxFQUFFLENBQUM7UUFDNUMsQ0FBQztRQUVELDJCQUFTLEdBQVQsVUFBVSxDQUFTO1lBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDZixNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN0QyxDQUFDO1FBQ0gsY0FBQztJQUFELENBYkEsQUFhQyxJQUFBO0lBYlksd0JBQU8sVUFhbkIsQ0FBQTtBQUNILENBQUMsRUF0RFMsZ0JBQWdCLEtBQWhCLGdCQUFnQixRQXNEekIiLCJmaWxlIjoiX3NhbXBsZXMvZGVzaWduX3BhdHRlcm5zX2luX3R5cGVzY3JpcHQvcHJvdG90eXBlL3Byb3RvdHlwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm5hbWVzcGFjZSBQcm90b3R5cGVQYXR0ZXJuIHtcbiAgZXhwb3J0IGludGVyZmFjZSBQcm90b3R5cGUge1xuICAgIGNsb25lKCk6IFByb3RvdHlwZTtcbiAgICB0b1N0cmluZygpOiBzdHJpbmc7XG4gIH1cblxuICBleHBvcnQgY2xhc3MgQ29uY3JldGUxIGltcGxlbWVudHMgUHJvdG90eXBlIHtcblxuICAgIGNsb25lKCk6IFByb3RvdHlwZSB7XG4gICAgICByZXR1cm4gbmV3IENvbmNyZXRlMSgpO1xuICAgIH1cblxuICAgIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gJ1RoaXMgaXMgQ29uY3JldGUxJztcbiAgICB9XG4gIH1cblxuICBleHBvcnQgY2xhc3MgQ29uY3JldGUyIGltcGxlbWVudHMgUHJvdG90eXBlIHtcblxuICAgIGNsb25lKCk6IFByb3RvdHlwZSB7XG4gICAgICByZXR1cm4gbmV3IENvbmNyZXRlMigpO1xuICAgIH1cblxuICAgIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gJ1RoaXMgaXMgQ29uY3JldGUyJztcbiAgICB9XG4gIH1cblxuICBleHBvcnQgY2xhc3MgQ29uY3JldGUzIGltcGxlbWVudHMgUHJvdG90eXBlIHtcblxuICAgIGNsb25lKCk6IFByb3RvdHlwZSB7XG4gICAgICByZXR1cm4gbmV3IENvbmNyZXRlMygpO1xuICAgIH1cblxuICAgIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gJ1RoaXMgaXMgQ29uY3JldGUzJztcbiAgICB9XG4gIH1cblxuXG4gIGV4cG9ydCBjbGFzcyBCdWlsZGVyIHtcbiAgICBwcml2YXRlIHByb3RvdHlwZU1hcDoge1tzOiBzdHJpbmddOiBQcm90b3R5cGU7fSA9IHt9O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICB0aGlzLnByb3RvdHlwZU1hcFsnYzEnXSA9IG5ldyBDb25jcmV0ZTEoKTtcbiAgICAgIHRoaXMucHJvdG90eXBlTWFwWydjMiddID0gbmV3IENvbmNyZXRlMigpO1xuICAgICAgdGhpcy5wcm90b3R5cGVNYXBbJ2MzJ10gPSBuZXcgQ29uY3JldGUzKCk7XG4gICAgfVxuXG4gICAgY3JlYXRlT25lKHM6IHN0cmluZyk6IFByb3RvdHlwZSB7XG4gICAgICBjb25zb2xlLmxvZyhzKTtcbiAgICAgIHJldHVybiB0aGlzLnByb3RvdHlwZU1hcFtzXS5jbG9uZSgpO1xuICAgIH1cbiAgfVxufVxuIl19
