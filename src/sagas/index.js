import { takeLatest ,fork,put} from 'redux-saga/effects';
import login from './login.saga';

export default function* mySaga() {
    yield fork(login);
  }