import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDescripcion } from '../../interfaces/producto-descripcion.interfaces';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html'
})
export class ItemComponent implements OnInit {

  producto: ProductoDescripcion;
  id: string;

  constructor(private route: ActivatedRoute,
              public productoService: ProductosService ) { }

  ngOnInit() {

    this.route.params.subscribe( parametros => {
        //console.log(parametros.id);
        //console.log(parametros['id']);
      this.productoService.getProducto(parametros['id'])
      .subscribe( (producto: ProductoDescripcion ) => {

          this.producto = producto;
          this.id = parametros['id'];
          // console.log(producto);
          /*
          console.log(producto.categoria);
          console.log(producto.desc1);
          console.log(producto.desc2);
          console.log(producto.producto);
          console.log(producto.resumen);
          console.log(producto.subtitulo1);
          console.log(producto.subtitulo2);*/
        });

    });
  }

}
