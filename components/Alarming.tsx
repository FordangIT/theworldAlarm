"use client";
import { useState, useEffect } from "react";
import alarmSounds from "../public/alarmSounds.mp3";
import { useAppSelector } from "@/hook/reduxHooks";
//set alarm에서 선택한 시간 값을 받아온다. 그 값이 현재 시간과 일치할 때 알람 소리를 울린다. !
export default function Alarming() {
  const sound = new Audio(alarmSounds);
  const [nowTime, setNowTime] = useState(new Date());
  const ampmStand = nowTime.getHours() > 12 ? `오후` : `오전`;
  const hourStand = nowTime.getHours();
  const minutesStand = nowTime.getMinutes();
  const [alarmState, setAlarmState] = useState<HTMLAudioElement>();
  const alarmAmpm = useAppSelector((state) => state.ampm);
  const soundHandler = () => {
    alarmState && sound.play();
  };
  useEffect(() => {
    const id = setInterval(() => {
      setNowTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    setAlarmState(new Audio(alarmSounds));
  }, []);
  const checking = () => {
    console.log(alarmAmpm);
  };
  return (
    <div>
      <div>
        {/* {ampm === ampmStand && hour === hourStand && minutes === minutesStand
          ? { soundHandler }
          : undefined} */}
        <button onClick={soundHandler} className="w-8 h-5 bg-black">
          {" "}
          누르면 소리가 나나?
        </button>
        <button onClick={checking}>데이터 가져오기 확인</button>
        {/* {ampmStand === && hourStand === && minutesStand === ? soundHandler() : } */}
      </div>
    </div>
  );
}
