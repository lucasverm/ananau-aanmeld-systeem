import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WelkomComponent } from './welkom/welkom.component';
import { Stap1Component } from './stap1/stap1.component';
import { VindApplicatieComponent } from './vind-applicatie/vind-applicatie.component';
import { Stap2Component } from './stap2/stap2.component';
import { ApplicatieResolver } from './resolver/applicatie.resolver';


const routes: Routes = [
  {
    path: 'welkom',
    component: WelkomComponent
  },
  {
    path: 'stap-1',
    component: Stap1Component
  },
  {
    path: 'stap-2/:id',
    component: Stap2Component,
    resolve: { applicatie: ApplicatieResolver },
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
