import { all } from "redux-saga/effects";
import { loginSaga } from "./sagas";

export default function* rootSaga() {
  yield all([loginSaga()]);
}
