import styles from "./ProductCard.module.css";
import React from "react";
import Link from "next/link";

export const ProductCard = ({ title, price }) => {
  return (
    <div className={styles.container}>
      <img src="https://picsum.photos/500/500" alt="imagen del producto" />
      <h4>{title}</h4>
      <h5>$ {price}</h5>
      <Link href="#" style={{ marginTop: "auto", marginBottom: "5px" }}>
        <div className={styles.simpleButton}>
          <spam>Comprar</spam>
        </div>
      </Link>
    </div>
  );
};
