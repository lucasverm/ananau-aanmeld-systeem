import { Component, OnInit } from '@angular/core';
import { Applicatie } from '../modals/applicatie';
import { FormGroup, FormBuilder, Validators, ValidatorFn, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ApplicatieService } from '../services/applicatie.service';
import { HttpErrorResponse } from '@angular/common/http';
import { BestandService } from '../services/bestand.service';
import { forkJoin } from 'rxjs';

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

  constructor(public router: Router, private route: ActivatedRoute, private fb: FormBuilder, private bestandService: BestandService, private applicatieService: ApplicatieService) {
    this.route.data.subscribe(data => {
      this.applicatie = data['applicatie'];
    });
  }

  ngOnInit() {
    this.stap3Formulier = this.fb.group({
      reispaspoort: [
        '',
        [valideerBestandType(true)]
      ],
      attest: [
        '',
        [valideerBestandType(true)]
      ],
      diploma: [
        '',
        [valideerBestandType(true)]
      ],
    })
  }

  stap3() {
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
  }


  private bestandNaarFormData(bestandData: File): FormData {
    const formData = new FormData();
    formData.append('bestand', bestandData, bestandData.name ? bestandData.name : 'bestand');
    return formData;
  }

  toonAfbeelding() {
    this.bestandService.getFile$(this.applicatie.id, `${this.applicatie.achternaam}${this.applicatie.voornaam}`, "reispaspoort").subscribe(
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
    if (!['jpg', 'png', 'jpeg'].includes(extentie.toLowerCase())) {
      return { wrongFileType: true };
    }
    return null;
  };
}