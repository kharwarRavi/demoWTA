import { put, call, all, takeEvery } from "redux-saga/effects";
import { types } from "../../constants/types";
import { Login } from "../../services";

function* login(action) {
  try {
    const response = yield call(Login.login, action);
    if (response.status === 200 && !response.msg) {
      const user = yield response.json();
    //   let userPriviligeObj = {};
    //   Object.keys(userPriviliges).forEach((key) => {
    //     if (
    //       (user.role.privilege & userPriviliges[key]) ===
    //       userPriviliges[key]
    //     ) {
    //       userPriviligeObj = {
    //         ...userPriviligeObj,
    //         [key]: true,
    //       };
    //     } else {
    //       userPriviligeObj = {
    //         ...userPriviligeObj,
    //         [key]: false,
    //       };
    //     }
    //   });
      yield put({
        type: types.LOGIN_SUCCESS,
        payload: {
          access_token: user.access_token,
          refresh_token: user.refresh_token,
          id: user.id,
          name: user.name,
          role: user.role,
          username: user.username,
        //   userPriviliges: userPriviligeObj,
        },
      });
    } else if (response.msg && response.msg === "Token has expired") {
      yield put({
        type: types.SESSION_EXPIRY_SUCCESS,
        payload: true,
      });
    } else {
      const error = yield response.json();
      throw error;
    }
  } catch (error) {
    yield put({
      type: types.LOGIN_ERROR,
      payload: error,
    });
  }
}

function* logout(action) {
  try {
    const { data, error } = yield call(Login.logout, action.payload);
    if (data.msg === "Successfully logged out") {
      // localStorage.clear();
      yield put({
        type: types.USER_LOGOUT_SUCCESS,
        payload: data.msg,
      });
    } else {
      yield put({
        type: types.USER_LOGOUT_ERROR,
        payload: error,
      });
    }
  } catch (error) {
    yield put({
      type: types.USER_LOGOUT_ERROR,
      payload: error,
    });
  }
}

function* getRefreshToken(action) {
  try {
    const response = yield call(Login.getRefreshToken, action);
    if (response.status === 200 && !response.msg) {
      const data = yield response.json();
      yield put({
        type: types.GET_REFRESH_TOKEN_SUCCESS,
        payload: data.access_token,
      });
    } else if (response.msg && response.msg === "Token has expired") {
      yield put({
        type: types.SESSION_EXPIRY_SUCCESS,
        payload: true,
      });
    } else {
      const error = yield response.json();
      throw error;
    }
  } catch (error) {
    yield put({
      type: types.GET_REFRESH_TOKEN_ERROR,
      payload: error,
    });
  }
}

export function* loginSaga() {
  yield all([
    takeEvery(types.POST_USER_CREDENTIALS, login),
    takeEvery(types.USER_LOGOUT, logout),
    takeEvery(types.GET_REFRESH_TOKEN, getRefreshToken),
  ]);
}
