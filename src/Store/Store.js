import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { watchRecipe } from "./Middleware/Middleware";
import AuthHook from "./Hook/AuthHook";
import RecipeHook from "./Hook/RecipeHook";

const sagaMiddleware = createSagaMiddleware();

const Store = configureStore({
  reducer: {
    AuthHook: AuthHook,
    RecipeHook: RecipeHook,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(watchRecipe);

export default Store;
