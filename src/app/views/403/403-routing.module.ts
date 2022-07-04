import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {Component403} from "./components/403/403.component";

export const routes: Routes = [
  {
    path: "",
    component: Component403
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingModule403 {
}
