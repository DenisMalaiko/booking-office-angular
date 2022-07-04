// Modules
import {CommonModule} from "@angular/common";
import {NgModule} from '@angular/core';
import {SharedModule} from "../shared/shared.module";
import {HttpClient} from "@angular/common/http";
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {reducers} from "../store";
import {AuthEffects} from "../views/auth/store/auth.effects";
import {BookingEffects} from "../views/booking/store/booking.effects";
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../../environments/environment";

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([AuthEffects, BookingEffects]),
    AngularFireModule.initializeApp(environment.firebase),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      useDefaultLang: false,
    }),
  ]
})
export class CoreModule {
}
