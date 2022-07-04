import * as BookingReducer from "../views/booking/store/booking.reducer";
import * as AuthReducer from "../views/auth/store/auth.reducer";
import {ActionReducerMap} from '@ngrx/store';

export interface AppState {
  booking: BookingReducer.State;
  auth: AuthReducer.State;
}

export const reducers: ActionReducerMap<AppState, any> = {
  booking: BookingReducer.bookingReducer,
  auth: AuthReducer.authReducer
};
