/// <reference path="../../tools/manual_typings/project/jasmine.d.ts" />
describe("Player", function () {
    var Player = require('./Player');
    var Song = require('./Song');
    var player;
    var song;
    beforeEach(function () {
        player = new Player();
        song = new Song();
    });
    it("should be able to play a Song", function () {
        player.play(song);
        expect(player.currentlyPlayingSong).toEqual(song);
        //demonstrates use of custom matcher
        expect(player).toBePlaying(song);
    });
    describe("when song has been paused", function () {
        beforeEach(function () {
            player.play(song);
            player.pause();
        });
        it("should indicate that the song is currently paused", function () {
            expect(player.isPlaying).toBeFalsy();
            // demonstrates use of 'not' with a custom matcher
            expect(player).not.toBePlaying(song);
        });
        it("should be possible to resume", function () {
            player.resume();
            expect(player.isPlaying).toBeTruthy();
            expect(player.currentlyPlayingSong).toEqual(song);
        });
    });
    // demonstrates use of spies to intercept and test method calls
    it("tells the current song if the user has made it a favorite", function () {
        spyOn(song, 'persistFavoriteStatus');
        player.play(song);
        player.makeFavorite();
        expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
    });
    //demonstrates use of expected exceptions
    describe("#resume", function () {
        it("should throw an exception if song is already playing", function () {
            player.play(song);
            expect(function () {
                player.resume();
            }).toThrowError("song is already playing");
        });
    });
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImphc21pbmVFeGFtcGxlcy9QbGF5ZXIuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx3RUFBd0U7QUFFeEUsUUFBUSxDQUFDLFFBQVEsRUFBRTtJQUNqQixJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDakMsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzdCLElBQUksTUFBTSxDQUFDO0lBQ1gsSUFBSSxJQUFJLENBQUM7SUFFVCxVQUFVLENBQUM7UUFDVCxNQUFNLEdBQUcsSUFBSSxNQUFNLEVBQUUsQ0FBQztRQUN0QixJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztJQUVwQixDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQywrQkFBK0IsRUFBRTtRQUNsQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xCLE1BQU0sQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFbEQsb0NBQW9DO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkMsQ0FBQyxDQUFDLENBQUM7SUFFSCxRQUFRLENBQUMsMkJBQTJCLEVBQUU7UUFDcEMsVUFBVSxDQUFDO1lBQ1QsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQixNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDakIsQ0FBQyxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsbURBQW1ELEVBQUU7WUFDdEQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUVyQyxrREFBa0Q7WUFDbEQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkMsQ0FBQyxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsOEJBQThCLEVBQUU7WUFDakMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2hCLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDdEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwRCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0lBRUgsK0RBQStEO0lBQy9ELEVBQUUsQ0FBQywyREFBMkQsRUFBRTtRQUM5RCxLQUFLLENBQUMsSUFBSSxFQUFFLHVCQUF1QixDQUFDLENBQUM7UUFFckMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQixNQUFNLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hFLENBQUMsQ0FBQyxDQUFDO0lBRUgseUNBQXlDO0lBQ3pDLFFBQVEsQ0FBQyxTQUFTLEVBQUU7UUFDbEIsRUFBRSxDQUFDLHNEQUFzRCxFQUFFO1lBQ3pELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFbEIsTUFBTSxDQUFDO2dCQUNMLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNsQixDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUM3QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiamFzbWluZUV4YW1wbGVzL1BsYXllci5zcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3Rvb2xzL21hbnVhbF90eXBpbmdzL3Byb2plY3QvamFzbWluZS5kLnRzXCIgLz5cblxuZGVzY3JpYmUoXCJQbGF5ZXJcIiwgZnVuY3Rpb24oKSB7XG4gIHZhciBQbGF5ZXIgPSByZXF1aXJlKCcuL1BsYXllcicpO1xuICB2YXIgU29uZyA9IHJlcXVpcmUoJy4vU29uZycpO1xuICB2YXIgcGxheWVyO1xuICB2YXIgc29uZztcblxuICBiZWZvcmVFYWNoKGZ1bmN0aW9uKCkge1xuICAgIHBsYXllciA9IG5ldyBQbGF5ZXIoKTtcbiAgICBzb25nID0gbmV3IFNvbmcoKTtcblxuICB9KTtcblxuICBpdChcInNob3VsZCBiZSBhYmxlIHRvIHBsYXkgYSBTb25nXCIsIGZ1bmN0aW9uKCkge1xuICAgIHBsYXllci5wbGF5KHNvbmcpO1xuICAgIGV4cGVjdChwbGF5ZXIuY3VycmVudGx5UGxheWluZ1NvbmcpLnRvRXF1YWwoc29uZyk7XG5cbiAgICAvL2RlbW9uc3RyYXRlcyB1c2Ugb2YgY3VzdG9tIG1hdGNoZXJcbiAgICBleHBlY3QocGxheWVyKS50b0JlUGxheWluZyhzb25nKTtcbiAgfSk7XG5cbiAgZGVzY3JpYmUoXCJ3aGVuIHNvbmcgaGFzIGJlZW4gcGF1c2VkXCIsIGZ1bmN0aW9uKCkge1xuICAgIGJlZm9yZUVhY2goZnVuY3Rpb24oKSB7XG4gICAgICBwbGF5ZXIucGxheShzb25nKTtcbiAgICAgIHBsYXllci5wYXVzZSgpO1xuICAgIH0pO1xuXG4gICAgaXQoXCJzaG91bGQgaW5kaWNhdGUgdGhhdCB0aGUgc29uZyBpcyBjdXJyZW50bHkgcGF1c2VkXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgZXhwZWN0KHBsYXllci5pc1BsYXlpbmcpLnRvQmVGYWxzeSgpO1xuXG4gICAgICAvLyBkZW1vbnN0cmF0ZXMgdXNlIG9mICdub3QnIHdpdGggYSBjdXN0b20gbWF0Y2hlclxuICAgICAgZXhwZWN0KHBsYXllcikubm90LnRvQmVQbGF5aW5nKHNvbmcpO1xuICAgIH0pO1xuXG4gICAgaXQoXCJzaG91bGQgYmUgcG9zc2libGUgdG8gcmVzdW1lXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgcGxheWVyLnJlc3VtZSgpO1xuICAgICAgZXhwZWN0KHBsYXllci5pc1BsYXlpbmcpLnRvQmVUcnV0aHkoKTtcbiAgICAgIGV4cGVjdChwbGF5ZXIuY3VycmVudGx5UGxheWluZ1NvbmcpLnRvRXF1YWwoc29uZyk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIC8vIGRlbW9uc3RyYXRlcyB1c2Ugb2Ygc3BpZXMgdG8gaW50ZXJjZXB0IGFuZCB0ZXN0IG1ldGhvZCBjYWxsc1xuICBpdChcInRlbGxzIHRoZSBjdXJyZW50IHNvbmcgaWYgdGhlIHVzZXIgaGFzIG1hZGUgaXQgYSBmYXZvcml0ZVwiLCBmdW5jdGlvbigpIHtcbiAgICBzcHlPbihzb25nLCAncGVyc2lzdEZhdm9yaXRlU3RhdHVzJyk7XG5cbiAgICBwbGF5ZXIucGxheShzb25nKTtcbiAgICBwbGF5ZXIubWFrZUZhdm9yaXRlKCk7XG5cbiAgICBleHBlY3Qoc29uZy5wZXJzaXN0RmF2b3JpdGVTdGF0dXMpLnRvSGF2ZUJlZW5DYWxsZWRXaXRoKHRydWUpO1xuICB9KTtcblxuICAvL2RlbW9uc3RyYXRlcyB1c2Ugb2YgZXhwZWN0ZWQgZXhjZXB0aW9uc1xuICBkZXNjcmliZShcIiNyZXN1bWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgaXQoXCJzaG91bGQgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIHNvbmcgaXMgYWxyZWFkeSBwbGF5aW5nXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgcGxheWVyLnBsYXkoc29uZyk7XG5cbiAgICAgIGV4cGVjdChmdW5jdGlvbigpIHtcbiAgICAgICAgcGxheWVyLnJlc3VtZSgpO1xuICAgICAgfSkudG9UaHJvd0Vycm9yKFwic29uZyBpcyBhbHJlYWR5IHBsYXlpbmdcIik7XG4gICAgfSk7XG4gIH0pO1xufSk7XG4iXX0=
