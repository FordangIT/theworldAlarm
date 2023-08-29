import React, { PropsWithChildren } from "react";
interface ModalDefaultType {
  clickModal: () => void;
}
export function Set_Alarm({ clickModal }: PropsWithChildren<ModalDefaultType>) {
  return (
    <div className="fixed w-full h-full items-center justify-center ">
      <div className="mx-auto w-96 h-96 bg-white z-30 flex flex-col items-center border-none "></div>
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
