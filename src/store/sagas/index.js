import {
  all, takeEvery, call, put,
} from 'redux-saga/effects';

import api from '~/services/api';
import { navigate } from '~/services/navigation';

import * as LoginActions from '~/store/actions/login';

function* login(action) {
  try {
    const { username } = action.payload;
    yield call(api.get, `/users/${username}`);
    yield put(LoginActions.loginSuccess(username));
    navigate('Repositories');
  } catch (error) {
    yield put(LoginActions.loginFailure());
  }
}
export default function* rootSaga() {
  return yield all([takeEvery('LOGIN_REQUEST', login)]);
}
