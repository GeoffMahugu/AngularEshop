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
  MatInputModule,
} from '@angular/material';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [ProductComponent],
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
    MatInputModule,
    ServiceWorkerModule
  ],
  exports: [
    RouterModule,
    HttpClientModule,
    FormsModule,
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
    MatSelectModule,
    ProductComponent
  ]
})
export class SharedModule { }
