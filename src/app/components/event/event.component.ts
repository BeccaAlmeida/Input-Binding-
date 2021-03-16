import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
})
export class EventComponent implements OnInit {

  // tslint:disable-next-line: no-inferrable-types
  value: number = 0;
  title = 'My title';

  constructor() { }

  ngOnInit() {}

  incBy(n: number) {
    this.value += n;
  }

}
