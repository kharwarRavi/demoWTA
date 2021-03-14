import { types } from "../../constants/types";

export const login = (data) => {
  return {
    type: types.POST_USER_CREDENTIALS,
    payload: data,
  };
};

export const googleLogin = (data) => {
  return {
    type: types.GOOGLE_USER_CREDENTIALS,
    payload: data,
  };
};

export const loginSuccess = (user) => {
  return {
    type: types.LOGIN_SUCCESS,
    payload: user,
  };
};

export const logout = () => {
  return {
    type: types.USER_LOGOUT,
  };
};

export const clearLoginState = () => {
  return {
    type: types.CLEAR_LOGIN_STATE,
  };
};

export const EnableSessionExpiry = (data) => {
  return {
    type: types.SESSION_EXPIRY_SUCCESS,
    payload: data,
  };
};

export const clearSessionExpiry = () => {
  return {
    type: types.CLEAR_SESSION_EXPIRY,
  };
};
