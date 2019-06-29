import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Third party
import { MatCarouselModule } from '@ngmodule/material-carousel';


import { SharedModule } from '../../modules/shared/shared.module';
import { LandingRoutingModule } from './landing-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    LandingRoutingModule,
    MatCarouselModule,
  ]
})
export class LandingModule { }
