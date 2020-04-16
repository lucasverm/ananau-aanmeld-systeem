import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WelkomComponent } from './welkom/welkom.component';
import { Stap1Component } from './stap1/stap1.component';


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
