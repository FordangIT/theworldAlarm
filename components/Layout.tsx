import Header from "./Header";
import Navbar from "./Navbar";
import Icons from "./Icons";
import { ReactNode } from "react";
interface Props {
  children: ReactNode;
}
export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <div className="flex">
        <div className="h-84">
          <Navbar />
        </div>
        <div className="bg-orange-50 w-full h-full">
          <div className="py-40 text-center pr-4 h-3/4">
            <div>{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}
