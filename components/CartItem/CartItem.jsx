import { LockClosedIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Button from "../ui/Button/Button";
import styles from "./CartItem.module.css";

export default function CartItem() {
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
        <span>Блабла</span>
      </div>
      <div className={styles.wrap}>
        <div className={styles.cartActions}>
          <Button type="circle">-</Button>
          <span>1</span>
          <Button isAccent type="circle">
            +
          </Button>
        </div>
        <div>
          <span className={styles.price}>1199</span>руб
        </div>
      </div>
      <XMarkIcon className={styles.close} />
    </div>
  );
}
