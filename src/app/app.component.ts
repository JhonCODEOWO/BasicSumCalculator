import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ejercicio1-calculadora';
  n1: number = 0;
  n2: number = 0;

  resultado: number = 0;

  asignarResultado(resultadoRecibido:number){
    this.resultado=resultadoRecibido;
  }
}
