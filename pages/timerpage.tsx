import dynamic from "next/dynamic";
import { createTimeModel, useTimeModel } from "react-compound-timer";

import { TimeModelValueView } from "../TimeModelValueView/TimeModelValueView";
const Model = dynamic(() => import("react-compound-timer"), {
  ssr: false,
});
const timer = createTimeModel({
  initialTime: 10000,
  direction: "backward",
});
export default function Timer() {
  const { value } = useTimeModel(timer);
  return (
    <>
      <div className="">
        {value.s} seconds {value.ms} milliseconds
      </div>
    </>
  );
}
