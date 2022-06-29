import { Action } from "@ngrx/store";
import {BookingModel} from "../../../shared/models/booking.model";
import {FormControl} from "@angular/forms";

export const SET_SELECT_DAY = "[Booking] GET_SELECT DAY";

export const GET_BOOKINGS = "[Booking] GET_BOOKINGS";
export const SET_BOOKINGS = "[Booking] SET_BOOKINGS";

export const ADD_BOOKING = "[Booking] ADD_BOOKING";
export const ADD_BOOKING_MESSAGE = "[Booking] ADD_BOOKING_MESSAGE";
export const UPDATE_BOOKING = "[Booking] UPDATE_BOOKING";
export const DELETE_BOOKING = "[Booking] DELETE_BOOKING";

export const GET_OFFICE = "[Booking] GET_OFFICE";
export const SET_OFFICE = "[Booking] SET_OFFICE";


export class SetSelectDay implements Action {
  readonly type = SET_SELECT_DAY;
  constructor(public payload: FormControl) {}
}

export class GetBookings implements Action {
  readonly type = GET_BOOKINGS;
  constructor(public payload: any) {}
}
export class SetBookings implements Action {
  readonly type = SET_BOOKINGS;
  constructor(public payload: BookingModel[]) {}
}

export class AddBooking implements Action {
  readonly type = ADD_BOOKING;
  constructor(public payload: BookingModel) {}
}
export class UpdateBooking implements Action {
  readonly type = UPDATE_BOOKING;
  constructor(public payload: any) {
  }
}
export class DeleteBooking implements Action {
  readonly type = DELETE_BOOKING;
  constructor(public payload: number) {
  }
}
export class AddBookingMessage implements Action {
  readonly type = ADD_BOOKING_MESSAGE;
  constructor(public payload: any) {}
}

export class GetOffice implements Action {
  readonly type = GET_OFFICE;
  constructor(public payload: number) {}
}
export class SetOffice implements Action {
  readonly type = SET_OFFICE;
  constructor(public payload: any) {}
}


export type BookingTypesActions =
  | SetSelectDay
  | AddBooking
  | SetBookings
  | SetOffice
  | GetOffice
  | AddBookingMessage
  | DeleteBooking
  | UpdateBooking;
