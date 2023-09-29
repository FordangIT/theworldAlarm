"use client";
import { useState, useEffect, useRef } from "react";
import alarmSounds from "../public/alarmSounds.mp3";
import { useAppSelector } from "@/hook/reduxHooks";
import { RootState } from "@/redux/store";
//해야할 것
//1. 소리를 먼저 나게 해야한다.
//2. redux로 가져온 알람 설정 시간과 현재 시간과 일치할 때 알람 소리를 울리게 한다.
export default function Alarming() {
  const [playing, setPlaying] = useState<boolean>(false);
  const [sound] = useState<false | HTMLAudioElement>(
    typeof Audio !== "undefined" && new Audio(alarmSounds)
  );
  useEffect(() => {
       playing &&
       ampmStand === alarmAmpm &&
       hourStand === alarmHour &&
       minutesStand === alarmMinutes &&
      ? sound.play() : sound.pause()
  }, [alarmHour, alarmMinutes, alarmAmpm]);

  const alarmSound = new Audio(alarmSounds);
  const [nowTime, setNowTime] = useState(new Date());
  const ampmStand = nowTime.getHours() > 12 ? `오후` : `오전`;
  const hourStand = nowTime.getHours();
  const minutesStand = nowTime.getMinutes();

  const alarmAmpm = useAppSelector(
    (state: RootState) => state.alarmTimeSave.ampm
  );
  const alarmHour = useAppSelector(
    (state: RootState) => state.alarmTimeSave.hour
  );
  const alarmMinutes = useAppSelector((state) => state.alarmTimeSave.minutes);

  // const soundPlayHandler = () => {};
  // const soundStopHandler = () => {
  //   console.log(sound.play());
  // };
  useEffect(() => {
    const id = setInterval(() => {
      setNowTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {}, []);

  return (
    <div>
      <div>
        {/* <button onClick={soundPlayHandler} className="w-8 h-5 bg-black">
          누르면 소리가 나나?
        </button> */}
        {/* {ampmStand === alarmAmpm &&
          hourStand === alarmHour &&
          minutesStand === alarmMinutes &&
          ? soundPlayHandler() : } */}
      </div>
    </div>
  );
}
