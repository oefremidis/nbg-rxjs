import { Component, OnInit, inject } from '@angular/core';
import { SongsService } from '../services/songs.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-songs',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './songs.component.html',
  styleUrl: './songs.component.css'
})
export class SongsComponent implements OnInit{

  service = inject(SongsService);

  // Step 3 - Show on template
  songs: any;

  ngOnInit(): void {
    this.service.getData().subscribe({
      next: response => this.songs = response,
      error: error => console.error(error),
      // complete: () => console.log('Done...')
    });

    this.service.getRatedInPlayList().subscribe({
      next: songName => console.log(songName),
    });

    this.service.getHowManyRatedNotInList().subscribe({
      next: amount => console.log(amount),
    });

  }


  // Step 1 - getData - no observable

  // Step 2
  // songs = this.service.getData();

  // ngOnInit(): void {
  //   this.songs.subscribe({
  //     next: song => console.log(song),
  //     error: error => console.error(error),
  //     complete: () => console.log('Done...')
  //   });
  // }


}
