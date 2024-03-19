import { Injectable } from '@angular/core';
import { from, of } from 'rxjs';
import { filter, map, reduce } from 'rxjs/operators';
import { Song } from '../models/song';


@Injectable({
  providedIn: 'root'
})
export class SongsService {

  songs = [
    { title: "1904", artist: "The Tallest Man on Earth", rating: 2, isOnPlayList: true },
    { title: "Lonesome Town", artist: "Ricky Nelson", rating: 9, isOnPlayList: false },
    { title: "Love in the Library", artist: "Jimmy Buffett", rating: 7, isOnPlayList: true },
    { title: "Nothing Else Matters", artist: "Metallica", rating: 9, isOnPlayList: true },
    { title: "Sugar Mountain", artist: "Neil Young", rating: 3, isOnPlayList: false },
    { title: "The Needle and the Damage Done", artist: "Neil Young", rating: 8, isOnPlayList: true },
    { title: "Lean On Me", artist: "Bill Withers", rating: 3, isOnPlayList: false },
    { title: "Patience", artist: "Guns N Roses", rating: 6, isOnPlayList: true },
    { title: "You Belong With Me", artist: "Taylor Swift", rating: 9, isOnPlayList: false }
  ];


  constructor() { }

  getSongs() {
    // return this.songs;
    // return of(this.songs);
    return from(this.songs);
  }

  // Exercises...
  // 1.
  // Display songs with a rating of 5 or higher if they are in the
  // playlist
  getRatedInPlayList() {
    return from(this.songs).pipe(
      filter((song: Song): boolean => song.rating >= 5),
      filter((song: Song): boolean => song.isOnPlayList),
      map((song: Song): string => song.title)
    );
  }

  // 2.
  // Exercises...
  // Display how many songs we have with a rating of 5 or higher if they are not in the
  // playlist
  getHowManyRatedNotInList() {
    return from(this.songs).pipe(
      filter((song: Song): boolean => song.rating >= 5),
      filter((song: Song): boolean => song.isOnPlayList == false),   // just use !
      reduce((acc: number, currentSong) => (acc + 1), 0)
    );
  }

}
