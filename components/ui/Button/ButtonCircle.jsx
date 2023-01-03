import clsx from "clsx";
import Link from "next/link";
import styles from "./ButtonCircle.module.css";

export default function ButtonCircle({
  children,
  size = "default",
  href,
  onClick,
  isAccent,
}) {
  const buttonClass = clsx(
    styles.button,
    styles[size],
    isAccent && styles.accent
  );

  if (href) {
    return (
      <Link href={href} onClick={onClick} className={buttonClass}>
        {children}
      </Link>
    );
  }

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
}
