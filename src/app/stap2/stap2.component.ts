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
      console.log(this.applicatie);

    });
  }

  ngOnInit() {
    this.stap2Formulier = this.fb.group({
      periodeStageVan: ['', [Validators.required]],
      periodeStageTot: ['', [Validators.required]],
      periodeVerblijfVan: ['', [Validators.required]],
      periodeVerblijfTot: ['', [Validators.required]],
      aantalWekenSpaans: ['', [Validators.required]],
    })
  }

  stap2() {
    this.applicatie.periodeStageVan = this.stap2Formulier.value.periodeStageVan;
    this.applicatie.periodeStageTot = this.stap2Formulier.value.periodeStageTot;
    this.applicatie.periodeVerblijfVan = this.stap2Formulier.value.periodeVerblijfVan;
    this.applicatie.periodeVerblijfTot = this.stap2Formulier.value.periodeVerblijfTot;
    this.applicatie.aantalWekenSpaans = this.stap2Formulier.value.aantalWekenSpaans;
    this.applicatie.huidigeStap = 2;
    this.applicatieService.putApplicatie$(this.applicatie).subscribe(
      val => {
        if (val) {
          this.router.navigate([`../stap-4/${val.id}`]);
        }
      },
      (error: HttpErrorResponse) => {
        this.errorMessage = error.error;
      }
    );
  }

}
