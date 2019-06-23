import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import third party
import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthenticateComponent } from './authenticate/authenticate.component';

@NgModule({
  declarations: [AuthenticateComponent],
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
