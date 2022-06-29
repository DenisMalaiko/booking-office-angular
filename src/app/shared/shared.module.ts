// Modules
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";


// Firebase
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";

// Material
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

// Components
import { BookingDialogComponent } from './components/booking-dialog/booking-dialog.component';
import { LoaderComponent } from "./components/loader/loader.component";
import { AlertComponent } from './components/alert/alert.component';

@NgModule({
  declarations: [
    LoaderComponent,
    AlertComponent,
    BookingDialogComponent
  ],
  entryComponents: [
    BookingDialogComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,

    AngularFireModule,
    AngularFireAuthModule,
    AngularFirestoreModule,

    MatNativeDateModule,
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
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,

    AngularFireModule,
    AngularFireAuthModule,
    AngularFirestoreModule,

    MatNativeDateModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatListModule,
    MatDatepickerModule,
    MatIconModule,
    MatDialogModule,

    LoaderComponent,
    AlertComponent,
    BookingDialogComponent
  ],
  providers: [],
})

export class SharedModule { }
