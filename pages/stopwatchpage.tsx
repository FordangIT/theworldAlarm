import { time } from "console";
import Icons from "@/components/Icons";
import { useRef, useState, useEffect } from "react";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
export default function StopWatch() {
  const timerIdRef = useRef(0);
  const [count, setCount] = useState(0);

  const startHandler = () => {
0
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
          <div className="py-40 text-center pr-4">
            <div>Timer : {count}</div>
            <div>
              <button onClick={startHandler}>start</button>
              <button onClick={stopHandler}>stop</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
