import { Client } from './client/client.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-binding',
  templateUrl: './input-binding.component.html',
  styleUrls: ['./input-binding.component.scss'],
})
export class InputBindingComponent implements OnInit {

  // tslint:disable-next-line: no-input-rename
  @Input('name') name: string;
  // tslint:disable-next-line: no-input-rename
  @Input('lastName') lastName: string;
  // tslint:disable-next-line: no-input-rename
  @Input('age') age: number;


  clients: Client[];

  constructor() {
    this.clients = [
      { id: 1, name: 'Bob', age: 30 },
      { id: 2, name: 'João', age: 54 },
      { id: 3, name: 'Maria', age: 80 },
      { id: 4, name: 'Tiago', age: 34 },
    ];
   }
  ngOnInit() {}

}
