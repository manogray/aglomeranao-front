import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { loginSuccess, authFailure } from './actions';

import api from '../../../services/api';
import history from '../../../services/history';

export function* login({ payload }){
    try {
        const { email, password } = payload;

        const response = yield call(api.post, 'sessions', {
            email,
            password
        });

        const { token, user } = response.data;

        yield put(loginSuccess(token, user));

        history.push('/home');

    }catch(err){
        toast.error('Falha na autenticação');
        yield put(authFailure());
    }
}

export default all([
    takeLatest('@auth/LOGIN_REQUEST', login)
]);