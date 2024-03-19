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


  // Step 1 - getData - no observable
  // Step 2 - change it to observable into service
  // songs = this.service.getData();


  ngOnInit(): void {
    // Step 2
    // this.songs.subscribe({

    // Step 3
    this.service.getSongs().subscribe({
      next: song => console.log(song),
      error: error => console.error(error),
      complete: () => console.log('Done...')
    });

    this.service.getRatedInPlayList().subscribe({
      next: songName => console.log(songName),
    });

    this.service.getHowManyRatedNotInList().subscribe({
      next: amount => console.log(amount),
    });

  }





}
