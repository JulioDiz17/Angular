import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Recetas } from './recetas/recetas';

@Component({
  imports: [RouterOutlet, Header, Recetas],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('appRecetas-Julio');
}
