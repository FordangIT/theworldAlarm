import { faShareFromSquare } from "@fortawesome/free-solid-svg-icons";
import {
  faSquareMinus,
  faSquarePlus,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Icons() {
  return (
    <div className="">
      <FontAwesomeIcon
        icon={faShareFromSquare}
        className="mr-1 fa-xl text-blue-400 stroke-none"
      />
      <FontAwesomeIcon
        icon={faSquareMinus}
        className="mr-2 fa-xl text-slate-500 stroke-none"
      />
      <FontAwesomeIcon
        icon={faSquarePlus}
        className="fa-xl text-slate-500 stroke-none"
      />
    </div>
  );
}
