import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-receta-detalle',
  templateUrl: './receta-detalle.html'
})
export class RecetaDetalleComponent {
  @Input() receta: any;
}
