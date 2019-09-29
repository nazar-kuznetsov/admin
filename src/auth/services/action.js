import api from '../../middleware/api';
import {
  ADMIN_SIGN_IN_REQUEST,
  ADMIN_SIGN_IN_SUCCESS,
  ADMIN_SIGN_IN_ERROR
} from './constants';

/* Вход: email: password
=================================================================== */
export const signIn = user => async dispatch => {
  const { data } = await api.post('user/login', user);

  if (data.success) {
    localStorage.setItem('token', `Bearer ${data.token}`);
    dispatch({ type: ADMIN_SIGN_IN_SUCCESS, payload: data.user });
  } else {
    dispatch({ type: ADMIN_SIGN_IN_ERROR, payload: data.message });
  }
};

/* Востановить сессию: jwt token
=================================================================== */
export const authorization = token => async dispatch => {
  const { data } = await api.get('user/authorization', token);
  if (data.success) {
    dispatch({ type: ADMIN_SIGN_IN_SUCCESS, payload: data.user });
  }
};
