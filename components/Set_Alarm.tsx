import React, { PropsWithChildren, useEffect } from "react";
import useSelect from "@/hook/useSelect";
import { useState, useRef } from "react";
import Alarming from "./Alarming";
import { useAppDispatch, useAppSelector } from "@/hook/reduxHooks";
import { wrapper } from "@/redux/store";
import { setAlarmState } from "@/redux/reducer/alarmSlice";
interface ModalDefaultType {
  clickModal: () => void;
}
const objAmPm = [
  { code: "오전", name: "오전", key: "key_1" },
  { code: "오후", name: "오후", key: "key_2" },
];
const objListHour = [
  { code: "01", name: "01", key: "key_1" },
  { code: "02", name: "02", key: "key_2" },
  { code: "03", name: "03", key: "key_3" },
  { code: "04", name: "04", key: "key_4" },
  { code: "05", name: "05", key: "key_5" },
  { code: "06", name: "06", key: "key_6" },
  { code: "07", name: "07", key: "key_7" },
  { code: "08", name: "08", key: "key_8" },
  { code: "09", name: "09", key: "key_9" },
  { code: "10", name: "10", key: "key_10" },
  { code: "11", name: "11", key: "key_11" },
  { code: "12", name: "12", key: "key_12" },
];
const objListMinutes = [
  { code: "00", name: "01", key: "key_0" },
  { code: "01", name: "01", key: "key_1" },
  { code: "02", name: "02", key: "key_2" },
  { code: "03", name: "03", key: "key_3" },
  { code: "04", name: "04", key: "key_4" },
  { code: "05", name: "05", key: "key_5" },
  { code: "06", name: "06", key: "key_6" },
  { code: "07", name: "07", key: "key_7" },
  { code: "08", name: "08", key: "key_8" },
  { code: "09", name: "09", key: "key_9" },
  { code: "10", name: "10", key: "key_10" },
  { code: "11", name: "11", key: "key_11" },
  { code: "12", name: "12", key: "key_12" },
  { code: "13", name: "01", key: "key_13" },
  { code: "14", name: "02", key: "key_14" },
  { code: "15", name: "03", key: "key_15" },
  { code: "16", name: "04", key: "key_16" },
  { code: "17", name: "05", key: "key_17" },
  { code: "18", name: "06", key: "key_18" },
  { code: "19", name: "07", key: "key_19" },
  { code: "20", name: "08", key: "key_20" },
  { code: "21", name: "09", key: "key_21" },
  { code: "22", name: "10", key: "key_22" },
  { code: "23", name: "11", key: "key_23" },
  { code: "24", name: "12", key: "key_24" },
  { code: "25", name: "01", key: "key_25" },
  { code: "26", name: "02", key: "key_26" },
  { code: "27", name: "03", key: "key_27" },
  { code: "28", name: "04", key: "key_28" },
  { code: "29", name: "05", key: "key_29" },
  { code: "30", name: "06", key: "key_30" },
  { code: "31", name: "07", key: "key_31" },
  { code: "32", name: "08", key: "key_32" },
  { code: "33", name: "09", key: "key_33" },
  { code: "34", name: "10", key: "key_34" },
  { code: "35", name: "11", key: "key_35" },
  { code: "36", name: "12", key: "key_36" },
  { code: "37", name: "01", key: "key_37" },
  { code: "38", name: "02", key: "key_38" },
  { code: "39", name: "03", key: "key_39" },
  { code: "40", name: "04", key: "key_40" },
  { code: "41", name: "05", key: "key_41" },
  { code: "42", name: "06", key: "key_42" },
  { code: "43", name: "07", key: "key_43" },
  { code: "44", name: "08", key: "key_44" },
  { code: "45", name: "09", key: "key_45" },
  { code: "46", name: "10", key: "key_46" },
  { code: "47", name: "11", key: "key_47" },
  { code: "48", name: "12", key: "key_48" },
  { code: "49", name: "01", key: "key_49" },
  { code: "50", name: "02", key: "key_50" },
  { code: "51", name: "03", key: "key_51" },
  { code: "52", name: "04", key: "key_52" },
  { code: "53", name: "05", key: "key_53" },
  { code: "54", name: "06", key: "key_54" },
  { code: "55", name: "07", key: "key_55" },
  { code: "56", name: "08", key: "key_56" },
  { code: "57", name: "09", key: "key_57" },
  { code: "58", name: "10", key: "key_58" },
  { code: "59", name: "11", key: "key_59" },
];

//알람 설정하는 창
export function Set_Alarm({ clickModal }: PropsWithChildren<ModalDefaultType>) {
  const dispatch = useAppDispatch();
  const alarmAmpm = useAppSelector((state) => state.alarmTimeSave.ampm);
  const alarmHour = useAppSelector((state) => state.alarmTimeSave.hour);
  const alarmMinutes = useAppSelector((state) => state.alarmTimeSave.minutes);
  const [dropDownListAmPm, setDropDownListAmPm] = useState([]);
  const [selectAmPmValue, setSelectAmPmValue] = useState();
  const [dropDownListHour, setDropDownListHour] = useState([]);
  const [selectHourValue, setSelectHourValue] = useState();
  const [dropDownListMinutes, setDropDownListMinutes] = useState([]);
  const [selectMinutesValue, setSelectMinutesValue] = useState();
  useEffect(() => {
    setDropDownListAmPm(objAmPm);
    setDropDownListHour(objListHour);
    setDropDownListMinutes(objListMinutes);
  }, []);

  return (
    <div className="fixed w-full h-full items-center justify-center ">
      {/*모달창 띄어진 상태에서 배경 누르면 모달창 꺼지게 한다.*/}
      <div
        className="fixed top-0 left-0 w-screen h-screen bg-black -z-10 opacity-30 "
        onClick={(e: React.MouseEvent) => {
          e.preventDefault();
          if (clickModal) {
            clickModal();
          }
        }}
      ></div>
      {/*모달창 흰색깔로*/}
      <div className="fixed w-96 h-64 bg-white">
        <div className="flex flex-col">
          <div className="py-4 px-3 mt-8">
            <select
              className="m-3 btn"
              onClick={(e) => {
                setSelectAmPmValue(e.target.value);
                dispatch(setAlarmState(selectAmPmValue));
              }}
            >
              {dropDownListAmPm.map(function (data) {
                return (
                  <option key={data.key} value={data.code}>
                    {data.name}
                  </option>
                );
              })}
            </select>
            <select
              className="ml-3 mr-1 btn"
              onClick={(e) => {
                setSelectHourValue(e.target.value);
                dispatch(setAlarmState(selectHourValue));
              }}
            >
              {dropDownListHour.map(function (data) {
                return (
                  <option key={data.key} value={data.code}>
                    {data.name}
                  </option>
                );
              })}
            </select>
            <span className="text-base">시</span>
            <select
              className="ml-3 mr-1 btn"
              onClick={(e) => {
                setSelectMinutesValue(e.target.value);
                dispatch(setAlarmState(selectMinutesValue));
              }}
            >
              {dropDownListMinutes.map(function (data) {
                return (
                  <option key={data.key} value={data.code}>
                    {data.name}
                  </option>
                );
              })}
            </select>
            <span className="text-base">분</span>
          </div>
          <div>
            <button
              className="px-4 py-2 mt-6 bg-blue-600 hover:bg-blue-400 text-white font-bold  rounded-full"
              onClick={(e: React.MouseEvent) => {
                e.preventDefault();
                if (clickModal) {
                  clickModal();
                }
              }}
            >
              알람 설정
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
