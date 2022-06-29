import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {BookingComponent} from "./components/booking/booking.component";
import {BookingDevelopersComponent} from "./components/booking-developers/booking-developers.component";
import {BookingAdministratorsComponent} from "./components/booking-administrators/booking-administrators.component"

export const routes: Routes = [
  {
    path: "",
    component: BookingComponent,
    children: [
      {
        path: "developers",
        component: BookingDevelopersComponent
      },
      {
        path: "administrators",
        component: BookingAdministratorsComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingRoutingModule {
}
