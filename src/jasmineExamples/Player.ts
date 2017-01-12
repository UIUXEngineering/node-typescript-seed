class Player {

  currentlyPlayingSong: any;
  isPlaying: boolean;

  play(song) {
    this.currentlyPlayingSong = song;
    this.isPlaying = true;
  }

  pause() {
    this.isPlaying = false;
  }

  resume() {
    if (this.isPlaying) {
      throw new Error('song is already playing');
    }

    this.isPlaying = true;
  }

  makeFavorite() {
    this.currentlyPlayingSong.persistFavoriteStatus(true);
  }
}

export { Player };
