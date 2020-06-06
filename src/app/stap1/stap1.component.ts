import { Component, OnInit, ApplicationModule } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
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

  constructor(public router: Router, private route: ActivatedRoute, private fb: FormBuilder, private applicatieService: ApplicatieService) {
    this.route.data.subscribe(data => {
      this.applicatie = data['applicatie'];
      if (this.applicatie == null) {
        this.applicatie = new Applicatie();
      }
    });
  }

  ngOnInit() {
    this.algemeneGegevensFormulier = this.fb.group({
      achternaam: [this.applicatie.achternaam, [Validators.required]],
      voornaam: [this.applicatie.voornaam, [Validators.required]],
      email: [this.applicatie.email, [Validators.required, Validators.email]],
      straatnaam: [this.applicatie.straatnaam, [Validators.required]],
      huisnummer: [this.applicatie.huisnummer, [Validators.required]],
      bus: [this.applicatie.bus],
      gemeente: [this.applicatie.gemeente, [Validators.required]],
      postcode: [this.applicatie.postcode, [Validators.required]],
      geboorteDatum: [this.getDateForInput(this.applicatie.geboorteDatum), [Validators.required]],
      geboortePlaats: [this.applicatie.geboortePlaats, [Validators.required]],
      nationaliteit: [this.applicatie.nationaliteit, [Validators.required]],
      paspoortNummer: [this.applicatie.paspoortNummer, [Validators.required]],
      telefoonNummer: [this.applicatie.telefoonNummer, [Validators.required]],
      telefoonnummerNood: [this.applicatie.telefoonnummerNood, [Validators.required]],
      voornaamNood: [this.applicatie.voornaamNood, [Validators.required]],
      achternaamNood: [this.applicatie.achternaamNood, [Validators.required]],
      emailNood: [this.applicatie.emailNood, [Validators.required, Validators.email]],
      relatieNood: [this.applicatie.relatieNood, [Validators.required]],
      allergie: [this.applicatie.allergie],
      medischeAandoening: [this.applicatie.medischeAandoening],
      opleiding: [this.applicatie.opleiding, [Validators.required]],
      ervaringVrijwillger: [this.applicatie.ervaringVrijwillger, [Validators.required]],
      spaansNiveau: [this.applicatie.spaansNiveau, [Validators.required]],
      takenVrijwilliger: [this.applicatie.takenVrijwilliger, [Validators.required]],
      verwachtingenVrijwilliger: [this.applicatie.verwachtingenVrijwilliger, [Validators.required]],
      voorstellen: [this.applicatie.voorstellen, [Validators.required]],
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
    if (this.applicatie.id == null) {
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
    } else {
      this.applicatieService.putApplicatie$(this.applicatie).subscribe(
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

  getDateForInput(date: Date): string {
    if (date != null) {
      var uitvoer: string = "";
      uitvoer += date.getFullYear() + "-";
      if (date.getMonth().toString().length == 1) {
        uitvoer += "0" + (date.getMonth() + 1) + "-";
      } else {
        uitvoer += (date.getMonth() + 1) + "-";
      }
      if (date.getDate().toString().length == 1) {
        uitvoer += "0" + date.getDate();
      } else {
        uitvoer += date.getDate();
      }
      //uitvoer += 'T' + date.toTimeString().slice(0, 5);
      return uitvoer;
    }
  }

}
