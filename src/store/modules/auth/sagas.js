import { takeLatest, call, put, all } from 'redux-saga/effects';

import { loginSuccess } from './actions';

import api from '../../../services/api';
import history from '../../../services/history';

export function* login({ payload }){
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
        email,
        password
    });

    const { token, user } = response.data;

    yield put(loginSuccess(token, user));

    history.push('/home');
}

export default all([
    takeLatest('@auth/LOGIN_REQUEST', login)
]);