import styles from "./CartItemList.module.css";
import CartItem from "../CartItem/CartItem";

export default function CartItemList({ items }) {
  return (
    <div className={styles.list}>
      {items.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
}
