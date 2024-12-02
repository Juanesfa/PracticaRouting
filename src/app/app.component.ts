import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router'; //importamos RouterLink y RouterOutlet

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portfolio';
}
