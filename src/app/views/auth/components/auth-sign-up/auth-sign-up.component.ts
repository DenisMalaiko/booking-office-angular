import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";

import * as StoreGeneral from "../../../../store";
import * as AuthActions from "../../store/auth.actions";
import {UserModel} from "../../../../shared/models/user.model";
import {RolesEnum} from "../../../../core/enums/roles.enum";

@Component({
  selector: 'app-sign-up',
  templateUrl: 'auth-sign-up.component.html',
  styleUrls: ['auth-sign-up.component.scss']
})
export class AuthSignUpComponent implements OnInit {
  signUpForm!: FormGroup;
  roles: string[] = Object.values(RolesEnum);

  constructor(
    private router: Router,
    private store: Store<StoreGeneral.AppState>
  ) {
  }

  public ngOnInit(): void {
    this.setSignUpForm();
  }

  public setSignUpForm(): void {
    this.signUpForm = new FormGroup({
      "name": new FormControl("", [Validators.required]),
      "email": new FormControl("", [Validators.required, Validators.email]),
      "role": new FormControl("", [Validators.required]),
      "password": new FormControl("", [Validators.required, Validators.minLength(6)])
    });
  }

  async onSignUp() {
    if (!this.signUpForm.valid) return;

    const user: UserModel = this.signUpForm.value;

    await this.store.dispatch(new AuthActions.SignUpStart({
      name: user.name,
      email: user.email,
      role: user.role,
      password: user.password
    }));
  }

  public toSignIn(): void {
    this.signUpForm.reset();
    this.router.navigate(['auth/sign-in']);
    this.store.dispatch(new AuthActions.ClearError())
  }
}
