(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.typescript = global.typescript || {}, global.typescript.seed = global.typescript.seed || {})));
}(this, (function (exports) { 'use strict';

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

function createPlayer() {
    return new Player();
}

var Song = (function () {
    function Song() {
    }
    Song.prototype.persistFavoriteStatus = function () {
        throw new Error('not yet implemented');
    };
    return Song;
}());

function createSong() {
    return new Song();
}

exports.createPlayer = createPlayer;
exports.createSong = createSong;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=mocks.js.map
