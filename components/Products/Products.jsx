import ProductCard from "../ProductCard/ProductCard";
import Heading from "../ui/Heading/Heading";
import styles from "./Products.module.css";

export default function Products() {
  return (
    <div className={styles.products}>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
}
