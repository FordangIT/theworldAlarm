import GoAbout from "@/components/navbar";
import Modal_Alarm from "@/components/modal_alarm";
import { faShareFromSquare } from "@fortawesome/free-solid-svg-icons";
import {
  faSquareMinus,
  faSquarePlus,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Alarm() {
  return (
    <main className="bg-orange-50 text-center">
      <FontAwesomeIcon icon={faShareFromSquare} />
      <FontAwesomeIcon icon={faSquareMinus} />
      <FontAwesomeIcon icon={faSquarePlus} />
      <div className="py-40">
        <div className="mb-4">
          <p className="text-3xl text-gray-500 ml-20">2023년 8월 25일 금요일</p>
        </div>
        <div>
          <span className="text-5xl mr-4">오후</span>
          <span className="text-9xl">4:52:50</span>
        </div>
        <Modal_Alarm />
        <GoAbout />
      </div>
    </main>
  );
}
