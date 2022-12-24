import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { PredictApartmentComponent } from './components/pages/predict-apartment/predict-apartment.component';
import { PredictHouseComponent } from './components/pages/predict-house/predict-house.component';
import { PredictLandComponent } from './components/pages/predict-land/predict-land.component';

const routes: Routes = [
  {path:'' , component: HomeComponent},
  {path:'home' , component: HomeComponent},
  {path:'predict/apartment' , component: PredictApartmentComponent},
  {path:'predict/house' , component: PredictHouseComponent},
  {path:'predict/land' , component: PredictLandComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes , {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled',
    relativeLinkResolution: 'legacy',
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
