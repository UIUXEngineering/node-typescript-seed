var readline = require('readline');
var Patterns;
(function (Patterns) {
    function printMenu() {
        var menu = '= Creational Patterns == \n' +
            '  1: Singleton \n' +
            '  2: Abstract factory \n' +
            '  3: Factory method \n' +
            '  4: Builder \n' +
            '  5: Prototype \n\n' +
            '= Structural Patterns == \n' +
            '  6: Adapter \n' +
            '  7: Bridge \n' +
            '  8: Composite \n' +
            '  9: Decorator \n' +
            ' 10: Facade \n' +
            ' 11: Flyweight \n' +
            ' 12: Proxy \n\n' +
            '= Behavioral Patterns == \n' +
            ' 13: Chain of responsibility \n' +
            ' 14: Command \n' +
            ' 15: Interpreter \n' +
            ' 16: Iterator \n' +
            ' 17: Mediator \n' +
            ' 18: Memento \n' +
            ' 19: Observer \n' +
            ' 20: State \n' +
            ' 21: Strategy \n' +
            ' 22: Template method \n' +
            ' 23: Visitor \n';
        console.log('\n\n');
        console.log('==== Choose one pattern to demonstrate ====');
        console.log('\n');
        console.log(menu);
    }
    function menu() {
        var rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        printMenu();
        rl.question('Which pattern would you like to check?   ', function (answer) {
            switch (+answer) {
                case 1:
                    show(SingletonPattern);
                    break;
                case 2:
                    show(AbstractFactoryPattern);
                    break;
                case 3:
                    show(FactoryMethodPattern);
                    break;
                case 4:
                    show(BuilderPattern);
                    break;
                case 5:
                    show(PrototypePattern);
                    break;
                case 6:
                    show(AdapterPattern);
                    break;
                case 7:
                    show(BridgePattern);
                    break;
                case 8:
                    show(CompositePattern);
                    break;
                case 9:
                    show(DecoratorPattern);
                    break;
                case 10:
                    show(FacadePattern);
                    break;
                case 11:
                    show(FlyweightPattern);
                    break;
                case 12:
                    show(ProxyPattern);
                    break;
                case 13:
                    show(ChainOfResponsibilityPattern);
                    break;
                case 14:
                    show(CommandPattern);
                    break;
                case 15:
                    show(InterpreterPattern);
                    break;
                case 16:
                    show(IteratorPattern);
                    break;
                case 17:
                    show(MediatorPattern);
                    break;
                case 18:
                    show(MementoPattern);
                    break;
                case 19:
                    show(ObserverPattern);
                    break;
                case 20:
                    show(StatePattern);
                    break;
                case 21:
                    show(StrategyPattern);
                    break;
                case 22:
                    show(TemplateMethodPattern);
                    break;
                case 23:
                    show(VisitorPattern);
                    break;
                default: break;
            }
            rl.close();
        });
    }
    Patterns.menu = menu;
    function show(Pattern) {
        Pattern.Demo.show();
    }
})(Patterns || (Patterns = {}));
Patterns.menu();

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlc2lnbl9wYXR0ZXJuc19pbl90eXBlc2NyaXB0L21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkJBLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUVuQyxJQUFVLFFBQVEsQ0ErRWpCO0FBL0VELFdBQVUsUUFBUTtJQUdqQjtRQUNDLElBQUksSUFBSSxHQUFHLDZCQUE2QjtZQUNyQyxtQkFBbUI7WUFDbkIsMEJBQTBCO1lBQzFCLHdCQUF3QjtZQUN4QixpQkFBaUI7WUFDakIscUJBQXFCO1lBQ3JCLDZCQUE2QjtZQUM3QixpQkFBaUI7WUFDakIsZ0JBQWdCO1lBQ2hCLG1CQUFtQjtZQUNuQixtQkFBbUI7WUFDbkIsZ0JBQWdCO1lBQ2hCLG1CQUFtQjtZQUNuQixpQkFBaUI7WUFDakIsNkJBQTZCO1lBQzdCLGlDQUFpQztZQUNqQyxpQkFBaUI7WUFDakIscUJBQXFCO1lBQ3JCLGtCQUFrQjtZQUNsQixrQkFBa0I7WUFDbEIsaUJBQWlCO1lBQ2pCLGtCQUFrQjtZQUNsQixlQUFlO1lBQ2Ysa0JBQWtCO1lBQ2xCLHlCQUF5QjtZQUN6QixpQkFBaUIsQ0FBQztRQUdyQixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkNBQTZDLENBQUMsQ0FBQztRQUMzRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkIsQ0FBQztJQUVEO1FBQ0MsSUFBSSxFQUFFLEdBQUcsUUFBUSxDQUFDLGVBQWUsQ0FBQztZQUMvQixLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUs7WUFDcEIsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNO1NBQ3ZCLENBQUMsQ0FBQztRQUVKLFNBQVMsRUFBRSxDQUFDO1FBQ1QsRUFBRSxDQUFDLFFBQVEsQ0FBQywyQ0FBMkMsRUFBRSxVQUFTLE1BQU07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c2lnbl9wYXR0ZXJuc19pbl90eXBlc2NyaXB0L21haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPSdzaW5nbGV0b24vc3JjL2RlbW8udHMnIC8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPSdhYnN0cmFjdF9mYWN0b3J5L2RlbW8udHMnIC8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPSdmYWN0b3J5X21ldGhvZC9kZW1vLnRzJyAvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD0nYnVpbGRlci9kZW1vLnRzJyAvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD0ncHJvdG90eXBlL2RlbW8udHMnIC8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPSdhZGFwdGVyL2RlbW8udHMnIC8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPSdicmlkZ2UvZGVtby50cycgLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9J2NvbXBvc2l0ZS9kZW1vLnRzJyAvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD0nZGVjb3JhdG9yL2RlbW8udHMnIC8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPSdmYWNhZGUvZGVtby50cycgLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9J2ZseXdlaWdodC9kZW1vLnRzJyAvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD0ncHJveHkvZGVtby50cycgLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9J2NoYWluX29mX3Jlc3BvbnNpYmlsaXR5L2RlbW8udHMnIC8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPSdjb21tYW5kL2RlbW8udHMnIC8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPSdpbnRlcnByZXRlci9kZW1vLnRzJyAvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD0naXRlcmF0b3IvZGVtby50cycgLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9J21lZGlhdG9yL2RlbW8udHMnIC8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPSdtZW1lbnRvL2RlbW8udHMnIC8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPSdvYnNlcnZlci9kZW1vLnRzJyAvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD0nc3RhdGUvZGVtby50cycgLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9J3N0cmF0ZWd5L2RlbW8udHMnIC8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPSd0ZW1wbGF0ZV9tZXRob2QvZGVtby50cycgLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9J3Zpc2l0b3IvZGVtby50cycgLz5cbi8vXG4vL1xuLy9cbmRlY2xhcmUgdmFyIHJlcXVpcmUgOiAobW9kdWxlSWQgOiBzdHJpbmcpID0+IGFueTtcbmRlY2xhcmUgdmFyIHByb2Nlc3MgOiBhbnk7XG5cbnZhciByZWFkbGluZSA9IHJlcXVpcmUoJ3JlYWRsaW5lJyk7XG5cbm5hbWVzcGFjZSBQYXR0ZXJucyB7XG5cblxuIGZ1bmN0aW9uIHByaW50TWVudSgpIDogdm9pZCB7XG4gIHZhciBtZW51ID0gJz0gQ3JlYXRpb25hbCBQYXR0ZXJucyA9PSBcXG4nICtcbiAgICAgJyAgMTogU2luZ2xldG9uIFxcbicgK1xuICAgICAnICAyOiBBYnN0cmFjdCBmYWN0b3J5IFxcbicgK1xuICAgICAnICAzOiBGYWN0b3J5IG1ldGhvZCBcXG4nICtcbiAgICAgJyAgNDogQnVpbGRlciBcXG4nICtcbiAgICAgJyAgNTogUHJvdG90eXBlIFxcblxcbicgK1xuICAgICAnPSBTdHJ1Y3R1cmFsIFBhdHRlcm5zID09IFxcbicgK1xuICAgICAnICA2OiBBZGFwdGVyIFxcbicgK1xuICAgICAnICA3OiBCcmlkZ2UgXFxuJyArXG4gICAgICcgIDg6IENvbXBvc2l0ZSBcXG4nICtcbiAgICAgJyAgOTogRGVjb3JhdG9yIFxcbicgK1xuICAgICAnIDEwOiBGYWNhZGUgXFxuJyArXG4gICAgICcgMTE6IEZseXdlaWdodCBcXG4nICtcbiAgICAgJyAxMjogUHJveHkgXFxuXFxuJyArXG4gICAgICc9IEJlaGF2aW9yYWwgUGF0dGVybnMgPT0gXFxuJyArXG4gICAgICcgMTM6IENoYWluIG9mIHJlc3BvbnNpYmlsaXR5IFxcbicgK1xuICAgICAnIDE0OiBDb21tYW5kIFxcbicgK1xuICAgICAnIDE1OiBJbnRlcnByZXRlciBcXG4nICtcbiAgICAgJyAxNjogSXRlcmF0b3IgXFxuJyArXG4gICAgICcgMTc6IE1lZGlhdG9yIFxcbicgK1xuICAgICAnIDE4OiBNZW1lbnRvIFxcbicgK1xuICAgICAnIDE5OiBPYnNlcnZlciBcXG4nICtcbiAgICAgJyAyMDogU3RhdGUgXFxuJyArXG4gICAgICcgMjE6IFN0cmF0ZWd5IFxcbicgK1xuICAgICAnIDIyOiBUZW1wbGF0ZSBtZXRob2QgXFxuJyArXG4gICAgICcgMjM6IFZpc2l0b3IgXFxuJztcblxuXG4gIGNvbnNvbGUubG9nKCdcXG5cXG4nKTtcbiAgY29uc29sZS5sb2coJz09PT0gQ2hvb3NlIG9uZSBwYXR0ZXJuIHRvIGRlbW9uc3RyYXRlID09PT0nKTtcbiAgY29uc29sZS5sb2coJ1xcbicpO1xuICBjb25zb2xlLmxvZyhtZW51KTtcbiB9XG5cbiBleHBvcnQgZnVuY3Rpb24gbWVudSgpIDogdm9pZCB7XG4gIHZhciBybCA9IHJlYWRsaW5lLmNyZWF0ZUludGVyZmFjZSh7XG4gICAgIGlucHV0OiBwcm9jZXNzLnN0ZGluLFxuICAgICBvdXRwdXQ6IHByb2Nlc3Muc3Rkb3V0XG4gICB9KTtcblxuICBwcmludE1lbnUoKTtcbiAgICAgcmwucXVlc3Rpb24oJ1doaWNoIHBhdHRlcm4gd291bGQgeW91IGxpa2UgdG8gY2hlY2s/ICAgJywgZnVuY3Rpb24oYW5zd2VyKSB7XG4gICBzd2l0Y2goK2Fuc3dlcikge1xuICAgIGNhc2UgMSA6IHNob3coU2luZ2xldG9uUGF0dGVybik7IGJyZWFrO1xuICAgIGNhc2UgMiA6IHNob3coQWJzdHJhY3RGYWN0b3J5UGF0dGVybik7IGJyZWFrO1xuICAgIGNhc2UgMyA6IHNob3coRmFjdG9yeU1ldGhvZFBhdHRlcm4pOyBicmVhaztcbiAgICBjYXNlIDQgOiBzaG93KEJ1aWxkZXJQYXR0ZXJuKTsgYnJlYWs7XG4gICAgY2FzZSA1IDogc2hvdyhQcm90b3R5cGVQYXR0ZXJuKTsgYnJlYWs7XG4gICAgY2FzZSA2IDogc2hvdyhBZGFwdGVyUGF0dGVybik7IGJyZWFrO1xuICAgIGNhc2UgNyA6IHNob3coQnJpZGdlUGF0dGVybik7IGJyZWFrO1xuICAgIGNhc2UgOCA6IHNob3coQ29tcG9zaXRlUGF0dGVybik7IGJyZWFrO1xuICAgIGNhc2UgOSA6IHNob3coRGVjb3JhdG9yUGF0dGVybik7IGJyZWFrO1xuICAgIGNhc2UgMTAgOiBzaG93KEZhY2FkZVBhdHRlcm4pOyBicmVhaztcbiAgICBjYXNlIDExIDogc2hvdyhGbHl3ZWlnaHRQYXR0ZXJuKTsgYnJlYWs7XG4gICAgY2FzZSAxMiA6IHNob3coUHJveHlQYXR0ZXJuKTsgYnJlYWs7XG4gICAgY2FzZSAxMyA6IHNob3coQ2hhaW5PZlJlc3BvbnNpYmlsaXR5UGF0dGVybik7IGJyZWFrO1xuICAgIGNhc2UgMTQgOiBzaG93KENvbW1hbmRQYXR0ZXJuKTsgYnJlYWs7XG4gICAgY2FzZSAxNSA6IHNob3coSW50ZXJwcmV0ZXJQYXR0ZXJuKTsgYnJlYWs7XG4gICAgY2FzZSAxNiA6IHNob3coSXRlcmF0b3JQYXR0ZXJuKTsgYnJlYWs7XG4gICAgY2FzZSAxNyA6IHNob3coTWVkaWF0b3JQYXR0ZXJuKTsgYnJlYWs7XG4gICAgY2FzZSAxOCA6IHNob3coTWVtZW50b1BhdHRlcm4pOyBicmVhaztcbiAgICBjYXNlIDE5IDogc2hvdyhPYnNlcnZlclBhdHRlcm4pOyBicmVhaztcbiAgICBjYXNlIDIwIDogc2hvdyhTdGF0ZVBhdHRlcm4pOyBicmVhaztcbiAgICBjYXNlIDIxIDogc2hvdyhTdHJhdGVneVBhdHRlcm4pOyBicmVhaztcbiAgICBjYXNlIDIyIDogc2hvdyhUZW1wbGF0ZU1ldGhvZFBhdHRlcm4pOyBicmVhaztcbiAgICBjYXNlIDIzIDogc2hvdyhWaXNpdG9yUGF0dGVybik7IGJyZWFrO1xuICAgIGRlZmF1bHQgOiBicmVhaztcbiAgIH1cbiAgIHJsLmNsb3NlKCk7XG4gIH0pO1xuIH1cblxuIGZ1bmN0aW9uIHNob3coUGF0dGVybiA6IGFueSkgOiB2b2lkIHtcbiAgUGF0dGVybi5EZW1vLnNob3coKTtcbiB9XG59XG5cblBhdHRlcm5zLm1lbnUoKTtcbiJdfQ==
