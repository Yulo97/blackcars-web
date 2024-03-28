import React from "react";
import { ProductCard } from "../productCard";
import styles from "./ProductList.module.css";

export const ProductList = () => {
  return (
    <section className={styles.container}>
      <ProductCard title={"Alineacion y Balanceo"} price={16000} />
      <ProductCard title={"Cambio de Aceite y Filtros"} price={68000} />
      <ProductCard title={"Alineacion y Balanceo"} price={16000} />
      <ProductCard title={"Cambio de Aceite y Filtros"} price={68000} />
      <ProductCard title={"Alineacion y Balanceo"} price={16000} />
      <ProductCard title={"Cambio de Aceite y Filtros"} price={68000} />
      <ProductCard title={"Alineacion y Balanceo"} price={16000} />
      <ProductCard title={"Cambio de Aceite y Filtros"} price={68000} />
    </section>
  );
};
