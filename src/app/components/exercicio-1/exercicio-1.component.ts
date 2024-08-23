import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio-1',
  standalone: true,
  imports: [],
  templateUrl: './exercicio-1.component.html',
  styleUrl: './exercicio-1.component.css'
})
export class Exercicio1Component {
  cont: number = 0;

  aumentarCont(): void {
    this.cont++;
  }

}
