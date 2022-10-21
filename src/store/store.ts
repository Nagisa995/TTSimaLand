import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authorizationReducer from "./reducers/authorization";

const rootReducer = combineReducers({
  authorizationReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
