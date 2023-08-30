import GoAbout from "@/components/navbar";
import Modal_Alarm from "@/components/modal_alarm";
import Icons from "@/components/icons";
import dayjs from "dayjs";
import "dayjs/locale/ko";
dayjs.locale("ko");
import { useState, useEffect } from "react";
export default function Alarm() {
  let year: string = dayjs(new Date()).format("YYYY");
  let month: string = dayjs(new Date()).format("MM");
  let day: string = dayjs(new Date()).format("DD");
  let week: string = dayjs(new Date()).format("dddd");
  let hour: string = dayjs(new Date()).format("HH");
  let minute: string = dayjs(new Date()).format("mm");
  let second: string = dayjs(new Date()).format("ss");

  const [nowTime, setNowTime] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setNowTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <main className="bg-orange-50 text-center">
      <div className="flex justify-end items-start pt-8 pr-6">
        <Icons />
      </div>
      <div className="py-40">
        <div className="mb-4">
          <p className="text-3xl text-gray-500 ml-20">
            {year}년 {month}월 {day}일 {week}
          </p>
        </div>
        <div>
          <span className="text-5xl mr-4">
            {Number(hour) > 12 ? `오후` : `오전`}
          </span>
          <span className="text-9xl">
            {hour}:{minute}:{second}
          </span>
          <Modal_Alarm />
        </div>
      </div>
    </main>
  );
}
