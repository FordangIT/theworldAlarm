"use client";
import { useState, useEffect, useCallback } from "react";
import { Set_Alarm } from "./Set_Alarm";

//알람설정 버튼 누르면 알람설정 창 나온다.

export default function Modal_Button() {
  const [showModal, setShowModal] = useState(false);
  const clickModal = useCallback(() => {
    setShowModal(!showModal);
  }, [showModal]);
  return (
    <div className="">
      {showModal && <Set_Alarm clickModal={clickModal}></Set_Alarm>}
      <button
        onClick={clickModal}
        className="my-8 ml-16 bg-blue-600 hover:bg-blue-400 text-white font-bold py-2 px-8 rounded-full"
      >
        알람 설정
      </button>
    </div>
  );
}
