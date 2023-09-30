"use client";
import { useState, useEffect, useRef } from "react";
import alarmSounds from "../public/alarmSounds.mp3";
import { useAppSelector } from "@/hook/reduxHooks";
import { RootState } from "@/redux/store";
//해야할 것
//1. 소리를 먼저 나게 해야한다.
//2. redux로 가져온 알람 설정 시간과 현재 시간과 일치할 때 알람 소리를 울리게 한다.
export default function Alarming() {
  const [check, setCheck] = useState<HTMLAudioElement>();
  const [alarmTime, setAlarmTime] = useState(false);
  const checkClear = () => {
    check && check.play();
  };
  useEffect(() => {
    setCheck(new Audio(alarmSounds));
    alarmingTime();
  }, []);

  const [nowTime, setNowTime] = useState(new Date());
  const ampmStand = nowTime.getHours() > 12 ? `오후` : `오전`;
  const firstHourStand =
    nowTime.getHours() > 12 ? nowTime.getHours() - 12 : nowTime.getHours();
  const hourStand =
    firstHourStand < 10 ? `0` + String(firstHourStand) : firstHourStand;
  const minutesStand =
    nowTime.getMinutes() < 10
      ? `0` + String(nowTime.getMinutes())
      : String(nowTime.getMinutes());

  const alarmAmpm = useAppSelector(
    (state: RootState) => state.alarmTimeSave.ampm
  );
  const alarmHour = useAppSelector(
    (state: RootState) => state.alarmTimeSave.hour
  );
  const alarmMinutes = useAppSelector((state) => state.alarmTimeSave.minutes);

  useEffect(() => {
    const id = setInterval(() => {
      setNowTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const alarmingTime = () => {
    {
      ampmStand === alarmAmpm &&
      hourStand === alarmHour &&
      minutesStand === alarmMinutes
        ? setAlarmTime(true)
        : setAlarmTime(false);
    }
  };

  const test = () => {
    console.log(ampmStand, hourStand, minutesStand);
  };
  return (
    <div>
      <button onClick={checkClear}>누르면 소리가 나나? </button>
      <button onClick={test}> 들어오는 시간 확인</button>
      <div>{minutesStand === alarmMinutes ? "맞아" : "틀려"}</div>
      {alarmTime ? checkClear() : undefined}
    </div>
  );
}
