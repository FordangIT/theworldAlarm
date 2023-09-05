import React, { PropsWithChildren } from "react";
import { AlarmOption } from "./AlarmOption";
interface ModalDefaultType {
  clickModal: () => void;
}
export function Set_Alarm({ clickModal }: PropsWithChildren<ModalDefaultType>) {
  return (
    <div className="fixed w-full h-full items-center justify-center ">
      <AlarmOption />
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
