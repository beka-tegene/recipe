import { call, put, takeLatest } from "redux-saga/effects";
import { toast } from "react-toastify";
import { Login, SignUp } from "../API/Auth";
import { setLoginData, setRegisterData } from "../Hook/AuthHook";
import {
  CreateRecipe,
  deleteRecipeById,
  getAllRecipes,
  likeProduct,
  updateRecipeById,
} from "../API/Recipe";
import {
  getAllRecipe,
  setCreateRecipeData,
  setDeleteRecipeData,
  setLikeRecipeData,
  setReviewRecipeData,
  setUpdateRecipeData,
} from "../Hook/RecipeHook";
import { createReview } from "../API/Review";

export function* watchRecipe() {
  yield takeLatest("auth/setRegister", fetchSetRegister);
  yield takeLatest("auth/setLogin", fetchSetLogin);
  yield takeLatest("recipe/setCreateRecipe", fetchCreateRecipe);
  yield takeLatest("recipe/getAllRecipeData", fetchGetRecipe);
  yield takeLatest("recipe/setLikeRecipe", fetchLikeRecipe);
  yield takeLatest("recipe/setDeleteRecipe", fetchDeleteRecipe);
  yield takeLatest("recipe/setReviewRecipe", fetchReviewRecipe);
  yield takeLatest("recipe/setUpdateRecipe", fetchUpdateRecipe);
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
    yield call(CreateRecipe, action.payload.data);
    yield setCreateRecipeData();
  } catch (error) {
    toast.error(error.response.data.msg);
  }
}

function* fetchGetRecipe(action) {
  try {
    const data = yield call(getAllRecipes);
    yield put(getAllRecipe(data));
  } catch (error) {
    toast.error(error.response.data.msg);
  }
}

function* fetchLikeRecipe(action) {
  try {
    yield call(likeProduct, action.payload.data);
    yield setLikeRecipeData();
  } catch (error) {
    toast.error(error.response.data.msg);
  }
}

function* fetchDeleteRecipe(action) {
  try {
    yield call(deleteRecipeById, action.payload.data);
    yield setDeleteRecipeData();
  } catch (error) {
    toast.error(error.response.data.msg);
  }
}

function* fetchReviewRecipe(action) {
  try {
    yield call(createReview, action.payload.data);
    yield setReviewRecipeData();
  } catch (error) {
    toast.error(error.response.data.msg);
  }
}

function* fetchUpdateRecipe(action) {
  try {
    yield call(updateRecipeById, action.payload.data);
    yield setUpdateRecipeData();
  } catch (error) {
    toast.error(error.response.data.msg);
  }
}