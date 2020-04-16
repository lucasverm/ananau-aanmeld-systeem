import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welkom',
  templateUrl: './welkom.component.html',
  styleUrls: ['./welkom.component.scss']
})
export class WelkomComponent implements OnInit {

  public waarde: Number = (0 / 6 * 100)
  constructor() { }

  ngOnInit() {
  }

}
