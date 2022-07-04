import {Component, Input, OnInit} from "@angular/core";
import * as BookingActions from "../../store/booking.actions";
import {Store} from "@ngrx/store";
import * as StoreGeneral from "../../../../store";
import {roles, Roles} from "../../../../core/consts/Roles.const";
import {OfficeModel} from "../../../../shared/models/office.model";
import {FormControl} from "@angular/forms";
import {BookingModel} from "../../../../shared/models/booking.model";
import {BookingDialogComponent} from "../../../../shared/components/booking-dialog/booking-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {UserModel} from "../../../../shared/models/user.model";
import {RolesEnum} from "../../../../core/enums/roles.enum";

@Component({
  selector: "app-booking-administrators",
  templateUrl: "booking-adminstrators.component.html",
  styleUrls: ["booking-administrators.component.scss"]
})

export class BookingAdministratorsComponent implements OnInit {
  @Input() user!: UserModel;
  public today = new FormControl(new Date());
  public selectDay!: Date;
  public roles: Roles[] = roles;
  public rolesEnum = RolesEnum;

  public office!: OfficeModel[];
  public bookings!: BookingModel[];

  constructor(
    private store: Store<StoreGeneral.AppState>,
    private dialog: MatDialog,
  ) {
  }

  public ngOnInit(): void {
    this.store.dispatch(new BookingActions.GetBookings(this.selectDay));
    this.store.dispatch(new BookingActions.GetOffice(this.roles[1].floor));

    this.store.select("auth").subscribe(state => {
      this.user = state.userCurrent;
    });

    this.store.select("booking").subscribe(state => {
      this.office = state.office;
      this.bookings = state.booking;
      this.selectDay = state.selectDay;
      if (this.office.length && this.bookings.length) {
        this.showBooking()
      }
    });
  }

  public showBooking(): void {
    const officeCopy: OfficeModel[] = [];
    this.office.forEach((table: any) => {
      const tableCopy = {...table}
      if (this.bookings.find((book: BookingModel) => book.table_id === table.number && book.floor_id === this.roles[1].floor)) {
        tableCopy.status = true;
        let indexBooking = this.bookings.findIndex((book: BookingModel) => book.table_id === table.number);
        if (this.bookings[indexBooking].user_id === this.user.id) {
          tableCopy.myBooking = true;
          tableCopy.status = false;
          tableCopy.booking_id = this.bookings[indexBooking].id;
          tableCopy.time_start = this.bookings[indexBooking].time_start;
          tableCopy.time_end = this.bookings[indexBooking].time_end;
        }
      } else {
        tableCopy.status = false;
      }
      officeCopy.push(tableCopy)
    })
    this.office = officeCopy;
  }

  onBookingOpen(bookingData: any) {
    this.dialog.open(BookingDialogComponent, {
      data: {
        number: bookingData.number,
        start: bookingData.time_start ? bookingData.time_start : this.selectDay,
        end: bookingData.time_end ? bookingData.time_end : "",
        name: this.user.name,
        user_id: this.user.id,
        booking_id: bookingData.booking_id,
        floor_id: this.roles[1].floor
      }
    });
  }
}
