import { Component, OnInit } from '@angular/core';
import { Applicatie } from '../modals/applicatie';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ApplicatieService } from '../services/applicatie.service';
import { HttpErrorResponse } from '@angular/common/http';
import { BestandService } from '../services/bestand.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-applicatie-bekijken',
  templateUrl: './applicatie-bekijken.component.html',
  styleUrls: ['./applicatie-bekijken.component.scss']
})
export class ApplicatieBekijkenComponent implements OnInit {

  public applicatie: Applicatie;
  public stap5Formulier: FormGroup;
  public successMessage: string = null;
  public errorMessage: string = null;
  public Weg: any = ['website', 'facebookpagina', 'Instagram', 'via een andere person', 'via de nieuwsbrief']


  constructor(public router: Router, private route: ActivatedRoute, private bestandService: BestandService, private fb: FormBuilder, private applicatieService: ApplicatieService) {
    this.route.data.subscribe(data => {
      this.applicatie = data['applicatie'];
    });
  }

  ngOnInit() {
    this.stap5Formulier = this.fb.group({
      welkeWeg: ['', [Validators.required]],
      motivatie: ['', [Validators.required]],
      vragenVoorOns: []
    })
  }

  getDocument(naam:String, fileNaam:String) {
    this.bestandService.getFile$(this.applicatie.id, naam.toString()).subscribe(
      val => {
        if (val) {
          saveAs(val, fileNaam.toString());
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