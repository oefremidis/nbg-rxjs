import { Component, OnInit } from '@angular/core';
import { from, interval, of } from 'rxjs';
import { filter, map, reduce, scan, shareReplay, take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-observables',
  standalone: true,
  imports: [],
  templateUrl: './observables.component.html',
  styleUrl: './observables.component.css'
})
export class ObservablesComponent implements OnInit {


  ngOnInit(): void {
    const observable = interval(1000).pipe(
      take(5),
      tap((num: number):void => console.log(`Value: ${num}`)),
      map((num: number):number => 2 * num),
      // filter((value:number):boolean => value >= 5),
      // reduce((acc:number, num:number):number => acc + num),
      // scan((acc:number, num:number):number => acc + num)
    );


    observable.subscribe({
      next: (value: number): void => console.log(`Observer 1: ${value}`),
      error: (error:Error): void => console.error('Something is wrong...'),
      complete: (): void => console.log('Stream Completed...')
    });

    observable.subscribe({
      next: (value: number): void => console.log(`Observer 2: ${value}`),
    });

    // single values
    // of(1, 2, 'Hello', { name: 'nik' }).subscribe({
    //   next: (value: any): void => console.log(`Observer... ${value}`),
    // });

    // from data structures
    // from(['x', 'r', 'l', 'b', 'a']).subscribe({
    //   next: (value: any): void => console.log(`Observer... ${value}`),
    // });

  }


}
