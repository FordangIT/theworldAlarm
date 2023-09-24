import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { HYDRATE } from "next-redux-wrapper";

interface AlarmState {
  ampm: string;
  hour: number;
  minutes: number;
}

const initialState: AlarmState = {
  ampm: "오전",
  hour: 0,
  minutes: 0,
};

const alarmSlice = createSlice({
  name: "alarmDataSave",
  initialState,
  reducers: {
    setAlarmState: (state, action: PayloadAction<AlarmState>) => {
      state.time = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
      };
    },
  },
});

const { actions, reducer: alarmReducer } = alarmSlice;
export const { setAlarmState } = actions;
export default alarmReducer;
