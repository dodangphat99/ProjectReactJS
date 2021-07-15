import { SIGN_IN, SIGN_IN_SUCCESS, SIGN_IN_ERROR } from "../constants/index";

export function signIn(payload) {
    return {
        type: SIGN_IN,
        payload:payload
    }
};
export function signInSuccess(payload) {
    return {
        type: SIGN_IN_SUCCESS,
        payload: payload
    }
};

export function signInError(payload) {
    return {
        type: SIGN_IN_ERROR,
        payload: payload
    }
};

//   export const logout = () => (dispatch) => {
//     AuthService.logout();

//     dispatch({
//       type: LOGOUT,
//     });
//   };
