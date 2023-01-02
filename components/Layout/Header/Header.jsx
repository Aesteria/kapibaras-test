import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Button from "../../ui/Button/Button";
import Logo from "../../ui/Logo/Logo";
import Container from "../Container/Container";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.wrap}>
          <Logo />
          <div className={styles.links}>
            <Link aria-label="Написать на email" href="mailto:help@example.com">
              help@example.com
            </Link>
            <Link aria-label="Позвонить на телефон" href="tel:55-65-65">
              55-65-65
            </Link>
          </div>
          <div className={styles.cartInfo}>
            <Button href="/cart" isAccent type="circle">
              <ShoppingBagIcon width="16px" height="16px" />
            </Button>
            <div>
              <div className={styles.count}>0 товаров</div>
              <div className={styles.price}>0 р</div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
