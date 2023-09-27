import {
  combineReducers,
  configureStore,
  AnyAction,
  CombinedState,
} from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import counterReducer from "../reducer/counterSlice";
import authSlice from "../reducer/authSlice";
import alarmSlice, { alarmReducer } from "../reducer/alarmSlice";
import logger from "redux-logger";
import { Reducer } from "react";

const reducer = (state: any, action: AnyAction): CombinedState => {
  if (action.type === HYDRATE) return { ...state, ...action.payload };
  const combineReducer = combineReducers({
    counter: counterReducer,
    alarmTimeSave: alarmReducer,
  });
  return combineReducer(state, action);
};

const makeStore = () =>
  configureStore({
    reducer: reducer as Reducer<CombinedState<RootState>, AnyAction>,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV === "development",
  });

const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = typeof store.dispatch;
export const wrapper = createWrapper(makeStore);
