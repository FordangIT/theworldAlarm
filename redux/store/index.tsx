import { configureStore } from "@reduxjs/toolkit";

//Redux store의 새 인스턴스를 생성
//store에 대한 옵션과 기본 미들웨어를 지정할 수 있다
export const store = configureStore({
  reducer: {},
  devTools: process.env.NODE_ENV !== "production",
});

//store에서 type을 유추해서 새 상태를 추가하거나 미들웨어 설정을 변경할 때 최신 상태를 유지할 수 있다.
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
