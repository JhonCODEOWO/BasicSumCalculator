import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent {
  //Inicialización de propiedades
  n1: number = 0;
  n2: number = 0;
  suma: number = 0;
  success: boolean = true;

  @Output() sumaRealizada = new EventEmitter<number>(); //Evento que se dispara recibiendo un elemento de tipo number

  sumar() {
    //Si n1 y n2 es diferente de nulo...
    if (this.n1 != null && this.n2 != null) {
      this.suma = this.n1 + this.n2;//Realizar suma

      this.sumaRealizada.emit(this.suma); //Envíar datos al componente padre
    }else{
      this.success = false;
    }
  }
}
