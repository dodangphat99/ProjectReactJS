import { REGISTER, REGISTER_SUCCESS, REGISTER_ERROR } from "../constants/index";

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

//   export const logout = () => (dispatch) => {
//     AuthService.logout();

//     dispatch({
//       type: LOGOUT,
//     });
//   };
