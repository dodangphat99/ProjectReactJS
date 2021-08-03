import { call, put } from 'redux-saga/effects';
import { loginUser } from '../services/api'
import * as action from '../actions/index';
import { signInSuccess,signInError } from '../actions/index';



export function* loginUsersRequest(action) {
    try {
        const response = yield call(loginUser, action.payload)
        yield put(signInSuccess(response));
        return;
    } catch (errors) {
        const result = {
            status: 400,
            message: "Email or password incorrect"

        }
        yield put(signInError(result));
    }
}