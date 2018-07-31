import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interfaces';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;
  equipo: any[] = [];

  constructor(private http: HttpClient ) {

    // console.log('Sevicio de InfoPagina cargado');

    // Leer el archivo JSON assets/data/data-pagina.json
    // this.http.get('assets/data/data-pagina.json')
    //     .subscribe( (resp: InfoPagina) => {

    //       this.cargada = true;
    //       this.info = resp;
    //       console.log( resp['twitter'] );
    //       console.log( resp );

    //     });
    this.cargarInfo();
    this.cargarEquipo();

   }

   private cargarInfo() {
    this.http.get('assets/data/data-pagina.json')
    .subscribe( (resp: InfoPagina) => {

      //this.cargada = true;
      this.info = resp;
      //console.log( resp['twitter'] );
      //console.log( resp );

    });

   }

   private cargarEquipo() {
    this.http.get('https://cgpicaporte-portafolio-a-f1366.firebaseio.com/equipo.json')
    .subscribe( (resp: any[] ) => {
      this.equipo = resp;
      this.cargada = true;
      //console.log( resp['0'].nombre );
      //console.log( resp['0']['twitter'] );
      //console.log( resp );
    });
   }
}
