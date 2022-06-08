import * as BookingActions from "./booking.actions";
import { BookingTypesActions } from "./booking.actions";
import { BookingModel } from "../../../models/booking.model";
import { OfficeModel } from "../../../models/office.model";

export interface State {
  booking: BookingModel[];
  office: OfficeModel[];
  error: any;
  message: any;
}

const initialState: State = {
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
    default:
      return state;
  }
}
