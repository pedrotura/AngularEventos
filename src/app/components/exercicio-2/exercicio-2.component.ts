import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio-2',
  standalone: true,
  imports: [],
  templateUrl: './exercicio-2.component.html',
  styleUrl: './exercicio-2.component.css'
})
export class Exercicio2Component {

  isChanged: boolean =  false;

  imagem = {
    url: 'assets/image1.png',
    alt: 'Logotipo do Angular 17'
  }

  alterarImagem(): void {
    
    if (this.isChanged) {
      this.imagem = {
        url: 'assets/image2.png',
        alt: 'Logotipo do Angular 16'
      }
    } else {
      this.imagem = {
        url: 'assets/image1.png',
        alt: 'Logotipo do Angular 17'
      }
    }
    this.isChanged = !this.isChanged;

  }
}
