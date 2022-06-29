import { Component, OnInit, Output } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { Router } from "@angular/router";

import * as StoreGeneral from "../../../../store";
import * as BookingActions from "../../store/booking.actions";
import { UserModel } from "../../../../shared/models/user.model";
import { roles, Roles } from "../../../../core/consts/Roles.const";

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['booking.component.scss']
})
export class BookingComponent implements OnInit {
  @Output() today = new FormControl(new Date());
  token!: Observable<{ token: any }>
  user!: UserModel;
  roles: Roles[] = roles;

  constructor(
    private router: Router,
    private store: Store<StoreGeneral.AppState>
  ) {}

  public ngOnInit(): void {
    this.store.select("auth").subscribe(state => {
      this.token = state.token;
      this.user = state.userCurrent;
    });

    this.guard();
  }

  private guard(): void {
    if (!this.token) {
      this.router.navigate([""]);
    }
  }
}
