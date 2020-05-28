import { Component, OnInit } from '@angular/core';
import { Applicatie } from '../modals/applicatie';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ApplicatieService } from '../services/applicatie.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-stap4',
  templateUrl: './stap4.component.html',
  styleUrls: ['./stap4.component.scss']
})
export class Stap4Component implements OnInit {

  public applicatie: Applicatie;
  public waarde: Number = (4 / 6 * 100)
  public stap4Formulier: FormGroup;
  public successMessage: string = null;
  public errorMessage: string = null;

  Weg: any = ['website', 'facebookpagina', 'Instagram', 'via een andere person', 'via de nieuwsbrief']

  constructor(public router: Router, private route: ActivatedRoute, private fb: FormBuilder, private applicatieService: ApplicatieService) {
    this.route.data.subscribe(data => {
      this.applicatie = data['applicatie'];
    });
  }

  ngOnInit() {
    this.stap4Formulier = this.fb.group({
      welkeWeg: [this.applicatie.welkeWeg, [Validators.required]],
      motivatie: [this.applicatie.motivatie, [Validators.required]],
      vragenVoorOns: [this.applicatie.vragen]
    })
  }

  stap4() {
    this.applicatie.welkeWeg = this.stap4Formulier.value.welkeWeg;
    this.applicatie.motivatie = this.stap4Formulier.value.motivatie;
    this.applicatie.vragen = this.stap4Formulier.value.vragenVoorOns;
    this.applicatie.huidigeStap = 5;
    this.applicatieService.putApplicatie$(this.applicatie).subscribe(
      val => {
        if (val) {
          this.router.navigate([`../stap-5/${val.id}`]);
        }
      },
      (error: HttpErrorResponse) => {
        this.errorMessage = error.error;
      }
    );
  }
}
