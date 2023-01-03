import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useSelector } from "react-redux";
import {
  selectTotalPrice,
  selectTotalQuantity,
} from "../../../features/cartSlice";
import Button from "../../ui/Button/Button";
import ButtonCircle from "../../ui/Button/ButtonCircle";
import Logo from "../../ui/Logo/Logo";
import Container from "../Container/Container";
import styles from "./Header.module.css";

export default function Header() {
  const totalQuantity = useSelector(selectTotalQuantity);
  const totalPrice = useSelector(selectTotalPrice);

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
            <ButtonCircle href="/cart" isAccent>
              <ShoppingBagIcon width="16px" height="16px" />
            </ButtonCircle>
            <div>
              <div className={styles.count}>{totalQuantity} товаров</div>
              <div className={styles.price}>{totalPrice} р</div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
