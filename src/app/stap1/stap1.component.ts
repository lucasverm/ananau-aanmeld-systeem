import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Applicatie } from '../modals/applicatie';
import { AppModule } from '../app.module';
import { ApplicatieService } from '../services/applicatie.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-stap1',
  templateUrl: './stap1.component.html',
  styleUrls: ['./stap1.component.scss']
})
export class Stap1Component implements OnInit {

  public applicatie: Applicatie;
  public waarde: Number = (1 / 6 * 100)
  public algemeneGegevensFormulier: FormGroup;
  public successMessage: string = null;
  public errorMessage: string = null;

  constructor(public router: Router, private fb: FormBuilder, private applicatieService: ApplicatieService) { }

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
      telefoonnummerNood: ['', [Validators.required]],
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

  applicatieToevoegen() {
    if (this.applicatie == null) {
      this.applicatie = new Applicatie();
    }

    this.applicatie.achternaam = this.algemeneGegevensFormulier.value.achternaam;
    this.applicatie.voornaam = this.algemeneGegevensFormulier.value.voornaam;
    this.applicatie.email = this.algemeneGegevensFormulier.value.email;
    this.applicatie.straatnaam = this.algemeneGegevensFormulier.value.straatnaam;
    this.applicatie.huisnummer = this.algemeneGegevensFormulier.value.huisnummer;
    this.applicatie.bus = this.algemeneGegevensFormulier.value.bus;
    this.applicatie.gemeente = this.algemeneGegevensFormulier.value.gemeente;
    this.applicatie.postcode = this.algemeneGegevensFormulier.value.postcode;
    this.applicatie.geboorteDatum = new Date(this.algemeneGegevensFormulier.value.geboorteDatum);
    this.applicatie.geboortePlaats = this.algemeneGegevensFormulier.value.geboortePlaats;
    this.applicatie.nationaliteit = this.algemeneGegevensFormulier.value.nationaliteit;
    this.applicatie.paspoortNummer = this.algemeneGegevensFormulier.value.paspoortNummer;
    this.applicatie.telefoonNummer = this.algemeneGegevensFormulier.value.telefoonNummer;
    this.applicatie.telefoonnummerNood = this.algemeneGegevensFormulier.value.telefoonnummerNood;
    this.applicatie.voornaamNood = this.algemeneGegevensFormulier.value.voornaamNood;
    this.applicatie.achternaamNood = this.algemeneGegevensFormulier.value.achternaamNood;
    this.applicatie.emailNood = this.algemeneGegevensFormulier.value.emailNood;
    this.applicatie.relatieNood = this.algemeneGegevensFormulier.value.relatieNood;
    this.applicatie.allergie = this.algemeneGegevensFormulier.value.allergie;
    this.applicatie.medischeAandoening = this.algemeneGegevensFormulier.value.medischeAandoening;
    this.applicatie.opleiding = this.algemeneGegevensFormulier.value.opleiding;
    this.applicatie.ervaringVrijwillger = this.algemeneGegevensFormulier.value.ervaringVrijwillger;
    this.applicatie.spaansNiveau = this.algemeneGegevensFormulier.value.spaansNiveau;
    this.applicatie.takenVrijwilliger = this.algemeneGegevensFormulier.value.takenVrijwilliger;
    this.applicatie.verwachtingenVrijwilliger = this.algemeneGegevensFormulier.value.verwachtingenVrijwilliger;
    this.applicatie.voorstellen = this.algemeneGegevensFormulier.value.voorstellen;
    this.applicatieService.postApplicatie$(this.applicatie).subscribe(
      val => {
        if (val) {
          this.router.navigate([`../stap-2/${val.id}`]);
        }
      },
      (error: HttpErrorResponse) => {
        this.errorMessage = error.error;
      }
    );
  }

}
