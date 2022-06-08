import { Action } from "@ngrx/store";
import {BookingModel} from "../../../models/booking.model";

export const GET_BOOKINGS = "GET_BOOKINGS";
export const SET_BOOKINGS = "SET_BOOKINGS";
export const ADD_BOOKING = "ADD_BOOKING";
export const ADD_BOOKING_MESSAGE = "ADD_BOOKING_MESSAGE";

export const GET_OFFICE = "GET_OFFICE";
export const SET_OFFICE = "SET_OFFICE";

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
export class AddBookingMessage implements Action {
  readonly type = ADD_BOOKING_MESSAGE;
  constructor(public payload: any) {}
}


export class GetOffice implements Action {
  readonly type = GET_OFFICE;
  constructor() {}
}
export class SetOffice implements Action {
  readonly type = SET_OFFICE;
  constructor(public payload: any) {}
}


export type BookingTypesActions =
  | AddBooking
  | SetBookings
  | SetOffice
  | GetOffice
  | AddBookingMessage;
