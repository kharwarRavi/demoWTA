import { types } from "../../constants/types";

const intialState = {
  loading: false,
  loggedIn: false,
  error: false,
  data: "",
  logoutMessage: "",
  logoutError: "",
  refreshTokenUpdated: false,
};

export const login = (state = intialState, action) => {
  switch (action.type) {
    case types.POST_USER_CREDENTIALS:
      return {
        ...state,
        loading: true,
        loggedIn: false,
        error: false,
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        loggedIn: true,
        error: false,
        data: action.payload,
      };
    case types.LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        loggedIn: false,
        error: true,
        data: action.payload,
      };
    case types.USER_LOGOUT:
      return {
        ...state,
        logoutMessage: "",
        logoutError: "",
      };
    case types.USER_LOGOUT_SUCCESS:
      return {
        ...state,
        loggedIn: false,
        logoutMessage: action.payload,
        logoutError: "",
      };
    case types.USER_LOGOUT_ERROR:
      return {
        ...state,
        data: "",
        error: "",
        logoutMessage: "",
        logoutError: action.payload,
      };
    case types.GET_REFRESH_TOKEN:
      return {
        ...state,
      };
    case types.GET_REFRESH_TOKEN_SUCCESS:
      return {
        ...state,
        data: {
          ...state.data,
          access_token: action.payload,
        },
        refreshTokenUpdated: true,
      };
    case types.GET_REFRESH_TOKEN_ERROR:
      return {
        ...state,
        refreshTokenUpdated: false,
      };

    case types.CLEAR_LOGIN_STATE:
      return {
        ...state,
        loading: false,
        loggedIn: false,
        error: false,
        data: "",
        logoutMessage: "",
        logoutError: "",
        refreshTokenUpdated: false,
      };
    default:
      return state;
  }
};
