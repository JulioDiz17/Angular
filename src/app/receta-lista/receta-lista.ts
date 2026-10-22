import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-receta-lista',
  styleUrl: './receta-lista.css',
  templateUrl: './receta-lista.html',
})

export class RecetaLista {
  recetas = [
    { id: 1, nombre: 'Brownie', descripcion: 'Brownie de chocolate', image:'brownie.jpg' },
    { id: 2, nombre: 'Crema de calabacin', descripcion: 'Crema de calabacin con queso', image:'crema-calabacin.jpg' },
    { id: 3,nombre: "Crema de Yogur con bizcocho",descripcion: "Descripción de la receta",image: "crema-de-yogur-con-bizcocho.jpg",},
    { id: 4,nombre: "Espaguetis con berenjenas",descripcion: "Descripción de la receta",image: "espaguetis-con-salsa-de-berenjenas-y-tomates.jpg",}
  ]; 

@Output() recetaSeleccionada = new EventEmitter<any>();

seleccionarReceta(receta: any): void {
  this.recetaSeleccionada.emit(receta);
}
}
