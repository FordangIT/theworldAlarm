"use client";
import Link from "next/link";
import { useRouter } from "next/router";
export default function Navbar() {
  const router = useRouter();
  console.log(router);
  return (
    <div className="h-full w-20 bg-slate-600 z-30">
      <nav>
        <Link href="/">
          <p>알람</p>
        </Link>
        <Link href="/timerpage">
          <p> 타이머</p>
        </Link>
        <Link href="/stopwatchpage">
          <p> 스톱워치</p>
        </Link>
        <Link href="/clockpage">
          <p>시계</p>
        </Link>
      </nav>
    </div>
  );
}
