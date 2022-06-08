import * as SignActions from "./auth.actions"
import { SignTypesActions } from "./auth.actions";
import { UserModel } from "../../../models/user.model";

export interface State {
  token: any;
  error: any;
  userCurrent: UserModel;
}

const initialState: State = {
  token: null,
  error: "",
  userCurrent: {
    id: "",
    name: "",
    email: "",
    role: "",
    password: ""
  },
}

export function authReducer(
  state: State = initialState,
  action: SignTypesActions
) {
  switch (action.type) {
    case SignActions.SIGN_IN:
      return {
        ...state,
        token: action.payload
      }
    case SignActions.SET_CURRENT_USER:
      return {
        ...state,
        userCurrent: action.payload
      }
    case SignActions.LOG_OUT:
      return {
        ...state,
        token: null,
        userCurrent: {
          id: "",
          name: "",
          email: "",
          role: "",
          password: ""
        },
      }
    case SignActions.SET_ERROR:
      return {
        ...state,
        error: action.payload
      }
    case SignActions.CLEAR_ERROR:
      return {
        ...state,
        error: ""
      }
    default:
      return state;
  }
}
