import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthComponent} from './components/auth/auth.component'
import {AuthSignInComponent} from "./components/auth-sign-in/auth-sign-in.component";
import {AuthSignUpComponent} from "./components/auth-sign-up/auth-sign-up.component";

export const routes: Routes = [
  {
    path: "",
    component: AuthComponent,
    children: [
      {
        path: "sign-in",
        component: AuthSignInComponent
      },
      {
        path: "sign-up",
        component: AuthSignUpComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
