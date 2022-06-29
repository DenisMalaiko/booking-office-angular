import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

// Modules
import {SharedModule} from "../../shared/shared.module";
import {BookingRoutingModule} from "./booking-routing.module";

// Components
import {BookingComponent} from "./components/booking/booking.component";
import {BookingNavComponent} from "./components/booking-nav/booking-nav.component";
import {BookingTopComponent} from "./components/booking-top/booking-top.component";
import {BookingDevelopersComponent} from "./components/booking-developers/booking-developers.component";
import {BookingAdministratorsComponent} from "./components/booking-administrators/booking-administrators.component";

@NgModule({
  declarations: [
    BookingComponent,
    BookingNavComponent,
    BookingTopComponent,
    BookingDevelopersComponent,
    BookingAdministratorsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BookingRoutingModule
  ]
})

export class BookingModule {
}
