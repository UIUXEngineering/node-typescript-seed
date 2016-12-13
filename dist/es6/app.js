import { FOO } from './dep/foo';
var Demo = (function () {
    function Demo(Dep) {
        this._name = 'NAME';
        this._dep = new Dep();
    }
    Object.defineProperty(Demo.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (_val) {
            this._name = _val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Demo.prototype, "dep", {
        get: function () {
            return this._dep;
        },
        enumerable: true,
        configurable: true
    });
    return Demo;
}());
export { Demo };
export function create() {
    return new Demo(FOO);
}

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRWhDO0lBSUUsY0FBWSxHQUFPO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsc0JBQUksc0JBQUk7YUFJUjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3BCLENBQUM7YUFORCxVQUFTLElBQVk7WUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDcEIsQ0FBQzs7O09BQUE7SUFNRCxzQkFBSSxxQkFBRzthQUFQO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDbkIsQ0FBQzs7O09BQUE7SUFDSCxXQUFDO0FBQUQsQ0FwQkEsQUFvQkMsSUFBQTs7QUFFRCxNQUFNO0lBQ0osTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3ZCLENBQUMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRk9PIH0gZnJvbSAnLi9kZXAvZm9vJztcblxuZXhwb3J0IGNsYXNzIERlbW8ge1xuICBfbmFtZTogc3RyaW5nO1xuICBfZGVwOiBGT087XG5cbiAgY29uc3RydWN0b3IoRGVwOmFueSkge1xuICAgIHRoaXMuX25hbWUgPSAnTkFNRSc7XG4gICAgdGhpcy5fZGVwID0gbmV3IERlcCgpO1xuICB9XG5cbiAgc2V0IG5hbWUoX3ZhbDogc3RyaW5nKSB7XG4gICAgdGhpcy5fbmFtZSA9IF92YWw7XG4gIH1cblxuICBnZXQgbmFtZSgpOnN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cblxuICBnZXQgZGVwKCkge1xuICAgIHJldHVybiB0aGlzLl9kZXA7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZSgpOmFueSB7XG4gIHJldHVybiBuZXcgRGVtbyhGT08pO1xufVxuIl19
