"use client";
import React, { useState, useEffect, createContext } from "react";
import months from "@/public/data";
import { TYPE_ContextProps } from "@/Types/alarm";
const alarm = new Audio();
alarm.src = "/alarmSounds.mp3";
//alarm.play() // 재생
//alarm.pause() // 정지

export const AlarmContext = createContext<TYPE_ContextProps | null>(null);

type ContextProviderProps = {
  children: React.ReactNode;
};
export const ContextAlarm = ({ children }: ContextProviderProps) => {
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
};
