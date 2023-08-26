import Link from "next/link";
import { useRouter } from "next/router";
export default function GoAbout() {
  const router = useRouter();
  console.log(router);
  return (
    <nav>
      <Link href="/about">
        <p> GoAbout</p>
      </Link>
    </nav>
  );
}
