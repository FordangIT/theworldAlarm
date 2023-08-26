import { useState } from "react";
import { Set_Alarm } from "./set_alarm";
export default function Modal_Alarm() {
  const [showModal, setShowModal] = useState(false);
  const clickModal = () => {
    setShowModal(!showModal);
  };
  return (
    <div>
      <button
        onClick={clickModal}
        className="my-8 ml-16 bg-blue-600 hover:bg-blue-400 text-white font-bold py-2 px-8 rounded-full"
      >
        Button
      </button>
      {showModal && <Set_Alarm />}
    </div>
  );
}
