import {
  PayloadAction,
  combineReducers,
  configureStore,
  ThunkAction,
  Action,
} from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import logger from "redux-logger";

const reducer = (state: any, action: PayloadAction<any>) => {
  return combineReducers({
    counter: counterReducer,
    [authSlice.name]: authSlice.reducer,
  })(state, action);
};

const makeStore = () => {
  configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware.concat(logger),
  });
};
const store = makeStore();

export const wrapper = createWrapper<AppStore>(makeStore, {
  debug: process.env.NODE_ENV === "development",
});
//store에서 type을 유추해서 새 상태를 추가하거나 미들웨어 설정을 변경할 때 최신 상태를 유지할 수 있다.
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action
>;
