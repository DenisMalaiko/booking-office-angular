import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "auth/sign-in"
  },
  {
    path: "auth",
    loadChildren: () => import("./views/auth/auth.module").then(m => m.AuthModule),
  },
  {
    path: "booking",
    loadChildren: () => import("./views/booking/booking.module").then(m => m.BookingModule),
  },
  {
    path: "**",
    redirectTo: "auth/sign-in",
    pathMatch: "full"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
