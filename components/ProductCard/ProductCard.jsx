import styles from "./ProductCard.module.css";
import Image from "next/image";
import Heading from "../ui/Heading/Heading";
import ProductCardActions from "../ProductCardActions/ProductCardActions";

export default function ProductCard() {
  return (
    <div className={styles.card}>
      <div className={styles.cardWrap}>
        <div className={styles.info}>
          <div className={styles.imageWrap}>
            <Image
              src={"/assets/sushi.jpg"}
              width="450"
              height="450"
              alt="Sushi"
            />
          </div>
          <Heading>Санта</Heading>
          <div className={styles.metrics}>8 шт/ 280 г/ 154 ккал</div>
          <p className={styles.description}>
            Креветка, краб, огурец, японский соус, икра масаго, сыр, зёрна
            граната
          </p>
        </div>

        <div className={styles.cart}>
          <strong className={styles.price}>
            329 <span>руб.</span>
          </strong>
          <ProductCardActions />
        </div>
      </div>
    </div>
  );
}
