import { REGISTER, REGISTER_SUCCESS, REGISTER_ERROR, GET_NATIONAL_REQUEST, GET_NATIONAL_SUCCESS,GET_NATIONAL_ERROR } from "../constants/index";

export function register(payload) {
    return {
        type: REGISTER,
        payload:payload
    }
};
export function registerSuccess(payload) {
    return {
        type: REGISTER_SUCCESS,
        payload: payload
    }
};

export function registerError(payload) {
    return {
        type: REGISTER_ERROR,
        payload: payload
    }
};

export function national() {
    console.log("action")
    return {
        type: GET_NATIONAL_REQUEST,
        
    }
};
export function nationalSuccess(payload) {
    return {
        type: GET_NATIONAL_SUCCESS,
        payload: payload
    }
};

export function nationalError(payload) {
    return {
        type: GET_NATIONAL_ERROR,
        payload: payload
    }
};

//   export const logout = () => (dispatch) => {
//     AuthService.logout();

//     dispatch({
//       type: LOGOUT,
//     });
//   };
