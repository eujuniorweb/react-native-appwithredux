import {
  all, takeEvery, call, put, select,
} from 'redux-saga/effects';

import api from '~/services/api';
import { navigate } from '~/services/navigation';

import * as LoginActions from '~/store/actions/login';
import * as RepositoriesActions from '~/store/actions/repositories';

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
function* loadRepositories() {
  try {
    const { username } = yield select(state => state.login);
    const response = yield call(api.get, `/users/${username}/repos`);
    yield put(RepositoriesActions.loadRepositoriesSuccess(response.data));
  } catch (error) {
    yield put(RepositoriesActions.loadRepositoriesFailure());
  }
}
export default function* rootSaga() {
  return yield all([
    takeEvery('LOGIN_REQUEST', login),
    takeEvery('LOAD_REPOSITORIES_REQUEST', loadRepositories),
  ]);
}
