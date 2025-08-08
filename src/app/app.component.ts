import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from './sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Sidebar],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'personal-website';
}
