import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Applicatie } from '../modals/applicatie';
import { Router } from '@angular/router';
import { ApplicatieService } from '../services/applicatie.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-vind-applicatie',
  templateUrl: './vind-applicatie.component.html',
  styleUrls: ['./vind-applicatie.component.scss']
})
export class VindApplicatieComponent implements OnInit {

  public waarde: Number = (6 / 6 * 100)
  public applicatie: Applicatie;
  public vindFormulier: FormGroup;
  public successMessage: string = null;
  public errorMessage: string = null;

  constructor(public router: Router, private fb: FormBuilder, private applicatieService: ApplicatieService) { }

  ngOnInit() {
    this.vindFormulier = this.fb.group({
      achternaam: ['', [Validators.required]],
      email: ['', [Validators.required]]
    })
  }

  vindApplicatie() {
    this.applicatieService.getApplicatieByEmailAndAchternaam$(this.vindFormulier.value.email, this.vindFormulier.value.achternaam).subscribe(
      val => {
        if (val) {
          console.log(val);
          this.router.navigate([`../stap-${val.huidigeStap}`]);
        }
      },
      (error: HttpErrorResponse) => {
        this.errorMessage = error.error;
      }
    );
  }

}
