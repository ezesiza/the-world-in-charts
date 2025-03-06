import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FunnelChartComponent } from './home/components/charts/funnel-chart/funnel-chart.component';
import { HomeComponent } from './home/home/home.component';
import { LandingComponent } from './home/components/landing/landing.component';
import { AngularMaterialModules } from './modules/angular-material.module';
import { FormSelectComponent } from './home/shared/form-select/form-select.component';

@NgModule({
  declarations: [
    AppComponent,
    FunnelChartComponent,
    HomeComponent,
    LandingComponent,
    FormSelectComponent
  ],
  imports: [
    [...AngularMaterialModules],
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
