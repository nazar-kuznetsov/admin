import {
  ADMIN_SIGN_IN_SUCCESS,
  ADMIN_SIGN_IN_ERROR,
  ADMIN_SIGN_OUT
} from './constants';

const initialState = {
  user: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADMIN_SIGN_IN_SUCCESS:
      return {
        ...state,
        user: action.payload
      };
    case ADMIN_SIGN_IN_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case ADMIN_SIGN_OUT:
      return {
        ...state,
        user: null
      };
    default: return state;
  }
};

