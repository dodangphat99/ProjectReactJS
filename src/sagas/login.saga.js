import { takeLatest, call, put } from 'redux-saga/effects';
import { loginUser } from '../services/api'
import * as action from '../actions/index';
import { signInSuccess } from '../actions/index';



function* loginUsersRequest(action) {
    try {
        const response = yield call(loginUser, action.payload)
        const dataSend = response.data;
        if (response.status == 202) {
            yield put(signInSuccess(dataSend));
            return;
        }
    } catch (errors) {
        yield console.log(`Error --> ${JSON.stringify(errors)}`)
    }
}
function* root() {
    yield takeLatest(action.signIn, loginUsersRequest)
}
export default root;