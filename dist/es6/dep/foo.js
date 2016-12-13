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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlcC9mb28udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFHRTtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxzQkFBSSxxQkFBSTthQUlSO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDcEIsQ0FBQzthQU5ELFVBQVMsSUFBWTtZQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNwQixDQUFDOzs7T0FBQTtJQUtILFVBQUM7QUFBRCxDQWRBLEFBY0MsSUFBQSIsImZpbGUiOiJkZXAvZm9vLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEZPTyB7XG4gIF9uYW1lOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fbmFtZSA9ICdGT08nO1xuICB9XG5cbiAgc2V0IG5hbWUoX3ZhbDogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZSA9IF92YWw7XG4gIH1cblxuICBnZXQgbmFtZSgpOnN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cbn1cbiJdfQ==
