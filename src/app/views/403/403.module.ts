import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

// Modules
import {SharedModule} from "../../shared/shared.module";
import {RoutingModule403} from "./403-routing.module";

import {Component403} from "./components/403/403.component";

@NgModule({
  declarations: [
    Component403
  ],
  imports: [
    CommonModule,
    SharedModule,
    RoutingModule403
  ]
})

export class Module403 {
}
