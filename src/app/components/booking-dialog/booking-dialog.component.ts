import { Component, OnInit, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";

import { UserModel } from "../../models/user.model";
import { BookingModel } from "../../models/booking.model";

import * as BookingActions from "../../views/booking/store/booking.actions"
import * as StoreGeneral from "../../store/index"

@Component({
  selector: 'app-booking-dialog',
  templateUrl: './booking-dialog.component.html',
  styleUrls: ['./booking-dialog.component.scss']
})
export class BookingDialogComponent implements OnInit {
  user!: UserModel;
  picker!: "";
  loading: boolean = false;
  @Output() message!: string;
  @Output() status!: string;
  bookingForm: FormGroup = new FormGroup({
    "name": new FormControl("", Validators.required),
    "table": new FormControl("", Validators.required),
    "time": new FormGroup({
      "start": new FormControl(this.bookingData.start.value, Validators.required),
      "end": new FormControl("", Validators.required),
    })
  })
  bookings!: BookingModel[];

  constructor(
    @Inject(MAT_DIALOG_DATA) public bookingData: any,
    private store: Store<StoreGeneral.AppState>,
  ) {
  }

  ngOnInit() {
  }

  onSetBooking() {
    if(!this.bookingForm.valid) return;
    this.loading = true;
    const booking: BookingModel = {
      user_id: this.bookingData.user_id,
      table_id: this.bookingForm.value.table,
      time_start: this.bookingForm.value.time.start,
      time_end: this.bookingForm.value.time.end
    }

    this.store.dispatch(new BookingActions.AddBooking(booking));

    this.store.select("booking").subscribe(state => {
      if(state.message.length){
        this.loading = false;
        this.message = state.message;
        this.status = "success";
      }
    });
  }
}
