import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
  MatMenuModule,
  MatOptionModule,
  MatFormFieldModule,
  MatCheckboxModule,
  MatSelectModule,
  MatInputModule
} from '@angular/material';

import { ProductComponent } from './product/product.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [ProductComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    LazyLoadImageModule.forRoot({
      preset: intersectionObserverPreset
    }),
    FlexLayoutModule,
    ServiceWorkerModule,

    MatSnackBarModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule,
    MatMenuModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule
  ],
  exports: [
    RouterModule,
    HttpClientModule,
    FormsModule,

    ProductComponent,
    FooterComponent,

    ReactiveFormsModule,
    LazyLoadImageModule,
    ServiceWorkerModule,

    FlexLayoutModule,
    MatSnackBarModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule,
    MatMenuModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatOptionModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class SharedModule { }
