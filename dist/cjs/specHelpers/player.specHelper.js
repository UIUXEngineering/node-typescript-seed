beforeEach(function () {
    jasmine.addMatchers({
        toBePlaying: function () {
            return {
                compare: function (actual, expected) {
                    var player = actual;
                    return {
                        pass: player.currentlyPlayingSong === expected && player.isPlaying
                    };
                }
            };
        }
    });
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXllci5zcGVjSGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLFVBQVUsQ0FBQztJQUNULE9BQU8sQ0FBQyxXQUFXLENBQUM7UUFDbEIsV0FBVyxFQUFFO1lBQ1gsTUFBTSxDQUFDO2dCQUNMLE9BQU8sRUFBRSxVQUFVLE1BQU0sRUFBRSxRQUFRO29CQUNqQyxJQUFJLE1BQU0sR0FBRyxNQUFNLENBQUM7b0JBRXBCLE1BQU0sQ0FBQzt3QkFDTCxJQUFJLEVBQUUsTUFBTSxDQUFDLG9CQUFvQixLQUFLLFFBQVEsSUFBSSxNQUFNLENBQUMsU0FBUztxQkFDbkUsQ0FBQTtnQkFDSCxDQUFDO2FBQ0YsQ0FBQztRQUNKLENBQUM7S0FDRixDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJwbGF5ZXIuc3BlY0hlbHBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi90b29scy9tYW51YWxfdHlwaW5ncy9wcm9qZWN0L2phc21pbmUuZC50c1wiIC8+XG5cbmJlZm9yZUVhY2goZnVuY3Rpb24gKCkge1xuICBqYXNtaW5lLmFkZE1hdGNoZXJzKHtcbiAgICB0b0JlUGxheWluZzogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY29tcGFyZTogZnVuY3Rpb24gKGFjdHVhbCwgZXhwZWN0ZWQpIHtcbiAgICAgICAgICB2YXIgcGxheWVyID0gYWN0dWFsO1xuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBhc3M6IHBsYXllci5jdXJyZW50bHlQbGF5aW5nU29uZyA9PT0gZXhwZWN0ZWQgJiYgcGxheWVyLmlzUGxheWluZ1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH0pO1xufSk7XG4iXX0=
