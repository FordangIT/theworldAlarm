import React, { useState, useEffect, createContext } from "react";
import months from "@/public/data";

const alarm = new Audio("../public/mp3/alarmSounds.mp3");
export const AlarmContext = createContext<number | null>(null);
type TimeProps = {};
function ContextAlarm({ children }) {
  const [hourDigital, setHourDigital] = useState("");
  const [minutesDigital, setMinutesDigital] = useState("");
  const [amPm, setAmPm] = useState("");
  const [dayNow, setDayNow] = useState("");
  const [monthNow, setMonthNow] = useState("");
  const [yearNow, setYearNow] = useState("");
  const [alarmTime, setAlarmTime] = useState("");
  const [hasAlarm, setHasAlarm] = useState(false);

  useEffect(() => {
    setInterval(() => {
      let date = new Date(),
        HH = date.getHours(),
        MM = date.getMinutes(),
        day = date.getDate(),
        month = date.getMonth(),
        year = date.getFullYear(),
        ampm;

      if (HH >= 12) {
        HH = HH - 12;
        ampm = "PM";
      } else {
        ampm = "AM";
      }

      if (HH === 0) HH = 12;

      setHourDigital(String(HH));
      setMinutesDigital(String(MM));
      setAmPm(ampm);
      setDayNow(String(day));
      setMonthNow(String(months[month]));
      setYearNow(String(year));
    }, 1000);
  }, []);

  if (alarmTime === `${hourDigital}:${minutesDigital} ${amPm}`) {
    alarm.play();
    alarm.loop = true;
  }

  const pauseAlarm = () => {
    alarm.pause();
    setAlarmTime("");
  };

  return (
    <AlarmContext.Provider
      value={{
        hourDigital,
        minutesDigital,
        amPm,
        dayNow,
        monthNow,
        yearNow,
        alarmTime,
        setAlarmTime,
        pauseAlarm,
        hasAlarm,
        setHasAlarm,
      }}
    >
      {children}
    </AlarmContext.Provider>
  );
}

export default ContextAlarm;
