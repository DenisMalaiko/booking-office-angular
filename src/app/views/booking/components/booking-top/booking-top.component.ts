import {Component, Input, OnInit} from "@angular/core";
import { FormControl } from "@angular/forms";
import { Store } from "@ngrx/store";
import { Router } from "@angular/router";

import * as BookingActions from "../../store/booking.actions";
import * as StoreGeneral from "../../../../store";
import * as AuthActions from "../../../auth/store/auth.actions";
import { UserModel } from "../../../../shared/models/user.model";

@Component({
  selector: 'app-booking-top',
  templateUrl: './booking-top.component.html',
  styleUrls: ['booking-top.component.scss']
})
export class BookingTopComponent implements OnInit {
  currentDate = new FormControl(new Date());
  @Input() user!: UserModel;

  constructor(
    private router: Router,
    private store: Store<StoreGeneral.AppState>
  ) {}

  public ngOnInit(): void {
  }

  public onChangeEvent(date: any): void {
    this.store.dispatch(new BookingActions.SetSelectDay(date.value));
    this.store.dispatch(new BookingActions.GetBookings(date.value));
  }

  public onLogout(): void {
    this.store.dispatch(new AuthActions.LogOut());
    this.router.navigate([""]);
  }
}
