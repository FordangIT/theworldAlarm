import { time } from "console";
import Icons from "@/components/Icons";
import { useRef, useState, useEffect } from "react";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
export const formatTime = (timeInMillis: number): string => {
  const hours = Math.floor(timeInMillis / 3600000);
  const minutes = Math.floor((timeInMillis % 360000) / 60000);
  const seconds = Math.floor((timeInMillis % 60000) / 1000);
  const formattedTime = `${hours}:${minutes < 10 ? "0" : ""}${minutes}:${
    seconds < 10 ? "0" : ""
  }${seconds}`;
  return formattedTime;
};
export default function StopWatch() {
  const [running, setRunning] = useState<boolean>(false);
  const [time, setTime] = useState<number>(0);
  const [laps, setLaps] = useState<number[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | undefined>(undefined);
  const startStopWatch = () => {
    if (!running) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
      setRunning(!running);
    } else {
      clearInterval(intervalRef.current);
      setRunning(!running);
    }
  };
  const resetStopWatch = () => {
    clearInterval(intervalRef.current);
    setTime(0);
    setLaps([]);
    setRunning(false);
  };
  const recordLap = () => {
    const newLap = {
      id: laps.length === 0 ? 1 : laps[laps.length - 1].id + 1,
      lap: time,
    };
    setLaps((prevLaps) => [...prevLaps, newLap]);
  };
  return (
    <div>
      <Header />
      <div className="flex">
        <div className="h-84">
          <Navbar />
        </div>
        <div className="bg-orange-50 w-full">
          <div className="flex justify-end items-start pt-8 pr-3">
            <Icons />
          </div>
          {/*여기부터가 스톱워치 만드는 부분*/}
          <div gap={12}>
            <div>{formatTime(time)}</div>
            <div>
              <button onClick={startStopWatch}>
                {running ? "Stop" : "Start"}
              </button>

              <button onClick={resetStopWatch}>Reset</button>
            </div>
            <div laps={laps} setLaps={setLaps}></div>
            {running && <button onClick={recordLap}>Lap</button>}
          </div>
        </div>
      </div>
    </div>
  );
}
