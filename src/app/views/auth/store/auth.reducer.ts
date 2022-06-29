import * as SignActions from "./auth.actions"
import { SignTypesActions } from "./auth.actions";
import { UserModel } from "../../../shared/models/user.model";

export interface State {
  token: any;
  error: any;
  userCurrent: UserModel;
  loading: boolean;
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
  loading: false,
}

export function authReducer(
  state: State = initialState,
  action: SignTypesActions
) {
  switch (action.type) {
    case SignActions.SIGN_IN:
      return {
        ...state,
        token: action.payload,
        loading: false,
        error: ""
      }
    case SignActions.SIGN_IN_START:
      return {
        ...state,
        loading: true
      }
    case SignActions.SIGN_UP_START:
      return {
        ...state,
        loading: true,
      }
    case SignActions.SET_CURRENT_USER:
      return {
        ...state,
        userCurrent: action.payload,
        loading: false,
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
        error: action.payload,
        loading: false
      }
    case SignActions.CLEAR_ERROR:
      return {
        ...state,
        error: "",
        loading: false,
      }
    default:
      return state;
  }
}
