import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { watchRecipe } from "./Middleware/Middleware";
import AuthHook from "./Hook/AuthHook";

const sagaMiddleware = createSagaMiddleware();

const Store = configureStore({
  reducer: {
    AuthHook: AuthHook,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(watchRecipe);

export default Store;
