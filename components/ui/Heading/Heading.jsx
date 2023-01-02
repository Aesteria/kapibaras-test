import clsx from "clsx";
import styles from "./Heading.module.css";

export default function Heading({ children, type = "tertiary" }) {
  let headingClass = clsx(styles.heading, styles[type]);

  if (type === "primary") {
    return <h1 className={headingClass}>{children}</h1>;
  }

  if (type === "secondary") {
    return <h2 className={headingClass}>{children}</h2>;
  }

  return <h3 className={headingClass}>{children}</h3>;
}
