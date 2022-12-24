import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule  } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './components/partials/toolbar/toolbar.component';
import { HomeComponent } from './components/pages/home/home.component';

import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon'
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

import { BannerComponent } from './components/partials/banner/banner.component';
import { PredictApartmentComponent } from './components/pages/predict-apartment/predict-apartment.component';
import { PredictHouseComponent } from './components/pages/predict-house/predict-house.component';
import { PredictLandComponent } from './components/pages/predict-land/predict-land.component';
import { FooterComponent } from './components/partials/footer/footer.component';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";



@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HomeComponent,
    BannerComponent,
    PredictApartmentComponent,
    PredictHouseComponent,
    PredictLandComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    FormsModule,
    ReactiveFormsModule,

    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatMenuModule,
    MatSelectModule,
    MatChipsModule,
    MatAutocompleteModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
