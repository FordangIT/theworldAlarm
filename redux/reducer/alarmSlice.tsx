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
    setAlarmAmpm: (state, action: PayloadAction<string>) => {
      state.ampm = action.payload;
    },
    setAlarmHour: (state, action: PayloadAction<number>) => {
      state.hour = action.payload;
    },
    setAlarmMinutes: (state, action: PayloadAction<number>) => {
      state.minutes = action.payload;
    },
  },
});

export const { actions, reducer: alarmReducer } = alarmSlice;
export const { setAlarmAmpm, setAlarmHour, setAlarmMinutes } =
  alarmSlice.actions;
export default alarmSlice.reducer;
