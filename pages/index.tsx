import GoAbout from "@/components/navbar";
import Modal_Alarm from "@/components/modal_alarm";
import Icons from "@/components/icons";
import dayjs from "dayjs";
dayjs.locale("ko");
import { useState, useEffect } from "react";
export default function Alarm() {
  let year: string = dayjs().format("YYYY");
  let month: string = dayjs().format("MM");
  let day: string = dayjs().format("DD");
  let week: string = dayjs().format("dddd");
  let hour: string = dayjs().format("HH");
  let minute: string = dayjs().format("mm");
  let second: string = dayjs().format("ss");
  const [nowTime, setNowTime] = useState(Date.now());

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
          <span className="text-5xl mr-4">오후</span>
          <span className="text-9xl">
            {hour}:{minute}:{second}
          </span>
          <Modal_Alarm />
        </div>
      </div>
    </main>
  );
}
