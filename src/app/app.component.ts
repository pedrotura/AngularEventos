import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Exercicio1Component } from './components/exercicio-1/exercicio-1.component';
import { Exercicio2Component } from './components/exercicio-2/exercicio-2.component';
import { Exercicio3Component } from './components/exercicio-3/exercicio-3.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Exercicio1Component, Exercicio2Component, Exercicio3Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lista-exercicios';
}
