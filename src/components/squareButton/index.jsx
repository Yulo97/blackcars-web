import React from "react";
import Link from "next/link";
import styles from "./SquareButton.module.css";

export const SquareButton = ({ title, href }) => {
  return (
    <Link href={href}>
      <div className={styles.button}>
        <spam>{title}</spam>
      </div>
    </Link>
  );
};
