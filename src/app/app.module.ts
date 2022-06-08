import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from "@angular/forms"
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { StoreModule} from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
import { environment } from '../environments/environment';

import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

import { AuthComponent } from './views/auth/auth.component';
import { BookingComponent } from './views/booking/booking.component';

import { BookingDialogComponent } from './components/booking-dialog/booking-dialog.component';
import { LoaderComponent } from "./components/loader/loader.component";
import { AlertComponent } from './components/alert/alert.component';
import { reducers } from "./store";
import { AuthEffects } from "./views/auth/store/auth.effects";
import { BookingEffects } from "./views/booking/store/booking.effects";

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    BookingComponent,
    BookingDialogComponent,
    LoaderComponent,
    AlertComponent,
  ],
  entryComponents: [
    BookingDialogComponent
  ],
  imports: [
    BrowserModule,

    AngularFireModule.initializeApp(environment.firebase),
    AngularFireModule,
    AngularFireAuthModule,
    AngularFirestoreModule,

    AppRoutingModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([AuthEffects, BookingEffects]),
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatListModule,
    MatDatepickerModule,
    MatIconModule,
    MatDialogModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
