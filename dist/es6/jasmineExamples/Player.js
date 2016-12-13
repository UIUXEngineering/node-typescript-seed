var Player = (function () {
    function Player() {
    }
    Player.prototype.play = function (song) {
        this.currentlyPlayingSong = song;
        this.isPlaying = true;
    };
    Player.prototype.pause = function () {
        this.isPlaying = false;
    };
    Player.prototype.resume = function () {
        if (this.isPlaying) {
            throw new Error('song is already playing');
        }
        this.isPlaying = true;
    };
    Player.prototype.makeFavorite = function () {
        this.currentlyPlayingSong.persistFavoriteStatus(true);
    };
    return Player;
}());
export { Player };

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImphc21pbmVFeGFtcGxlcy9QbGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFBQTtJQXlCQSxDQUFDO0lBcEJDLHFCQUFJLEdBQUosVUFBSyxJQUFJO1FBQ1AsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQztRQUNqQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztJQUN4QixDQUFDO0lBRUQsc0JBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7SUFFRCx1QkFBTSxHQUFOO1FBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDbkIsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBQzdDLENBQUM7UUFFRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztJQUN4QixDQUFDO0lBRUQsNkJBQVksR0FBWjtRQUNFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBQ0gsYUFBQztBQUFELENBekJBLEFBeUJDLElBQUE7QUFFRCxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUMiLCJmaWxlIjoiamFzbWluZUV4YW1wbGVzL1BsYXllci5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFBsYXllciB7XG5cbiAgY3VycmVudGx5UGxheWluZ1Nvbmc6IGFueTtcbiAgaXNQbGF5aW5nOiBib29sZWFuO1xuXG4gIHBsYXkoc29uZykge1xuICAgIHRoaXMuY3VycmVudGx5UGxheWluZ1NvbmcgPSBzb25nO1xuICAgIHRoaXMuaXNQbGF5aW5nID0gdHJ1ZTtcbiAgfVxuXG4gIHBhdXNlKCkge1xuICAgIHRoaXMuaXNQbGF5aW5nID0gZmFsc2U7XG4gIH1cblxuICByZXN1bWUoKSB7XG4gICAgaWYgKHRoaXMuaXNQbGF5aW5nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3NvbmcgaXMgYWxyZWFkeSBwbGF5aW5nJyk7XG4gICAgfVxuXG4gICAgdGhpcy5pc1BsYXlpbmcgPSB0cnVlO1xuICB9XG5cbiAgbWFrZUZhdm9yaXRlKCkge1xuICAgIHRoaXMuY3VycmVudGx5UGxheWluZ1NvbmcucGVyc2lzdEZhdm9yaXRlU3RhdHVzKHRydWUpO1xuICB9XG59XG5cbmV4cG9ydCB7IFBsYXllciB9O1xuIl19
