import { Component, Output, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";

import { UserModel } from "../../models/user.model";

import * as AuthActions from "./store/auth.actions";
import * as StoreGeneral from "../../store"

@Component({
  selector: 'app-sign',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  @Output() message: any = "";
  @Output() status: string = "";
  isSignIn: boolean = true;
  loading: boolean = false;
  signInForm: FormGroup = new FormGroup({
    "email": new FormControl("", [Validators.required, Validators.email]),
    "password": new FormControl("", [Validators.required])
  });
  signUpForm: FormGroup = new FormGroup({
    "name": new FormControl("", [Validators.required]),
    "email": new FormControl("", [Validators.required, Validators.email]),
    "role": new FormControl("", [Validators.required]),
    "password": new FormControl("", [Validators.required, Validators.minLength(6)])
  });

  token!: Observable<{ token: any }>
  error!: Observable<{ error: any }>
  userCurrent!: Observable<{ userCurrent: any }>

  constructor(
    private http: HttpClient,
    private router: Router,
    private store: Store<StoreGeneral.AppState>
  ) { }

  ngOnInit(): void {
    this.store.select("auth").subscribe(state => {
      this.token = state.token;
      this.error = state.error;

      if(this.token) {
        this.router.navigate(["/booking"])
      }

      if(this.error) {
        this.loading = false;
        this.message = this.error;
        this.status = "error";
      }

      if(!this.error && !this.isSignIn) {
        this.toSignIn()
      }
    });
  }

  async onSignIn() {
    if(!this.signInForm.valid) return;

    this.loading = true;

    const user: UserModel = this.signInForm.value;

    await this.store.dispatch(new AuthActions.SignInStart({
      email: user.email,
      password: user.password
    }));

    await this.store.dispatch(new AuthActions.SetCurrentUserStart({
      email: user.email
    }));
  }

  async onSignUp() {
    if(!this.signUpForm.valid) return;

    this.loading = true;

    const user: UserModel = this.signUpForm.value;

    await this.store.dispatch(new AuthActions.SignUpStart({
      name: user.name,
      email: user.email,
      role: user.role,
      password: user.password
    }));
  }

  toggleTab(): void{
    this.isSignIn = !this.isSignIn;
    this.message = "";
    this.signInForm.reset();
    this.signUpForm.reset();
  }

  toSignIn(): void{
    this.isSignIn = true;
    this.loading = false;
    this.message = "";
  }

}
