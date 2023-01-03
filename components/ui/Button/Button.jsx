import styles from "./Button.module.css";
import clsx from "clsx";
import Link from "next/link";

export default function Button({ children, size = "default", href, onClick }) {
  const buttonClass = clsx(styles.button, styles[size]);

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
