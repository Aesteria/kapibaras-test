import styles from "./CartPage.module.css";
import Container from "../../components/Layout/Container/Container";
import Heading from "../../components/ui/Heading/Heading";
import CartItemList from "../../components/CartItemList/CartItemList";
import CartTotalPrice from "../../components/CartTotalPrice/CartTotalPrice";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../features/cartSlice";
import Button from "../../components/ui/Button/Button";

export default function CartPage() {
  const cartItems = useSelector(selectCartItems);

  let content;

  if (!cartItems.length) {
    content = (
      <div className={styles.empty}>
        <Heading className={styles.emptyHeading} type="secondary">
          Ваша корзина пуста
        </Heading>
        <Button href="/">Вернуться на главную</Button>
      </div>
    );
  } else {
    content = (
      <>
        <Heading type="primary">Корзина</Heading>
        <CartItemList items={cartItems} />
        <CartTotalPrice />
      </>
    );
  }

  return <Container className={styles.container}>{content}</Container>;
}
