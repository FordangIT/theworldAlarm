import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

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

export const alarmSlice = createSlice({
  name: "alarm",
  initialState,
  reducers: {
    setAlarm: (state, action: PayloadAction<AlarmState>) => {
      state.ampm = action.payload.ampm;
      state.hour = action.payload.hour;
      state.minutes = action.payload.minutes;
    },
  },
});

export const { setAlarm } = alarmSlice.actions;

export const selectAmpm = (state: RootState) => state.alarm.ampm;
export const selectHour = (state: RootState) => state.alarm.hour;
export const selectMinutes = (state: RootState) => state.alarm.minutes;

export default alarmSlice.reducer;
