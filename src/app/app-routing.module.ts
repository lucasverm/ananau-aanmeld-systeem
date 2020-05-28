import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WelkomComponent } from './welkom/welkom.component';
import { Stap1Component } from './stap1/stap1.component';
import { VindApplicatieComponent } from './vind-applicatie/vind-applicatie.component';
import { Stap2Component } from './stap2/stap2.component';
import { ApplicatieResolver } from './resolver/applicatie.resolver';
import { Stap3Component } from './stap3/stap3.component';
import { Stap4Component } from './stap4/stap4.component';
import { Stap5Component } from './stap5/stap5.component';
import { BestandenResolver } from './resolver/bestanden.resolver';
import { Stap6Component } from './stap6/stap6.component';
import { ApplicatieBekijkenComponent } from './applicatie-bekijken/applicatie-bekijken.component';


const routes: Routes = [
  {
    path: 'welkom',
    component: WelkomComponent
  },
  {
    path: 'stap-1',
    component: Stap1Component,
  },
  {
    path: 'stap-1/:id',
    component: Stap1Component,
    resolve: { applicatie: ApplicatieResolver },
  },
  {
    path: 'stap-2/:id',
    component: Stap2Component,
    resolve: { applicatie: ApplicatieResolver },
  },
  {
    path: 'stap-3/:id',
    component: Stap3Component,
    resolve: { applicatie: ApplicatieResolver, bestanden: BestandenResolver },
  },
  {
    path: 'stap-4/:id',
    component: Stap4Component,
    resolve: { applicatie: ApplicatieResolver },
  },
  {
    path: 'stap-5/:id',
    component: Stap5Component,
    resolve: { applicatie: ApplicatieResolver },
  },
  {
    path: 'stap-6',
    component: Stap6Component,
  },

  {
    path: 'applicatie-bekijken/:id',
    component: ApplicatieBekijkenComponent,
    resolve: { applicatie: ApplicatieResolver }
  },
  {
    path: 'vind-applicatie',
    component: VindApplicatieComponent
  },
  {
    path: '',
    redirectTo: 'welkom',
    pathMatch: "full"
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
