export interface BookingModel {
  user_id: any;
  table_id: number;
  time_start: Date;
  time_end: Date;
  id?: string;
  booking_id?: string;
  floor_id?: number;
}
