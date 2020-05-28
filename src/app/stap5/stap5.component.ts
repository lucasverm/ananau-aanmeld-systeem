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
  public Weg: any = ['website', 'facebookpagina', 'Instagram', 'via een andere person', 'via de nieuwsbrief']


  constructor(public router: Router, private route: ActivatedRoute, private fb: FormBuilder, private applicatieService: ApplicatieService) {
    this.route.data.subscribe(data => {
      this.applicatie = data['applicatie'];

      console.log(this.applicatie);

    });
  }

  gaNaarStap(getal: number) {
    if (getal > 0 && getal < 6) {
      this.router.navigate([`../stap-${getal}/${this.applicatie.id}`]);
    }
  }

  ngOnInit() {
    this.stap5Formulier = this.fb.group({
      welkeWeg: ['', [Validators.required]],
      motivatie: ['', [Validators.required]],
      vragenVoorOns: []
    })
  }

  indienen() {
    this.applicatie.huidigeStap = 6;
    this.applicatieService.putApplicatie$(this.applicatie).subscribe(
      val => {
        if (val) {
          this.router.navigate([`../stap-6`]);
        }
      },
      (error: HttpErrorResponse) => {
        this.errorMessage = error.error;
      }
    );
  }


formatDate(date: Date): string {
  var uitvoer: string = "";
  if (date != null) {
    if (date.getDate().toString().length == 1) {
      uitvoer += "0" + date.getDate();
    } else {
      uitvoer += date.getDate();
    }
    uitvoer += "-"
    if (date.getMonth().toString().length == 1) {
      uitvoer += "0" + (date.getMonth() + 1) + "-";
    } else {
      uitvoer += (date.getMonth() + 1) + "-";
    }
    uitvoer += date.getFullYear();
  }
  //uitvoer += 'T' + date.toTimeString().slice(0, 5);
  return uitvoer;
}
}