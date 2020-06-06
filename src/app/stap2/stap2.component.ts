import { Component, OnInit } from '@angular/core';
import { Applicatie } from '../modals/applicatie';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ApplicatieService } from '../services/applicatie.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-stap2',
  templateUrl: './stap2.component.html',
  styleUrls: ['./stap2.component.scss']
})
export class Stap2Component implements OnInit {
  public applicatie: Applicatie;
  public waarde: Number = (2 / 6 * 100)
  public stap2Formulier: FormGroup;
  public successMessage: string = null;
  public errorMessage: string = null;

  constructor(public router: Router, private route: ActivatedRoute, private fb: FormBuilder, private applicatieService: ApplicatieService) {
    this.route.data.subscribe(data => {
      this.applicatie = data['applicatie'];
    });
  }

  ngOnInit() {
    this.stap2Formulier = this.fb.group({
      periodeStageVan: [this.getDateForInput(this.applicatie.periodeStageVan), [Validators.required]],
      periodeStageTot: [this.getDateForInput(this.applicatie.periodeStageTot), [Validators.required]],
      periodeVerblijfVan: [this.getDateForInput(this.applicatie.periodeVerblijfVan), [Validators.required]],
      periodeVerblijfTot: [this.getDateForInput(this.applicatie.periodeVerblijfTot), [Validators.required]],
      aantalWekenSpaans: [this.applicatie.aantalWekenSpaans, [Validators.required]],
    })
  }

  stap2() {
    this.applicatie.periodeStageVan = new Date(this.stap2Formulier.value.periodeStageVan);
    
    this.applicatie.periodeStageTot = new Date(this.stap2Formulier.value.periodeStageTot);
    this.applicatie.periodeVerblijfVan = new Date(this.stap2Formulier.value.periodeVerblijfVan);
    this.applicatie.periodeVerblijfTot = new Date(this.stap2Formulier.value.periodeVerblijfTot);
    this.applicatie.aantalWekenSpaans = this.stap2Formulier.value.aantalWekenSpaans;
    this.applicatie.huidigeStap = 2;
    this.applicatieService.putApplicatie$(this.applicatie).subscribe(
      val => {
        if (val) {
          this.router.navigate([`../stap-3/${val.id}`]);
        }
      },
      (error: HttpErrorResponse) => {
        this.errorMessage = error.error;
      }
    );
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
