import {Component, Output, OnInit} from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";

import * as StoreGeneral from "../../../../store"

@Component({
  selector: 'app-auth',
  templateUrl: 'auth.component.html',
  styleUrls: ['auth.component.scss']
})

export class AuthComponent implements OnInit {
  @Output() message: any = "";
  @Output() status: string = "error";
  public loading: boolean = false;

  private token!: Observable<{ token: any }>

  constructor(
    private router: Router,
    private store: Store<StoreGeneral.AppState>
  ) {}

  ngOnInit(): void {
    this.store.select("auth").subscribe(state => {
      this.token = state.token;
      this.message = state.error;
      this.loading = state.loading;

      if(this.token) {
        this.router.navigate(["/booking/developers"]);
      }
    });
  }
}
