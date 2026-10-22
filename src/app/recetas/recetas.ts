import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-recetas',
  styleUrl: './recetas.css',
  templateUrl: './recetas.html',
})
export class Recetas {
  recetaSeleccionada: any = {
    id:1, nombre: 'Brownie', descripcion: 'Descripcion de la receta',Image: 'brownie.jpg',
  };

  onRecetaSeleccionada(receta: any): void {
    this.recetaSeleccionada = receta;
  }
}
