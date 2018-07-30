import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {

  public anio: number = new Date().getFullYear();

  constructor( public _servicio: InfoPaginaService) { }

  ngOnInit() {
  }

}
