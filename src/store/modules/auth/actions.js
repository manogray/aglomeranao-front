export function loginRequest(email, password){
    return {
        type: '@auth/LOGIN_REQUEST',
        payload: { email, password },
    };
}

export function loginSuccess(token, user){
    return {
        type: '@auth/LOGIN_SUCCESS',
        payload: { token, user },
    };
}

export function authFailure() {
    return {
        type: '@auth/AUTH_FAILURE',
    };
}