import {BookingModel} from "./booking.model";
import {OfficeModel} from "./office.model";

export interface TableModel extends BookingModel, OfficeModel {
  booking_id: string;
  nameUser: string;
  myBooking: boolean;
}
