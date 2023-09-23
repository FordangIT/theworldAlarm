import Seo from "@/components/seo";
import { time } from "console";
import Icons from "@/components/Icons";
import { useRef, useState, useEffect } from "react";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
export const formatTime = (time: number): string => {
  const minutes = Math.floor(time / 6000);
  const seconds = Math.floor((time / 100) % 60);
  const milliseconds = (time % 100).toString().padStart(2, "0");
  return `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}:${milliseconds}`;
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
      <Seo title="Stopwatch" />
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
          <div className="py-40 text-center pr-4">
            <div className="text-9xl">{formatTime(time)}</div>
            <div className="mt-4">
              <button
                className="text-3xl bg-orange-600 py-2 px-3 mr-1"
                onClick={resetStopWatch}
              >
                Reset
              </button>
              <button
                className="text-3xl bg-green-800 py-2 px-3 ml-1"
                onClick={startStopWatch}
              >
                {running ? "Stop" : "Start"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
