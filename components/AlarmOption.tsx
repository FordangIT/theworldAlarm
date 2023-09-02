//알람 설정하는 컴포넌트
import React, { useContext } from "react";
import { minutesNumber, hourNumber } from "../utils/fixNumber";
import useSelect from "@/hook/useSelect";
import { AlarmContext } from "@/Context/ContextAlarm";
import { TYPE_ContextProps } from "@/Types/alarm";
const AlarmOption = () => {
  const [hour, setHour] = useSelect("Hour");
  const [minutes, setMiutes] = useSelect("Minutes");
  const [amPmOption, setAmPmOption] = useSelect("AM/PM");
  const { setAlarmTime, pauseAlarm, hasAlarm, setHasAlarm } =
    useContext(AlarmContext);

  const setAlarm = () => {
    if (hasAlarm) {
      pauseAlarm();
      setHasAlarm(flase);
      return;
    }
    if (
      !hour.includes("Hour") &&
      !minutes.includes("Minutes") &&
      !amPmOption.includes("AM/PM")
    ) {
      setHasAlarm(true);
      setAlarmTime(`${hour} : ${minutes} : ${amPmOption}`);
    }
  };
  return (
    <div>
      <span>이따가</span>
    </div>
  );
};
