import { takeLatest,all } from 'redux-saga/effects';
import { loginUsersRequest } from './login.saga'
import { countryNumberRequest } from './register.saga'
import { SIGN_IN } from '../constants/login.constant'
import { GET_NATIONAL_REQUEST } from '../constants/register.constant'

export default function* mySaga() {
  yield all([
    takeLatest(SIGN_IN, loginUsersRequest),
    takeLatest(GET_NATIONAL_REQUEST, countryNumberRequest),
  ]);
  }