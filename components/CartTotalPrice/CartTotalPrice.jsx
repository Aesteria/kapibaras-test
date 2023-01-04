import { useSelector } from "react-redux";
import { selectTotalPrice } from "../../features/cartSlice";
import Button from "../ui/Button/Button";
import styles from "./CartTotalPrice.module.css";

export default function CartTotalPrice() {
  const totalPrice = useSelector(selectTotalPrice);

  return (
    <div className={styles.wrap}>
      <div className={styles.price}>
        <span className={styles.text}>Сумма заказа:</span>
        <strong className={styles.total}>{totalPrice}</strong>
        <span className={styles.currency}>руб.</span>
      </div>
      <Button>Заказать</Button>
    </div>
  );
}
