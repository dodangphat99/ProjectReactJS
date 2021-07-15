import { takeLatest,all } from 'redux-saga/effects';
import { loginUsersRequest } from './login.saga'
import { SIGN_IN } from '../constants/login.constant'

export default function* mySaga() {
  yield all([
    takeLatest(SIGN_IN, loginUsersRequest),
  ]);
  }