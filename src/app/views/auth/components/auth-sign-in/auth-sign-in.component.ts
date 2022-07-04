import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";

import * as StoreGeneral from "../../../../store";
import * as AuthActions from "../../store/auth.actions";
import {UserModel} from "../../../../shared/models/user.model";

@Component({
  selector: 'app-sign-in',
  templateUrl: 'auth-sign-in.component.html',
  styleUrls: ['auth-sign-in.component.scss']
})
export class AuthSignInComponent implements OnInit {
  public signInForm!: FormGroup;

  constructor(
    private router: Router,
    private store: Store<StoreGeneral.AppState>
  ) {
  }

  public ngOnInit(): void {
    this.setSignInForm();
  }

  public async onSignIn() {
    if (!this.signInForm.valid) return;

    const user: UserModel = this.signInForm.value;

    await this.store.dispatch(new AuthActions.SignInStart({
      email: user.email,
      password: user.password
    }));

    await this.store.dispatch(new AuthActions.SetCurrentUserStart({
      email: user.email
    }))
  }

  public toSignUp(): void {
    this.signInForm.reset();
    this.router.navigate(['auth/sign-up']).then();
    this.store.dispatch(new AuthActions.ClearError())
  }

  private setSignInForm(): void {
    this.signInForm = new FormGroup({
      "email": new FormControl("malaiko.denis@gmail.com", [Validators.required, Validators.email]),
      "password": new FormControl("1234567890", [Validators.required])
    });
  };
}
