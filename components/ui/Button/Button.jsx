import styles from "./Button.module.css";
import clsx from "clsx";
import Link from "next/link";

export default function Button({
  children,
  type = "default",
  isAccent,
  onClick,
  href,
}) {
  const buttonClass = clsx({
    [styles.button]: true,
    [styles.default]: type === "default",
    [styles.product]: type === "product",
    [styles.circle]: type === "circle",
    [styles.accent]: isAccent,
  });

  if (href) {
    return (
      <Link href={href} onClick={onClick} className={buttonClass}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={buttonClass}>
      {children}
    </button>
  );
}
