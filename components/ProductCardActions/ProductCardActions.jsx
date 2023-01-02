import styles from "./ProductCardActions.module.css";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import Button from "../ui/Button/Button";

export default function ProductCardActions() {
  const [state, setState] = useState(0);

  const handleAddCount = () => {
    setState((prevCount) => prevCount + 1);
  };

  const handleRemoveCount = () => {
    setState((prevCount) => prevCount - 1);
  };

  return (
    <>
      {state === 0 ? (
        <Button onClick={handleAddCount} type="product">
          <ShoppingCartIcon height="20px" width="20px" />
        </Button>
      ) : (
        <div className={styles.actions}>
          <Button size="small" onClick={handleRemoveCount} type="circle">
            -
          </Button>
          <span>{state}</span>
          <Button isAccent onClick={handleAddCount} type="circle">
            +
          </Button>
        </div>
      )}
    </>
  );
}
