"use client";
import { useState, useEffect, useRef } from "react";
import alarmSounds from "../public/alarmSounds.mp3";
import { useAppSelector } from "@/hook/reduxHooks";
import { RootState } from "@/redux/store";
//set alarm에서 선택한 시간 값을 받아온다. 그 값이 현재 시간과 일치할 때 알람 소리를 울린다. !
export default function Alarming() {
  const sound = useRef<false | HTMLAudioElement>(
    typeof Audio !== "undefined" && new Audio(alarmSounds)
  );
  const [nowTime, setNowTime] = useState(new Date());
  const ampmStand = nowTime.getHours() > 12 ? `오후` : `오전`;
  const hourStand = nowTime.getHours();
  const minutesStand = nowTime.getMinutes();
  const [alarmState, setAlarmState] = useState<HTMLAudioElement>();
  const alarmAmpm = useAppSelector(
    (state: RootState) => state.alarmTimeSave.ampm
  );
  const alarmHour = useAppSelector(
    (state: RootState) => state.alarmTimeSave.hour
  );
  const alarmMinutes = useAppSelector((state) => state.alarmTimeSave.minutes);
  const soundPlayHandler = () => {
    sound.play();
  };
  const soundStopHandler = () => {
    console.log(sound.play());
  };
  useEffect(() => {
    const id = setInterval(() => {
      setNowTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  // useEffect(() => {
  //   setAlarmState(new Audio(alarmSounds));
  // }, []);

  return (
    <div>
      <div>
        <button onClick={soundPlayHandler} className="w-8 h-5 bg-black">
          누르면 소리가 나나?
        </button>
        {/* {ampmStand === alarmAmpm &&
          hourStand === alarmHour &&
          minutesStand === alarmMinutes &&
          ? soundPlayHandler() : } */}
      </div>
    </div>
  );
}
