import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <Image width="45" height="45" src="/assets/logo.svg" alt="Kapibaras" />
    </Link>
  );
}
