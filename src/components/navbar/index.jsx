import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <div className={styles.container}>
      <ul>
        <li>
          <Link href={"/tienda"}>
            <div>
              <spam className={styles.listItem}>tienda</spam>
            </div>
          </Link>
        </li>
        <li>
          <Link href={"/"}>
            <div>
              <spam className={styles.listItem}>BLACK CARS</spam>
            </div>
          </Link>
        </li>
        <li>
          <Link href={"/contacto"}>
            <div>
              <spam className={styles.listItem}>CONTACTO</spam>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};
