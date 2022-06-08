import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormControl } from "@angular/forms";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { MatDialog } from "@angular/material/dialog";
import { BookingDialogComponent } from "../../components/booking-dialog/booking-dialog.component";

import * as BookingActions from "./store/booking.actions";
import * as AuthActions from "../auth/store/auth.actions"
import * as StoreGeneral from "../../store/index"
import { BookingModel } from "../../models/booking.model";
import { OfficeModel } from "../../models/office.model";
import { UserModel } from "../../models/user.model";


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  today = new FormControl(new Date());
  currentDate = new FormControl(new Date());

  token!: Observable<{ token: any }>
  user!: UserModel;
  office!: OfficeModel[];
  bookings!: BookingModel[];

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private store: Store<StoreGeneral.AppState>
  ) { }

  ngOnInit() {
    this.store.select("auth").subscribe(state => {
      this.token = state.token;
      this.user = state.userCurrent;
    });

    this.store.select("booking").subscribe(state => {
      this.office = state.office;
      this.bookings = state.booking;
      if(this.office.length && this.bookings.length) {
        this.showBooking()
      }
    });

    this.guard();
  }

  onBookingOpen(bookingData: any) {
    this.dialog.open(BookingDialogComponent, {
      data: {
        id: bookingData.id,
        start: this.currentDate,
        name: this.user.name,
        user_id: this.user.id
      }
    });
  }

  onChangeEvent(date: any) {
    this.store.dispatch(new BookingActions.GetBookings(date.value));
  }

  showBooking() {
    const officeCopy: OfficeModel[] = [];
    this.office.forEach((table: OfficeModel) => {
      const tableCopy = {...table}
      if(this.bookings.find((book: BookingModel) => book.table_id === table.id)) {
        tableCopy.status = true;
        let indexBooking = this.bookings.findIndex((book: BookingModel) => book.table_id === table.id);
        if(this.bookings[indexBooking].user_id === this.user.id) {
          tableCopy.myBooking = true;
        }
      } else {
        tableCopy.status = false;
      }

      officeCopy.push(tableCopy)
    })
    this.office = officeCopy;
  }

  guard() {
    if(!this.token) {
      this.router.navigate([""]);
    } else {
      this.store.dispatch(new BookingActions.GetOffice());
      this.store.dispatch(new BookingActions.GetBookings(this.today.value));
    }
  }

  onLogout(){
    this.store.dispatch(new AuthActions.LogOut());
    this.router.navigate([""]);
  }

}
