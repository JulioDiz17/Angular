import { Component, Input, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-receta-detalle',
  styleUrl: './receta-detalle.css',
  templateUrl: './receta-detalle.html',
})
export class RecetaDetalle {
  recetas = [
    { id: 1, nombre: 'Brownie', descripcion: 'Brownie de chocolate', image:'brownie.jpg' },
    { id: 2, nombre: 'Crema de calabacin', descripcion: 'Crema de calabacin con queso', image:'crema-calabacin.jpg' },
    { id: 3,nombre: "Crema de Yogur con bizcocho",descripcion: "Descripción de la receta",image: "crema-de-yogur-con-bizcocho.jpg",},
    { id: 4,nombre: "Espaguetis con berenjenas",descripcion: "Descripción de la receta",image: "espaguetis-con-salsa-de-berenjenas-y-tomates.jpg",}
  ]; 

  @Input() receta: any;
}
