import { call, put } from 'redux-saga/effects';
import * as action from '../actions/index';
import { RegisterUser, countryNumber } from '../services/api'
import { registerSuccess,registerError,nationalSuccess,nationalError } from '../actions/index';



export function* registerUsersRequest(action) {
    try {
        const response = yield call(RegisterUser, action.payload)
        yield put(registerSuccess(response));
        return;
    } catch (errors) {
        const result = {
            status: 400,
            message: "email or password have been used"
        }
        yield put(registerError(result));
    }
}

export function* countryNumberRequest() {
    try {
        console.log("saga")
        const response = yield call(countryNumber)
        yield put(nationalSuccess(response.data.data));
        return;
    } catch (errors) {
        const result = {
            status: 400,
            message: "Faillll"
        }
        yield put(nationalError(result));
    }
}



