var DecoratorPattern;
(function (DecoratorPattern) {
    var Demo;
    (function (Demo) {
        function show() {
            var decorator1 = new DecoratorPattern.ConcreteDecorator(1, new DecoratorPattern.ConcreteComponent('Comp1'));
            decorator1.operation();
        }
        Demo.show = show;
    })(Demo = DecoratorPattern.Demo || (DecoratorPattern.Demo = {}));
})(DecoratorPattern || (DecoratorPattern = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlc2lnbl9wYXR0ZXJuc19pbl90eXBlc2NyaXB0L2RlY29yYXRvci9kZW1vLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLElBQVUsZ0JBQWdCLENBV3pCO0FBWEQsV0FBVSxnQkFBZ0I7SUFDeEIsSUFBaUIsSUFBSSxDQVNwQjtJQVRELFdBQWlCLElBQUk7UUFFbkI7WUFDRSxJQUFJLFVBQVUsR0FDWixJQUFJLGdCQUFnQixDQUFDLGlCQUFpQixDQUFDLENBQUMsRUFDdEMsSUFBSSxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBRXJELFVBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUN6QixDQUFDO1FBTmUsU0FBSSxPQU1uQixDQUFBO0lBQ0gsQ0FBQyxFQVRnQixJQUFJLEdBQUoscUJBQUksS0FBSixxQkFBSSxRQVNwQjtBQUNILENBQUMsRUFYUyxnQkFBZ0IsS0FBaEIsZ0JBQWdCLFFBV3pCIiwiZmlsZSI6ImRlc2lnbl9wYXR0ZXJuc19pbl90eXBlc2NyaXB0L2RlY29yYXRvci9kZW1vLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD0nZGVjb3JhdG9yLnRzJyAvPlxubmFtZXNwYWNlIERlY29yYXRvclBhdHRlcm4ge1xuICBleHBvcnQgbmFtZXNwYWNlIERlbW8ge1xuXG4gICAgZXhwb3J0IGZ1bmN0aW9uIHNob3coKTogdm9pZCB7XG4gICAgICB2YXIgZGVjb3JhdG9yMTogRGVjb3JhdG9yUGF0dGVybi5EZWNvcmF0b3IgPVxuICAgICAgICBuZXcgRGVjb3JhdG9yUGF0dGVybi5Db25jcmV0ZURlY29yYXRvcigxLFxuICAgICAgICAgIG5ldyBEZWNvcmF0b3JQYXR0ZXJuLkNvbmNyZXRlQ29tcG9uZW50KCdDb21wMScpKTtcblxuICAgICAgZGVjb3JhdG9yMS5vcGVyYXRpb24oKTtcbiAgICB9XG4gIH1cbn1cblxuIl19
