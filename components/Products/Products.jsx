import ProductCard from "../ProductCard/ProductCard";
import styles from "./Products.module.css";

export default function Products({ products }) {
  return (
    <div className={styles.products}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
