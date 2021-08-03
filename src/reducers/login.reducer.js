import { SIGN_IN, SIGN_IN_SUCCESS, SIGN_IN_ERROR } from "../constants";
const initialLogin = {
  loginString: "",
  loginInformation: {
    password: "",
    facebookToken: "",
    googleToken: "",
  },
};
const initialLoginSuccess = {
  message: "",
  data: {
    access_token: "",
  },
};
const initialLoginError = {
  status: 0,
  message: "",
};
const initial = {
  login: initialLogin,
  loginSuccess: initialLoginSuccess,
  loginError: initialLoginError,
};
export function loginReducer(state = initial, action) {
  switch (action.type) {
    case SIGN_IN: {
      return {
        ...state,
      };
    }
    case SIGN_IN_SUCCESS: {
      return {
        ...state,
        loginSuccess: action.payload,
        loginError:{
          status:0
        }
      };
    }
    case SIGN_IN_ERROR: {
      return {
        ...state,
        loginError: action.payload,
        loginSuccess:""
      };
    }
    default:
      return state;
  }
}

export default loginReducer;
