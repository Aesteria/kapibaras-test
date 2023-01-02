import styles from "./CartPage.module.css";
import Container from "../../components/Layout/Container/Container";
import Heading from "../../components/ui/Heading/Heading";
import CartItemList from "../../components/CartItemList/CartItemList";

export default function CartPage() {
  return (
    <Container className={styles.container}>
      <Heading type="primary">Корзина</Heading>
      <CartItemList />
    </Container>
  );
}
