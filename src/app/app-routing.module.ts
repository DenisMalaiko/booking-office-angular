import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AuthGuard} from "./core/helpers/auth.guard";

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
    canActivate: [AuthGuard]
  },
  {
    path: "403",
    loadChildren: () => import("./views/403/403.module").then(m => m.Module403)
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
export class AppRoutingModule {
}
