import React, { PropsWithChildren } from "react";
interface ModalDefaultType {
  clickModal: () => void;
}
//알람 설정하는 창
export function Set_Alarm({ clickModal }: PropsWithChildren<ModalDefaultType>) {
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
    </div>
  );
}
