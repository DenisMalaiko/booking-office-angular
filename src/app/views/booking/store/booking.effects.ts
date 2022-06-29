import { Actions, Effect, ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";

import * as BookingActions from "./booking.actions"
import { from, map, switchMap } from "rxjs";
import * as moment from "moment";

@Injectable()
export class BookingEffects {
  constructor(
    public actions$: Actions,
    public db: AngularFirestore
  ) {
  }

  @Effect()
  getBooking = this.actions$.pipe(
    ofType(BookingActions.GET_BOOKINGS),
    switchMap((bookingData: BookingActions.GetBookings) => {
      return from(
        this.db.collection("booking").snapshotChanges()
      ).pipe(
        map((bookings) => {
          const dateCurrent = moment(bookingData.payload).format('L');
          let result: any = [];
          bookings.forEach(b => {
            const book: any = b.payload.doc.data()
            const start = moment(book.time_start?.seconds * 1000).format('L');
            const end = moment(book.time_end?.seconds * 1000).format('L');
            if(start <= dateCurrent && end >= dateCurrent) {
              book.id = b.payload.doc.id
              book.time_start = moment(book.time_start.seconds * 1000).toDate()
              book.time_end = moment(book.time_end.seconds * 1000).toDate()
              result.push(book)
            }
          });
          return new BookingActions.SetBookings(result)
        })
      )
    }),
  )

  @Effect()
  getOffice = this.actions$.pipe(
    ofType(BookingActions.GET_OFFICE),
    switchMap((floor: BookingActions.GetOffice) => {
      return from(
        this.db.collection('office', ref => {
          return ref.where('floor_id', '==', floor.payload).orderBy('number')
        }).valueChanges()
      ).pipe(
        map((officeCollection) => {
          return new BookingActions.SetOffice(officeCollection);
        })
      )
    })
  )

  @Effect()
  addBooking = this.actions$.pipe(
    ofType(BookingActions.ADD_BOOKING),
    switchMap((bookingData: BookingActions.AddBooking) => {
      return from(
        this.db.collection('booking').add(bookingData.payload)
      ).pipe(
        map(() => {
          const dateCurrent = moment(new Date()).format('L');
          return new BookingActions.GetBookings(dateCurrent)
        }),
        map(() => {
          return new BookingActions.AddBookingMessage("You have success added booking!")
        })
      )
    })
  )

  @Effect()
  deleteBooking = this.actions$.pipe(
    ofType(BookingActions.DELETE_BOOKING),
    switchMap((idBooking: BookingActions.DeleteBooking) => {
      const id = String(idBooking.payload);
      return from(
        this.db.collection('booking').doc(id).delete()
      ).pipe(
        map(() => {
          return new BookingActions.AddBookingMessage("You have success delete booking!")
        })
      )
    })
  )

  @Effect()
  updateBooking = this.actions$.pipe(
    ofType(BookingActions.UPDATE_BOOKING),
    switchMap((bookingData: BookingActions.UpdateBooking) => {
      return from(
        this.db.collection('booking').doc(bookingData.payload.booking_id).update({
          ...bookingData.payload
        })
      ).pipe(
        map(() => {
          return new BookingActions.AddBookingMessage("You have success update booking!")
        })
      )
    })
  )
}
