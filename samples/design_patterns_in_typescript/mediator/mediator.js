var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MediatorPattern;
(function (MediatorPattern) {
    var Colleague = (function () {
        function Colleague(mediator) {
            this.mediator = mediator;
        }
        Colleague.prototype.send = function (msg) {
            throw new Error('Abstract Method!');
        };
        Colleague.prototype.receive = function (msg) {
            throw new Error('Abstract Method!');
        };
        return Colleague;
    }());
    MediatorPattern.Colleague = Colleague;
    var ConcreteColleagueA = (function (_super) {
        __extends(ConcreteColleagueA, _super);
        function ConcreteColleagueA(mediator) {
            return _super.call(this, mediator) || this;
        }
        ConcreteColleagueA.prototype.send = function (msg) {
            this.mediator.send(msg, this);
        };
        ConcreteColleagueA.prototype.receive = function (msg) {
            console.log(msg, '`receive` of ConcreteColleagueA is being called!');
        };
        return ConcreteColleagueA;
    }(Colleague));
    MediatorPattern.ConcreteColleagueA = ConcreteColleagueA;
    var ConcreteColleagueB = (function (_super) {
        __extends(ConcreteColleagueB, _super);
        function ConcreteColleagueB(mediator) {
            return _super.call(this, mediator) || this;
        }
        ConcreteColleagueB.prototype.send = function (msg) {
            this.mediator.send(msg, this);
        };
        ConcreteColleagueB.prototype.receive = function (msg) {
            console.log(msg, '`receive` of ConcreteColleagueB is being called!');
        };
        return ConcreteColleagueB;
    }(Colleague));
    MediatorPattern.ConcreteColleagueB = ConcreteColleagueB;
    var ConcreteMediator = (function () {
        function ConcreteMediator() {
        }
        ConcreteMediator.prototype.send = function (msg, colleague) {
            if (this.concreteColleagueA === colleague) {
                this.concreteColleagueB.receive(msg);
            }
            else {
                this.concreteColleagueA.receive(msg);
            }
        };
        return ConcreteMediator;
    }());
    MediatorPattern.ConcreteMediator = ConcreteMediator;
})(MediatorPattern || (MediatorPattern = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9zYW1wbGVzL2Rlc2lnbl9wYXR0ZXJuc19pbl90eXBlc2NyaXB0L21lZGlhdG9yL21lZGlhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsSUFBVSxlQUFlLENBNkR4QjtBQTdERCxXQUFVLGVBQWU7SUFLckI7UUFHSSxtQkFBWSxRQUFrQjtZQUMxQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUM3QixDQUFDO1FBRU0sd0JBQUksR0FBWCxVQUFZLEdBQVc7WUFDbkIsTUFBTSxJQUFJLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7UUFFTSwyQkFBTyxHQUFkLFVBQWUsR0FBVztZQUN0QixNQUFNLElBQUksS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDeEMsQ0FBQztRQUNMLGdCQUFDO0lBQUQsQ0FkQSxBQWNDLElBQUE7SUFkWSx5QkFBUyxZQWNyQixDQUFBO0lBRUQ7UUFBd0Msc0NBQVM7UUFDN0MsNEJBQVksUUFBa0I7bUJBQzFCLGtCQUFNLFFBQVEsQ0FBQztRQUNuQixDQUFDO1FBRU0saUNBQUksR0FBWCxVQUFZLEdBQVc7WUFDbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2xDLENBQUM7UUFFTSxvQ0FBTyxHQUFkLFVBQWUsR0FBVztZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxrREFBa0QsQ0FBQyxDQUFDO1FBQ3pFLENBQUM7UUFDTCx5QkFBQztJQUFELENBWkEsQUFZQyxDQVp1QyxTQUFTLEdBWWhEO0lBWlksa0NBQWtCLHFCQVk5QixDQUFBO0lBRUQ7UUFBd0Msc0NBQVM7UUFDN0MsNEJBQVksUUFBa0I7bUJBQzFCLGtCQUFNLFFBQVEsQ0FBQztRQUNuQixDQUFDO1FBRU0saUNBQUksR0FBWCxVQUFZLEdBQVc7WUFDbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2xDLENBQUM7UUFFTSxvQ0FBTyxHQUFkLFVBQWUsR0FBVztZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxrREFBa0QsQ0FBQyxDQUFDO1FBQ3pFLENBQUM7UUFDTCx5QkFBQztJQUFELENBWkEsQUFZQyxDQVp1QyxTQUFTLEdBWWhEO0lBWlksa0NBQWtCLHFCQVk5QixDQUFBO0lBRUQ7UUFBQTtRQVdBLENBQUM7UUFQVSwrQkFBSSxHQUFYLFVBQVksR0FBVyxFQUFFLFNBQW9CO1lBQ3pDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUN4QyxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3pDLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDSixJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3pDLENBQUM7UUFDTCxDQUFDO1FBQ0wsdUJBQUM7SUFBRCxDQVhBLEFBV0MsSUFBQTtJQVhZLGdDQUFnQixtQkFXNUIsQ0FBQTtBQUNMLENBQUMsRUE3RFMsZUFBZSxLQUFmLGVBQWUsUUE2RHhCIiwiZmlsZSI6Il9zYW1wbGVzL2Rlc2lnbl9wYXR0ZXJuc19pbl90eXBlc2NyaXB0L21lZGlhdG9yL21lZGlhdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsibmFtZXNwYWNlIE1lZGlhdG9yUGF0dGVybiB7XG4gICAgZXhwb3J0IGludGVyZmFjZSBNZWRpYXRvciB7XG4gICAgICAgIHNlbmQobXNnOiBzdHJpbmcsIGNvbGxlYWd1ZTogQ29sbGVhZ3VlKTogdm9pZDtcbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgQ29sbGVhZ3VlIHtcbiAgICAgICAgcHVibGljIG1lZGlhdG9yOiBNZWRpYXRvcjtcblxuICAgICAgICBjb25zdHJ1Y3RvcihtZWRpYXRvcjogTWVkaWF0b3IpIHtcbiAgICAgICAgICAgIHRoaXMubWVkaWF0b3IgPSBtZWRpYXRvcjtcbiAgICAgICAgfVxuXG4gICAgICAgIHB1YmxpYyBzZW5kKG1zZzogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Fic3RyYWN0IE1ldGhvZCEnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHB1YmxpYyByZWNlaXZlKG1zZzogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Fic3RyYWN0IE1ldGhvZCEnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBDb25jcmV0ZUNvbGxlYWd1ZUEgZXh0ZW5kcyBDb2xsZWFndWUge1xuICAgICAgICBjb25zdHJ1Y3RvcihtZWRpYXRvcjogTWVkaWF0b3IpIHtcbiAgICAgICAgICAgIHN1cGVyKG1lZGlhdG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHB1YmxpYyBzZW5kKG1zZzogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgICAgICB0aGlzLm1lZGlhdG9yLnNlbmQobXNnLCB0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHB1YmxpYyByZWNlaXZlKG1zZzogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhtc2csICdgcmVjZWl2ZWAgb2YgQ29uY3JldGVDb2xsZWFndWVBIGlzIGJlaW5nIGNhbGxlZCEnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBDb25jcmV0ZUNvbGxlYWd1ZUIgZXh0ZW5kcyBDb2xsZWFndWUge1xuICAgICAgICBjb25zdHJ1Y3RvcihtZWRpYXRvcjogTWVkaWF0b3IpIHtcbiAgICAgICAgICAgIHN1cGVyKG1lZGlhdG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHB1YmxpYyBzZW5kKG1zZzogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgICAgICB0aGlzLm1lZGlhdG9yLnNlbmQobXNnLCB0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHB1YmxpYyByZWNlaXZlKG1zZzogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhtc2csICdgcmVjZWl2ZWAgb2YgQ29uY3JldGVDb2xsZWFndWVCIGlzIGJlaW5nIGNhbGxlZCEnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBjbGFzcyBDb25jcmV0ZU1lZGlhdG9yIGltcGxlbWVudHMgTWVkaWF0b3Ige1xuICAgICAgICBwdWJsaWMgY29uY3JldGVDb2xsZWFndWVBOiBDb25jcmV0ZUNvbGxlYWd1ZUE7XG4gICAgICAgIHB1YmxpYyBjb25jcmV0ZUNvbGxlYWd1ZUI6IENvbmNyZXRlQ29sbGVhZ3VlQjtcblxuICAgICAgICBwdWJsaWMgc2VuZChtc2c6IHN0cmluZywgY29sbGVhZ3VlOiBDb2xsZWFndWUpOiB2b2lkIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbmNyZXRlQ29sbGVhZ3VlQSA9PT0gY29sbGVhZ3VlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25jcmV0ZUNvbGxlYWd1ZUIucmVjZWl2ZShtc2cpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmNyZXRlQ29sbGVhZ3VlQS5yZWNlaXZlKG1zZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=
