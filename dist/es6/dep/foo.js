var FOO = (function () {
    function FOO() {
        this._name = 'FOO';
    }
    Object.defineProperty(FOO.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (_val) {
            this._name = _val;
        },
        enumerable: true,
        configurable: true
    });
    return FOO;
}());
export { FOO };

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlcC9mb28udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7SUFHRTtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFNRCxzQkFBSSxxQkFBSTthQVFSO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDcEIsQ0FBQzthQVZELFVBQVMsSUFBWTtZQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNwQixDQUFDOzs7T0FBQTtJQVNILFVBQUM7QUFBRCxDQXRCQSxBQXNCQyxJQUFBIiwiZmlsZSI6ImRlcC9mb28uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFNhbWVwbGUgRm9vIENsYXNzXG4gKi9cbmV4cG9ydCBjbGFzcyBGT08ge1xuICBfbmFtZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX25hbWUgPSAnRk9PJztcbiAgfVxuXG4gIC8qKlxuICAgKiBOYW1lIHNldHRlclxuICAgKiBAcGFyYW0gX3ZhbFxuICAgKi9cbiAgc2V0IG5hbWUoX3ZhbDogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZSA9IF92YWw7XG4gIH1cblxuICAvKipcbiAgICogTmFtZSBnZXR0ZXJcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIGdldCBuYW1lKCk6c3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxufVxuIl19
