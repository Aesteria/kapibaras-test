import { XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useDispatch } from "react-redux";
import {
  addToCart,
  clearProductInCart,
  removeFromCart,
} from "../../features/cartThunks";
import ButtonCircle from "../ui/Button/ButtonCircle";
import styles from "./CartItem.module.css";

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  const handleAddCount = () => {
    dispatch(
      addToCart({
        id: item.id,
        title: item.title,
        price: item.price,
      })
    );
  };

  const handleRemoveCount = () => {
    dispatch(removeFromCart(item.id));
  };

  const handleClearProduct = () => {
    dispatch(clearProductInCart(item.id));
  };

  return (
    <div className={styles.item}>
      <div className={styles.wrap}>
        <Image
          className={styles.image}
          height="120"
          width="160"
          alt="Sushi"
          src="/assets/sushi.jpg"
        />
        <span className={styles.title}>{item.title}</span>
      </div>
      <div className={styles.wrap}>
        <div className={styles.cartActions}>
          <ButtonCircle onClick={handleRemoveCount}>-</ButtonCircle>
          <span>{item.quantity}</span>
          <ButtonCircle onClick={handleAddCount} isAccent type="circle">
            +
          </ButtonCircle>
        </div>
        <div className={styles.total}>
          <span className={styles.price}>{item.price * item.quantity}</span>руб
        </div>
      </div>
      <XMarkIcon className={styles.close} onClick={handleClearProduct} />
    </div>
  );
}
