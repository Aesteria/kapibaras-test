import styles from "./CartItemList.module.css";
import CartItem from "../CartItem/CartItem";

export default function CartItemList() {
  return (
    <div className={styles.list}>
      <CartItem />
      <CartItem />
      <CartItem />
    </div>
  );
}
