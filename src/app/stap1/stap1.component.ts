import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stap1',
  templateUrl: './stap1.component.html',
  styleUrls: ['./stap1.component.scss']
})
export class Stap1Component implements OnInit {

  public waarde: Number = (1 / 6 * 100)
  public algemeneGegevensFormulier: FormGroup;
  public successMessage: string = null;
  public errorMessage: string = null;

  constructor(public router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.algemeneGegevensFormulier = this.fb.group({
      achternaam: ['', [Validators.required]],
      voornaam: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      straatnaam: ['', [Validators.required]],
      huisnummer: ['', [Validators.required]],
      bus: [''],
      gemeente: ['', [Validators.required]],
      postcode: ['', [Validators.required]],
      geboorteDatum: ['', [Validators.required]],
      geboortePlaats: ['', [Validators.required]],
      nationaliteit: ['', [Validators.required]],
      paspoortNummer: ['', [Validators.required]],
      telefoonNummer: ['', [Validators.required]],
      telefoonNummerNood: ['', [Validators.required]],
      voornaamNood: ['', [Validators.required]],
      achternaamNood: ['', [Validators.required]],
      emailNood: ['', [Validators.required, Validators.email]],
      relatieNood: ['', [Validators.required]],
      allergie: [''],
      medischeAandoening: [''],
      opleiding: ['', [Validators.required]],
      ervaringVrijwillger: ['', [Validators.required]],
      spaansNiveau: ['', [Validators.required]],
      takenVrijwilliger: ['', [Validators.required]],
      verwachtingenVrijwilliger: ['', [Validators.required]],
      voorstellen: ['', [Validators.required]],
    })
  }

}
