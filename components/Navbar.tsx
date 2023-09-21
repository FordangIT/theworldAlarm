"use client";
import Link from "next/link";
import { useRouter } from "next/router";
export default function Navbar() {
  const router = useRouter();
  return (
    <div className="h-full w-24 bg-white z-30 flex justify-start">
      <nav className="">
        <Link href="/">
          <div className="h-24">
            <div className="pt-10 pl-8">알람</div>
          </div>
        </Link>
        <Link href="/timerpage">
          <div className="h-24">
            <div className="pt-10 pl-6">타이머</div>
          </div>
        </Link>
        <Link href="/stopwatchpage">
          <div className="h-24">
            <div className="pt-10 pl-4">스톱워치</div>
          </div>
        </Link>
        <Link href="/clockpage">
          <div className="h-24">
            <div className="pt-10 pl-8">시계</div>
          </div>
        </Link>
      </nav>
    </div>
  );
}
