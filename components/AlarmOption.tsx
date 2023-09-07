// //알람 설정하는 컴포넌트
// "use client";
// import React, { useContext } from "react";
// import { minutesNumber, hourNumber } from "../utils/fixNumber";
// import useSelect from "@/hook/useSelect";
// import { AlarmContext } from "@/Context/ContextAlarm";
// import { TYPE_ContextProps } from "@/Types/alarm";

// export const AlarmOption: React.FC = () => {
//   const [hour, setHour] = useSelect("Hour");
//   const [minutes, setMinutes] = useSelect("Minutes");
//   const [amPmOption, setAmPmOption] = useSelect("AM/PM");
//   const { setAlarmTime, pauseAlarm, hasAlarm, setHasAlarm } =
//     useContext(AlarmContext);
//   console.log("확인", useContext(AlarmContext));

//   const setAlarm = () => {
//     //토글 알람 off
//     if (hasAlarm) {
//       pauseAlarm();
//       setHasAlarm(false);
//       return;
//     }
//     //토글 알람 on
//     if (
//       !hour.includes("Hour") &&
//       !minutes.includes("Minutes") &&
//       !amPmOption.includes("AM/PM")
//     ) {
//       setHasAlarm(true);
//       setAlarmTime(`${hour} : ${minutes} : ${amPmOption}`);
//     }
//   };
//   return (
//     <div className="option-container">
//       <div className={`wrapper-option ${hasAlarm && "disable"}`}>
//         <select {...setHour}>
//           <option disabled value="Hour">
//             Hour
//           </option>
//           {hourNumber.map((hour, index) => (
//             <option key={index} value={hour}>
//               {hour}
//             </option>
//           ))}
//         </select>
//         <select {...setMinutes}>
//           <option disabled value="Minutes">
//             Minutes
//           </option>
//           {minutesNumber.map((minutes, index) => (
//             <option key={index} value={minutes}>
//               {minutes}
//             </option>
//           ))}
//         </select>
//         <select {...setAmPmOption}>
//           <option disabled value="AM/PM">
//             AM/PM
//           </option>
//           <option value="AM">AM</option>
//           <option value="PM">PM</option>
//         </select>
//       </div>
//       <button
//         onClick={setAlarm}
//         className={`setAlarm-btn ${hasAlarm && "play"}`}
//       >
//         {hasAlarm ? "Clear Alarm" : "Set Alarm"}
//       </button>
//     </div>
//   );
// };
