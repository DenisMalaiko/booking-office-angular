export interface OfficeModel {
  number: number,
  status: boolean,
  floor_id: number

  booking_id?: string;
  nameUser?: string;
  myBooking?: boolean;
  isMeetingRoom?: boolean;
}
