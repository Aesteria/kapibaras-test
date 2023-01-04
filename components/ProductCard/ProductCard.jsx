import styles from "./ProductCard.module.css";
import Image from "next/image";
import Heading from "../ui/Heading/Heading";
import Button from "../ui/Button/Button";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import ButtonCircle from "../ui/Button/ButtonCircle";
import { useDispatch, useSelector } from "react-redux";
import { selectProductQuantity } from "../../features/cartSlice";
import { addToCart, removeFromCart } from "../../features/cartThunks";

export default function ProductCard({ product }) {
  const { title, price, metrics, description, id } = product;
  const productCartQuantity = useSelector((state) =>
    selectProductQuantity(state, id)
  );
  const dispatch = useDispatch();

  const handleAddCount = () => {
    const newProduct = {
      id,
      title,
      price,
    };
    dispatch(addToCart(newProduct));
  };

  const handleRemoveCount = () => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <div className={styles.imageWrap}>
          <Image
            src={"/assets/sushi.jpg"}
            width="450"
            height="450"
            alt="Sushi"
            priority
          />
        </div>
        <Heading className={styles.title}>{title}</Heading>
        <div className={styles.metrics}>{metrics}</div>
        <p className={styles.description}>{description}</p>
      </div>

      <div className={styles.cart}>
        <strong className={styles.price}>
          {price}
          <span>руб.</span>
        </strong>

        {!productCartQuantity && (
          <Button onClick={handleAddCount} size="small">
            <ShoppingCartIcon height="20px" width="20px" />
          </Button>
        )}

        {productCartQuantity && (
          <div className={styles.actions}>
            <ButtonCircle onClick={handleRemoveCount}>-</ButtonCircle>
            <span>{productCartQuantity}</span>
            <ButtonCircle isAccent onClick={handleAddCount}>
              +
            </ButtonCircle>
          </div>
        )}
      </div>
    </div>
  );
}
