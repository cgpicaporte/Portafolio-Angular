import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {

  private anio: number = new Date().getFullYear();

  constructor() { }

  ngOnInit() {
  }

}
