import { Component, OnInit } from '@angular/core';
import { from, interval, of } from 'rxjs';

@Component({
  selector: 'app-observables',
  standalone: true,
  imports: [],
  templateUrl: './observables.component.html',
  styleUrl: './observables.component.css'
})
export class ObservablesComponent implements OnInit {


  ngOnInit(): void {
    // const observable = interval(5000);

    // without types
    // observable.subscribe({
    //   next: value => console.log(`Observer 1: ${value}`),
    //   error: error => console.error('Something is wrong...'),
    //   complete: () => console.log('Steam Completed...')
    // });

    // observable.subscribe({
    //   next: (value: number): void => console.log(`Observer 1: ${value}`),
    //   error: (error:Error): void => console.error('Something is wrong...'),
    //   complete: (): void => console.log('Steam Completed...')
    // });

    // observable.subscribe({
    //   next: (value: number): void => console.log(`Observer 2: ${value}`),
    // });

    // single values
    of(1, 2, 'Hello', { name: 'nik' }).subscribe({
      next: (value: any): void => console.log(`Observer... ${value}`),
    });

    // from data structures
    from(['x', 'r', 'l', 'b', 'a']).subscribe({
      next: (value: any): void => console.log(`Observer... ${value}`),
    });

  }


}
