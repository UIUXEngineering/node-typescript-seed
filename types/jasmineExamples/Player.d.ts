declare class Player {
    currentlyPlayingSong: any;
    isPlaying: boolean;
    play(song: any): void;
    pause(): void;
    resume(): void;
    makeFavorite(): void;
}
export { Player };
