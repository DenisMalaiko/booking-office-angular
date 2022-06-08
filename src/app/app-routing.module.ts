import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthComponent } from "./views/auth/auth.component";
import { BookingComponent } from "./views/booking/booking.component";

const routes: Routes = [
  {path: "", component: AuthComponent},
  {path: "booking", component: BookingComponent},
  {path: "**", redirectTo: "", pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
