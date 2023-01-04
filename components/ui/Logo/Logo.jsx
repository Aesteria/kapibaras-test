import Image from "next/image";
import Link from "next/link";
import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <Link href="/" className={styles.logo}>
      <Image fill src="/assets/logo.svg" alt="Kapibaras" />
    </Link>
  );
}
