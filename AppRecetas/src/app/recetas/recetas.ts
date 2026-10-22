import { Component } from '@angular/core';
import { RecetaDetalleComponent } from '../receta-detalle/receta-detalle';
import { RecetaListaComponent } from '../receta-lista/receta-lista';

@Component({
  imports: [RecetaListaComponent, RecetaDetalleComponent],
  selector: 'app-recetas',
  styleUrl: './recetas.css',
  templateUrl: './recetas.html',
})
export class Recetas {
  
  recetas = [
    { id: 1, nombre: "Brownie", descripcion: "Descripción de la receta", image: "brownie.jpg" },
    { id: 2, nombre: "Crema de calabacín", descripcion: "Descripción de la receta", image: "crema-de-calabacin.jpg" },
    { id: 3, nombre: "Crema de Yogur con bizcocho", descripcion: "Descripción de la receta", image: "crema-de-yogur-con-bizcocho.jpg" },
    { id: 4, nombre: "Espaguetis con berenjenas", descripcion: "Descripción de la receta", image: "espaguetis-con-salsa-de-berenjenas-y-tomates.jpg" }
  ];

 
  recetaSeleccionada: any = this.recetas[0]; 

  
  onRecetaElegida(receta: any): void {
    this.recetaSeleccionada = receta;
  }
}
