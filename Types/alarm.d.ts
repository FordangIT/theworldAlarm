import { Dispatch, SetStateAction } from "react";
export interface TYPE_ContextProps {
  hourDigital?: string;
  minutesDigital?: string;
  amPm?: string;
  dayNow?: string;
  monthNow?: string;
  yearNow?: string;
  alarmTime?: string;
  setAlarmTime?: Dispatch<SetStateAction<string>>;
  pauseAlarm?: Dispatch<SetStateAction<string>>;
  hasAlarm?: boolean;
  setHasAlarm?: Dispatch<SetStateAction<boolean>>;
}
export interface TYPE_ContextPropsAlarmOption {
  hasAlarm: boolean;
  pauseAlarm: Dispatch<SetStateAction<string>>;
  setHasAlarm: Dispatch<SetStateAction<boolean>>;
  setAlarmTime?: Dispatch<SetStateAction<string>>;
}
