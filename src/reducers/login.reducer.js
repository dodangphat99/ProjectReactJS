import { SIGN_IN, SIGN_IN_SUCCESS, SIGN_IN_ERROR } from "../constants";
const initialLogin = {
  pending: false,
  data: [],
  error: null,
};
export function loginReducer(state = initialLogin, action) {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        pending: true,
      };
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        pending: false,
        data: action.payload,
      };
    case SIGN_IN_ERROR:
      return {
        ...state,
        pending: false,
        data: action.error,
      };
    default:
      return state;
  }
};

export default loginReducer
