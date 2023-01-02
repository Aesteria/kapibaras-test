import Container from "../components/Layout/Container/Container";
import Header from "../components/Layout/Header/Header";
import ProductCard from "../components/ProductCard/ProductCard";
import Products from "../components/Products/Products";
import Button from "../components/ui/Button/Button";
import Heading from "../components/ui/Heading/Heading";
import Logo from "../components/ui/Logo/Logo";
import styles from "./HomePage.module.css";

export default function HomePage() {
  return (
    <Container className={styles.container}>
      <Heading type="primary">Роллы</Heading>
      <Products />
    </Container>
  );
}
