// General Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from "./shared/shared.module";
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

// Components
import {StoreModule} from "@ngrx/store";
import {reducers} from "./store";
import {EffectsModule} from "@ngrx/effects";
import {AuthEffects} from "./views/auth/store/auth.effects";
import {BookingEffects} from "./views/booking/store/booking.effects";
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../environments/environment";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([AuthEffects, BookingEffects]),
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
