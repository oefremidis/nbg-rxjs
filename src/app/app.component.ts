import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ObservablesComponent } from './observables/observables.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ObservablesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'nbg-rxjs';
}
