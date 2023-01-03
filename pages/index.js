import path from "path";
import fsPromises from "fs/promises";

import Container from "../components/Layout/Container/Container";
import Products from "../components/Products/Products";
import Heading from "../components/ui/Heading/Heading";
import styles from "./HomePage.module.css";

export default function HomePage({ products }) {
  return (
    <Container className={styles.container}>
      <Heading type="primary">Роллы</Heading>
      <Products products={products} />
    </Container>
  );
}

export async function getStaticProps(context) {
  const productsPath = path.resolve(process.cwd(), "data", "products.json");

  const products = JSON.parse(await fsPromises.readFile(productsPath, "utf-8"));

  return {
    props: {
      products,
    },
  };
}
