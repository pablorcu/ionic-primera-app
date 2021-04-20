import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  ngOnInit(): void {
    let numero = 10;

    numero = 20;

    numero = numero + 10;

    console.log(numero);
  }

}
