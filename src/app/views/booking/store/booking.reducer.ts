import * as BookingActions from "./booking.actions";
import { BookingTypesActions } from "./booking.actions";
import { BookingModel } from "../../../shared/models/booking.model";
import { OfficeModel } from "../../../shared/models/office.model";
import { FormControl } from "@angular/forms";

export interface State {
  selectDay: any,
  booking: BookingModel[];
  office: OfficeModel[];
  error: any;
  message: any;
}

const initialState: State = {
  selectDay: new Date(),
  booking: [],
  office: [],
  error: "",
  message: ""
}

export function bookingReducer(
  state: State = initialState,
  action: BookingTypesActions
) {
  switch (action.type) {
    case BookingActions.SET_BOOKINGS:
      return {
        ...state,
        booking: action.payload
      }
    case BookingActions.ADD_BOOKING:
      return {
        ...state,
        booking: [...state.booking, action.payload]
      }
    case BookingActions.DELETE_BOOKING:
      // const booking = state.booking.filter(book => book.booking_id !== action.payload);
      return {
        ...state,
        // booking: booking
      }
    case BookingActions.ADD_BOOKING_MESSAGE:
      return {
        ...state,
        message: action.payload
      }
    case BookingActions.SET_OFFICE:
      return {
        ...state,
        office: action.payload
      }
    case BookingActions.SET_SELECT_DAY:
      return {
        ...state,
        selectDay: action.payload
      }
    default:
      return state;
  }
}
