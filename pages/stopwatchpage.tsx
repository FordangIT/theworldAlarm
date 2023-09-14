import { time } from "console";
import { useRef, useState, useEffect } from "react";
export default function StopWatch() {
  const timerIdRef = useRef(0);
  const [count, setCount] = useState(0);

  const startHandler = () => {
    if (timerIdRef.current) {
      return;
    }
    timerIdRef.current = setInterval(() => setCount((c) => c + 1), 1000);
    console.log(timerIdRef);
    console.log(timerIdRef.current);
  };

  const stopHandler = () => {
    clearInterval(timerIdRef.current);
    timerIdRef.current = 0;
    console.log(timerIdRef);
    console.log(timerIdRef.current);
  };
  useEffect(() => {
    return () => clearInterval(timerIdRef.current);
  }, []);
  return (
    <div>
      <div>Timer : {count}</div>
      <div>
        <button onClick={startHandler}>start</button>
        <button onClick={stopHandler}>stop</button>
      </div>
    </div>
  );
}
