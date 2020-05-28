import { Component, OnInit } from '@angular/core';
import { Applicatie } from '../modals/applicatie';
import { FormGroup, FormBuilder, Validators, ValidatorFn, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ApplicatieService } from '../services/applicatie.service';
import { HttpErrorResponse } from '@angular/common/http';
import { BestandService } from '../services/bestand.service';
import { forkJoin } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { BestandenResolver } from '../resolver/bestanden.resolver';

@Component({
  selector: 'app-stap3',
  templateUrl: './stap3.component.html',
  styleUrls: ['./stap3.component.scss']
})
export class Stap3Component implements OnInit {
  public applicatie: Applicatie;
  public waarde: Number = (3 / 6 * 100)
  public stap3Formulier: FormGroup;
  public successMessage: string = null;
  public errorMessage: string = null;
  public bestanden: Blob[];

  constructor(public router: Router, private route: ActivatedRoute, private fb: FormBuilder, private bestandService: BestandService, private applicatieService: ApplicatieService) {
    this.route.data.subscribe(data => {

      this.applicatie = data['applicatie'];
      /*data['bestanden'].forEach((value: Blob, i) => {
        var name;
        if (i == 0) {
          name = this.applicatie.reispaspoortNaam;
        } else if (i == 1) {
          name = this.applicatie.attestNaam;
        } else if (i == 2) {
          name = this.applicatie.diplomaNaam;
        }
        this.bestanden.push(new File([this.bestanden[i]], name));
      });
      console.log(this.bestanden);*/
      this.bestanden = data['bestanden']
    });
  }

  ngOnInit() {
    this.stap3Formulier = this.fb.group({
      reispaspoort: [
        '',
        //[valideerBestandType(true)]
      ],
      attest: [
        '',
        // [valideerBestandType(true)]
      ],
      diploma: [
        '',
        //  [valideerBestandType(true)]
      ],
    });
  }

  /*stap3() {
    let reispasportExtentie = this.stap3Formulier.controls.reispaspoort.value.name.split('.');
    let attestExtentie = this.stap3Formulier.controls.attest.value.name.split('.');
    let diplomaExtentie = this.stap3Formulier.controls.diploma.value.name.split('.');
    var bestanden = [];
    bestanden.push({
      applicatieId: this.applicatie.id,
      folder: `${this.applicatie.achternaam}${this.applicatie.voornaam}`,
      bestandNaam: `reispaspoort.${reispasportExtentie[reispasportExtentie.length - 1]}`,
      bestand: this.bestandNaarFormData(this.stap3Formulier.controls.reispaspoort.value)
    });
    bestanden.push({
      applicatieId: this.applicatie.id,
      folder: `${this.applicatie.achternaam}${this.applicatie.voornaam}`,
      bestandNaam: `attest.${reispasportExtentie[reispasportExtentie.length - 1]}`,
      bestand: this.bestandNaarFormData(this.stap3Formulier.controls.attest.value)
    });
    bestanden.push({
      applicatieId: this.applicatie.id,
      folder: `${this.applicatie.achternaam}${this.applicatie.voornaam}`,
      bestandNaam: `diploma.${reispasportExtentie[reispasportExtentie.length - 1]}`,
      bestand: this.bestandNaarFormData(this.stap3Formulier.controls.diploma.value)
    });
    console.log(bestanden);
    
    this.bestandService.postFile$(bestanden).subscribe(
      val => {
        if (val) {
          console.log("afb: " + val);
          //this.router.navigate([`../stap-2`]);
        }
      },
      (error: HttpErrorResponse) => {
        console.log(error);
        this.errorMessage = error.error;
      }
    );
  }*/

  stap3() {
    this.errorMessage = null;
    let requests = [];
    if (this.stap3Formulier.controls.reispaspoort.value.name != null) {
      let reispasportExtentie = this.stap3Formulier.controls.reispaspoort.value.name.split('.')[this.stap3Formulier.controls.reispaspoort.value.name.split('.').length - 1];
      requests.push(this.bestandService.postFile$(`${this.applicatie.email}`, `reispaspoort${this.applicatie.achternaam}${this.applicatie.voornaam}.${reispasportExtentie}`, this.stap3Formulier.controls.reispaspoort.value));
    }
    if (this.stap3Formulier.controls.attest.value.name != null) {
      let attestExtentie = this.stap3Formulier.controls.attest.value.name.split('.')[this.stap3Formulier.controls.attest.value.name.split('.').length - 1];
      requests.push(this.bestandService.postFile$(`${this.applicatie.email}`, `attest${this.applicatie.achternaam}${this.applicatie.voornaam}.${attestExtentie}`, this.stap3Formulier.controls.attest.value))
    }
    if (this.stap3Formulier.controls.diploma.value.name != null) {
      let diplomaExtentie = this.stap3Formulier.controls.diploma.value.name.split('.')[this.stap3Formulier.controls.diploma.value.name.split('.').length - 1];
      requests.push(this.bestandService.postFile$(`${this.applicatie.email}`, `diploma${this.applicatie.achternaam}${this.applicatie.voornaam}.${diplomaExtentie}`, this.stap3Formulier.controls.diploma.value))
    }
    console.log(this.bestanden);

    if ((this.bestanden.length != 3 || this.bestanden.includes(null)) && requests.length != 3) {
      this.errorMessage = "Geef 3 bestanden op!";
    } else {
      if (requests.length == 0) {
        this.router.navigate([`../stap-4/${this.applicatie.id}`]);
      } else {
        forkJoin(requests).subscribe(val => {
          if (val) {
            this.router.navigate([`../stap-4/${this.applicatie.id}`]);
          }
        },
          (error: HttpErrorResponse) => {
            console.log(error);

            this.errorMessage = error.error;

          });
      }
    }

  }




}

function valideerBestandType(verplicht = true): ValidatorFn {
  return (control: FormControl): { [key: string]: any } => {
    const foto = control.value.name;
    if (!foto) {
      if (verplicht) {
        return { required: true };
      } else {
        return null;
      }
    }
    if (foto.split('.').length !== 2) {
      return { wrongFileType: true };
    }
    const extentie = foto.split('.')[foto.split('.').length - 1];
    if (!['jpg', 'png', 'jpeg', 'pdf'].includes(extentie.toLowerCase())) {
      return { wrongFileType: true };
    }
    return null;
  };
}