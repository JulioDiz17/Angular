import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-receta-lista',
  templateUrl: './receta-lista.html'
})
export class RecetaListaComponent {
[x: string]: any;
  @Input() listaRecetas: any[] = [];
  @Output() recetaSeleccionadaEmiter = new EventEmitter<any>();

  seleccionarReceta(receta: any) {
    this.recetaSeleccionadaEmiter.emit(receta);
  }
}
