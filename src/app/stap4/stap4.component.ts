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
  public successMessage: string = null;
  public errorMessage: string = null;

  constructor(public router: Router, private route: ActivatedRoute, private fb: FormBuilder, private applicatieService: ApplicatieService) {
    this.route.data.subscribe(data => {
      this.applicatie = data['applicatie'];
    });
  }

  ngOnInit() {

  }

  stap4() {
    this.applicatie.periodeBevestigd = true;
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

  public formatDate(datum: Date): string {
    var uitvoer = "";
    uitvoer += datum.getDate() + "/" + (datum.getMonth() + 1) + "/" + datum.getFullYear();
    return uitvoer;
  }

}
