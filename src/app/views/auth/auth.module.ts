import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

// Modules
import {SharedModule} from "../../shared/shared.module";
import {AuthRoutingModule} from "./auth-routing.module";

import {AuthComponent} from "./components/auth/auth.component";
import {AuthSignInComponent} from "./components/auth-sign-in/auth-sign-in.component";
import {AuthSignUpComponent} from "./components/auth-sign-up/auth-sign-up.component";

@NgModule({
  declarations: [
    AuthComponent,
    AuthSignInComponent,
    AuthSignUpComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule
  ]
})

export class AuthModule {
}
