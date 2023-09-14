import React, { PropsWithChildren } from "react";
import useSelect from "@/hook/useSelect";
import { useRef } from "react";
interface ModalDefaultType {
  clickModal: () => void;
}
//알람 설정하는 창
export function Set_Alarm({ clickModal }: PropsWithChildren<ModalDefaultType>) {
  const dropDownRef = useRef(null);
  const [isOpen, setIsOpen] = useSelect(dropDownRef, false);
  const selectedRef = useRef(null);
  return (
    <div className="fixed w-full h-full items-center justify-center ">
      <div
        className="fixed top-0 left-0 w-screen h-screen bg-black -z-10 opacity-30 "
        onClick={(e: React.MouseEvent) => {
          e.preventDefault();
          if (clickModal) {
            clickModal();
          }
        }}
      ></div>
      <div className="fixed w-96 h-96 bg-white">
        <details className="dropdown mb-32">
          <summary className="m-1 btn" onClick={() => setIsOpen(!isOpen)}>
            시 설정
          </summary>
          <ul
            ref={dropDownRef}
            className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52"
          >
            <li onClick={dropDownRef.current}>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </details>
      </div>
    </div>
  );
}
