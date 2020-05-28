import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stap6',
  templateUrl: './stap6.component.html',
  styleUrls: ['./stap6.component.scss']
})
export class Stap6Component implements OnInit {

  public waarde: Number = (6 / 6 * 100)
  constructor() { }

  ngOnInit() {
  }

}
