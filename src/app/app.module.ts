import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelkomComponent } from './welkom/welkom.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProgressionBarComponent } from './progression-bar/progression-bar.component';
import { NgbModule, NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { Stap1Component } from './stap1/stap1.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VindApplicatieComponent } from './vind-applicatie/vind-applicatie.component';
import { Stap2Component } from './stap2/stap2.component';

@NgModule({
  declarations: [
    AppComponent,
    WelkomComponent,
    PageNotFoundComponent,
    ProgressionBarComponent,
    Stap1Component,
    VindApplicatieComponent,
    Stap2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
