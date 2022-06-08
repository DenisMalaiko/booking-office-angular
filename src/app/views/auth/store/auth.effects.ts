import { Actions, Effect, ofType } from "@ngrx/effects";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import * as AuthActions from "./auth.actions"
import {catchError, from, map, mergeMap, of, switchMap} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    public auth: AngularFireAuth,
    public db: AngularFirestore
  ) {}

  @Effect()
  signIn = this.actions$.pipe(
    ofType(AuthActions.SIGN_IN_START),
    switchMap((authData: AuthActions.SignInStart) => {
      return from(
        this.auth.signInWithEmailAndPassword(authData.payload.email, authData.payload.password)
      ).pipe(
        map((firebaseUser: any) => {
          return from(firebaseUser.user.getIdTokenResult());
        }),
        map(token => {
          return new AuthActions.SignIn(token);
        }),
        catchError(error => {
          return of(new AuthActions.SetError(error));
        }),
      )
    }),
  )

  @Effect()
  setCurrentUser = this.actions$.pipe(
    ofType(AuthActions.SET_CURRENT_USER_START),
    switchMap((userDate: AuthActions.SetCurrentUserStart) => {
      return this.db.collection('users', ref => {
        return ref.where('email', '==', userDate.payload.email)
      }).stateChanges()
    }),
    mergeMap(actions => actions),
    map(action => {
      let data: any = action.payload.doc.data();
      data.id = action.payload.doc.id;
      return new AuthActions.SetCurrentUser(data);
    }),
    catchError(error => {
      return of(new AuthActions.SetError(error));
    })
  )

  @Effect()
  signUp = this.actions$.pipe(
    ofType(AuthActions.SIGN_UP_START),
    switchMap((userDate: AuthActions.SignUpStart) => {
      return from (
        this.auth.createUserWithEmailAndPassword(userDate.payload.email, userDate.payload.password)
      ).pipe(
        map(() => {
          return this.db.collection('users').add(userDate.payload)
        }),
        map(() => {
          return new AuthActions.ClearError();
        }),
        catchError(error => {
          return of(new AuthActions.SetError(error));
        })
      )
    })
  )
}
