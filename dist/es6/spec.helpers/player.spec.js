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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwZWMuaGVscGVycy9wbGF5ZXIuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxVQUFVLENBQUM7SUFDVCxPQUFPLENBQUMsV0FBVyxDQUFDO1FBQ2xCLFdBQVcsRUFBRTtZQUNYLE1BQU0sQ0FBQztnQkFDTCxPQUFPLEVBQUUsVUFBVSxNQUFNLEVBQUUsUUFBUTtvQkFDakMsSUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDO29CQUVwQixNQUFNLENBQUM7d0JBQ0wsSUFBSSxFQUFFLE1BQU0sQ0FBQyxvQkFBb0IsS0FBSyxRQUFRLElBQUksTUFBTSxDQUFDLFNBQVM7cUJBQ25FLENBQUE7Z0JBQ0gsQ0FBQzthQUNGLENBQUM7UUFDSixDQUFDO0tBQ0YsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoic3BlYy5oZWxwZXJzL3BsYXllci5zcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3Rvb2xzL21hbnVhbF90eXBpbmdzL3Byb2plY3QvamFzbWluZS5kLnRzXCIgLz5cblxuYmVmb3JlRWFjaChmdW5jdGlvbiAoKSB7XG4gIGphc21pbmUuYWRkTWF0Y2hlcnMoe1xuICAgIHRvQmVQbGF5aW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjb21wYXJlOiBmdW5jdGlvbiAoYWN0dWFsLCBleHBlY3RlZCkge1xuICAgICAgICAgIHZhciBwbGF5ZXIgPSBhY3R1YWw7XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcGFzczogcGxheWVyLmN1cnJlbnRseVBsYXlpbmdTb25nID09PSBleHBlY3RlZCAmJiBwbGF5ZXIuaXNQbGF5aW5nXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfSk7XG59KTtcbiJdfQ==
