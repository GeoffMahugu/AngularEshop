import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';

// Third party library
import { LazyLoadImageModule, intersectionObserverPreset } from 'ng-lazyload-image';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatSnackBarModule,
  // MatSidenavModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatBadgeModule,
  MatMenuModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    LazyLoadImageModule.forRoot({
      preset: intersectionObserverPreset
    }),
    FlexLayoutModule,
    MatSnackBarModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule,
    MatMenuModule,
    ServiceWorkerModule
  ],
  exports: [
    RouterModule,
    HttpClientModule,
    LazyLoadImageModule,
    ServiceWorkerModule,
    FlexLayoutModule,
    MatSnackBarModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule,
    MatMenuModule
  ]
})
export class SharedModule { }
