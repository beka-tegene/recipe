import { call, takeLatest } from "redux-saga/effects";
import { toast } from "react-toastify";
import { Login, SignUp } from "../API/Auth";
import { setLoginData, setRegisterData } from "../Hook/AuthHook";
import { CreateRecipe } from "../API/Recipe";
import { setCreateRecipeData } from "../Hook/RecipeHook";

export function* watchRecipe() {
  yield takeLatest("auth/setRegister", fetchSetRegister);
  yield takeLatest("auth/setLogin", fetchSetLogin);
  yield takeLatest("recipe/setCreateRecipe", fetchCreateRecipe);
}

// Authentication and Authorization data

function* fetchSetRegister(action) {
  try {
    yield call(SignUp, action.payload.data);
    yield setRegisterData();
  } catch (error) {
    toast.error(error.response.data.msg);
  }
}

function* fetchSetLogin(action) {
  try {
    yield call(Login, action.payload.data);
    yield setLoginData();
  } catch (error) {
    toast.error(error.response.data.msg);
  }
}

function* fetchCreateRecipe(action) {
  try {
    yield call(CreateRecipe, action.payload);
    yield setCreateRecipeData();
  } catch (error) {
    toast.error(error.response.data.msg);
  }
}
