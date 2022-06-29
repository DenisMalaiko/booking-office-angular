import { Action } from "@ngrx/store";
import { UserModel } from "../../../shared/models/user.model";

export const SIGN_IN = "[AUTH] SIGN_IN";
export const SIGN_IN_START = "[AUTH] SIGN_IN_START";

export const SET_CURRENT_USER = "[AUTH] SET_CURRENT_USER";
export const SET_CURRENT_USER_START = "[AUTH] SET_CURRENT_USER_START";

export const SIGN_UP = "[AUTH] SIGN_UP";
export const SIGN_UP_START = "[AUTH] SIGN_UP_START";

export const SET_ERROR = "[AUTH] SET_ERROR";
export const CLEAR_ERROR = "[AUTH] CLEAR_ERROR";

export const LOG_OUT = "[AUTH] LOG_OUT";

export class SignIn implements Action {
  readonly type = SIGN_IN;
  constructor(public payload: any) {}
}

export class SignInStart implements Action {
  readonly type = SIGN_IN_START;
  constructor(public payload: { email: string, password: string }) {}
}

export class SetCurrentUser implements Action {
  readonly type = SET_CURRENT_USER;
  constructor(public payload: UserModel) {}
}

export class SetCurrentUserStart implements Action {
  readonly type = SET_CURRENT_USER_START;
  constructor(public payload: { email: string }) {}
}

export class SetError implements Action {
  readonly type = SET_ERROR;
  constructor(public payload: any) {}
}

export class ClearError implements Action {
  readonly type = CLEAR_ERROR;
  constructor() {}
}

export class SignUpStart implements Action {
  readonly type = SIGN_UP_START;
  constructor(public payload: UserModel) {}
}

export class LogOut implements Action {
  readonly type = LOG_OUT;
  constructor() {}
}

export type SignTypesActions =
  | SignIn
  | SignInStart
  | SignUpStart
  | SetCurrentUser
  | SetError
  | ClearError
  | LogOut;
