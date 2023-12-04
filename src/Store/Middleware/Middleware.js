import { call, takeLatest } from "redux-saga/effects";
import { toast } from "react-toastify";
import { Login, SignUp } from "../API/AuthApi";
import { setLoginData, setRegisterData } from "../Store/AuthStore";

export function* watchRecipe() {
  yield takeLatest("auth/setRegister", fetchSetRegister);
  yield takeLatest("auth/setLogin", fetchSetLogin);
}

// Authentication and Authorization data

function* fetchSetRegister(action) {
  try {
    yield call(SignUp, action.payload);
    yield setRegisterData();
  } catch (error) {
    toast.error(error.response.data.msg);
  }
}

function* fetchSetLogin(action) {
  try {
    yield call(Login, action.payload);
    yield setLoginData();
  } catch (error) {
    toast.error(error.response.data.msg);
  }
}
