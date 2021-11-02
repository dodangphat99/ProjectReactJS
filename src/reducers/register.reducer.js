import {
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  GET_NATIONAL_REQUEST,
  GET_NATIONAL_SUCCESS,
  GET_NATIONAL_ERROR,
} from "../constants";
const initialRegister = {
  registerString: "",
  registerInformation: {
    fullname: "",
    email: "",
    password: "",
    dateofbirth: "",
    phonenumber: "",
  },
};
const initialRegisterSuccess = {
  message: "",
  data: {
    access_token: "",
  },
};
const initialRegisterError = {
  status: 0,
  message: "",
};
const initial = {
  register: initialRegister,
  registerSuccess: initialRegisterSuccess,
  registerError: initialRegisterError,
  nation: [],
};

export function registerReducer(state = initial, action) {
  switch (action.type) {
    case REGISTER: {
      return {
        ...state,
      };
    }
    case REGISTER_SUCCESS: {
      return {
        ...state,
        registerSuccess: action.payload,
        registerError: {
          status: 0,
        },
      };
    }
    case REGISTER_ERROR: {
      return {
        ...state,
        registerError: action.payload,
        registerSuccess: "",
      };
    }
    case GET_NATIONAL_REQUEST: {
      return {
        ...state,
      };
    }
    case GET_NATIONAL_SUCCESS: {
      return {
        ...state,
        nation: action.payload,
      };
    }
    case GET_NATIONAL_ERROR: {
      return {
        ...state,
        nation: action.payload,
      };
    }

    default:
      return state;
  }
}

export default registerReducer;
