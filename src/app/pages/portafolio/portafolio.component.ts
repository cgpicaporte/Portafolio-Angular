import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html'
})
export class PortafolioComponent implements OnInit {

  constructor( public productosService: ProductosService ) { }

  ngOnInit() {
  }

}
