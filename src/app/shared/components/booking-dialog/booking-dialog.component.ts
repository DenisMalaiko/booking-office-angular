import {Component, OnInit, Inject, Output, OnDestroy} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from "@angular/material/dialog";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";

import { UserModel } from "../../models/user.model";
import { BookingModel } from "../../models/booking.model";

import * as BookingActions from "../../../views/booking/store/booking.actions"
import * as StoreGeneral from "../../../store"

@Component({
  selector: 'app-booking-dialog',
  templateUrl: './booking-dialog.component.html',
  styleUrls: ['./booking-dialog.component.scss']
})

export class BookingDialogComponent implements OnInit, OnDestroy {
  @Output() message!: string;
  @Output() status!: string;

  public user!: UserModel;
  public picker!: "";
  public loading: boolean = false;

  public bookingForm!: FormGroup;
  public bookings!: BookingModel[];

  constructor(
    @Inject(MAT_DIALOG_DATA) public bookingData: any,
    private store: Store<StoreGeneral.AppState>,
    public dialog: MatDialog
  ) {
  }

  public ngOnInit(): void {
    this.setBookingForm();
  }

  public ngOnDestroy(): void {
    this.store.select("booking").subscribe().unsubscribe()
  }

  public setBookingForm(): void {
    this.bookingForm = new FormGroup({
      "name": new FormControl("", Validators.required),
      "table": new FormControl("", Validators.required),
      "time": new FormGroup({
        "start": new FormControl(this.bookingData.start, Validators.required),
        "end": new FormControl(this.bookingData.end, Validators.required),
      })
    })
  }

  public onSetBooking(): void {
    if(!this.bookingForm.valid) return;
    this.loading = true;

    const booking: BookingModel = {
      user_id: this.bookingData.user_id,
      table_id: this.bookingForm.value.table,
      time_start: this.bookingForm.value.time.start,
      time_end: this.bookingForm.value.time.end,
      floor_id: this.bookingData.floor_id
    }

    console.log(booking)

    this.store.dispatch(new BookingActions.AddBooking(booking));
    this.store.select("booking").subscribe(state => {
      if(state.message.length){
        this.loading = false;
        this.message = "";
        this.dialog.closeAll();
      }
    })
  }

  public onDeleteBooking(idBooking: number): void {
    this.store.dispatch(new BookingActions.DeleteBooking(idBooking))
    this.store.select("booking").subscribe(state => {
      if(state.message.length){
        this.loading = false;
        this.message = "";
        this.dialog.closeAll();
      }
    })
  }

  onUpdateBooking() {
    if(!this.bookingForm.valid) return;
    this.loading = true;

    const booking: BookingModel = {
      user_id: this.bookingData.user_id,
      table_id: this.bookingForm.value.table,
      time_start: this.bookingForm.value.time.start,
      time_end: this.bookingForm.value.time.end,
      booking_id: this.bookingData.booking_id
    }

    this.store.dispatch(new BookingActions.UpdateBooking(booking));
    this.store.select("booking").subscribe(state => {
      if(state.message.length){
        this.loading = false;
        this.message = "";
        this.dialog.closeAll();
      }
    })
  }
}
