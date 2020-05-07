import { Component, OnInit } from '@angular/core';
import { Applicatie } from '../modals/applicatie';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ApplicatieService } from '../services/applicatie.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-stap5',
  templateUrl: './stap5.component.html',
  styleUrls: ['./stap5.component.scss']
})
export class Stap5Component implements OnInit {

  public applicatie: Applicatie;
  public waarde: Number = (5 / 6 * 100)
  public stap5Formulier: FormGroup;
  public successMessage: string = null;
  public errorMessage: string = null;

  Weg: any = ['website', 'facebookpagina', 'Instagram', 'via een andere person', 'via de nieuwsbrief']

  constructor(public router: Router, private route: ActivatedRoute, private fb: FormBuilder, private applicatieService: ApplicatieService) {
    this.route.data.subscribe(data => {
      this.applicatie = data['applicatie'];
    });
  }

  ngOnInit() {
    this.stap5Formulier = this.fb.group({
      welkeWeg: ['', [Validators.required]],
      motivatie: ['', [Validators.required]],
      vragenVoorOns:[]
    })
  }

  stap5() {
    this.applicatie.welkeWeg = this.stap5Formulier.value.welkeWeg;
    this.applicatie.motivatie = this.stap5Formulier.value.motivatie;
    this.applicatie.vragenVoorOns = this.stap5Formulier.value.vragenVoorOns;
    this.applicatie.huidigeStap = 5;
    this.applicatieService.putApplicatie$(this.applicatie).subscribe(
      val => {
        if (val) {
          this.router.navigate([`../stap-6/${val.id}`]);
        }
      },
      (error: HttpErrorResponse) => {
        this.errorMessage = error.error;
      }
    );
  }
}