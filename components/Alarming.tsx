"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import alarmSounds from "../public/alarmSounds.mp3";
import { useAppSelector } from "@/hook/reduxHooks";
import { RootState } from "@/redux/store";
//해야할 것
//1. 소리를 먼저 나게 해야한다.
//2. redux로 가져온 알람 설정 시간과 현재 시간과 일치할 때 알람 소리를 울리게 한다.
export default function Alarming() {
  const [check, setCheck] = useState<HTMLAudioElement>();
  const checkClear = () => {
    check && check.play();
  };
  //ssr 방식이라 audio 객체 있는지 확인해야 한다. 맨 처음 렌더링 때 !
  useEffect(() => {
    setCheck(new Audio(alarmSounds));
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

  const [alarmTime, setAlarmTime] = useState(false);
  //모든 시간이 일치하면 alarmTime 값을 true로 바꿔준다.
  const alarmingTime = useCallback(() => {
    {
      ampmStand === alarmAmpm &&
      hourStand === alarmHour &&
      minutesStand === alarmMinutes
        ? setAlarmTime(true)
        : setAlarmTime(false);
    }
  }, [ampmStand, hourStand, minutesStand, alarmAmpm, alarmHour, alarmMinutes]);
  //알람설정 시간이 바뀔 때 alarmingTime 함수 실행
  useEffect(() => {
    alarmingTime();
  }, [alarmAmpm, alarmHour, alarmMinutes, alarmingTime]);
  const test = () => {
    console.log(ampmStand, hourStand, minutesStand);
  };
  const test2 = () => {
    console.log(alarmAmpm, alarmHour, alarmMinutes);
  };
  const mantoman = () => {
    console.log(ampmStand === alarmAmpm ? true : false);
    console.log(hourStand === alarmHour ? true : false);
    console.log(minutesStand === alarmMinutes ? true : false);
  };
  return (
    <div>
      {/* <button onClick={checkClear}>누르면 소리가 나나? </button>
      <button onClick={test}> 현재 시간 확인</button>
      <button onClick={test2}>알람 시간 확인</button>
      <button onClick={mantoman}>하나하나 뭐가 틀린지 알아보자</button> */}
      {alarmTime ? checkClear() : undefined}
    </div>
  );
}
