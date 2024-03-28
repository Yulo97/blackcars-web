import styles from "./page.module.css";
import { SquareButton } from "@/components/squareButton/index.jsx";
import { Model3D } from "@/components/model3D";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.titles}>
        <h1>Black Cars</h1>
        <h2>Centro Integral del Automotor</h2>
      </div>
      <Model3D />
      <div className={styles.butttonsContainer}>
        <SquareButton href={"tienda"} title={"tienda"} />
        <SquareButton href={"contacto"} title={"contacto"} />
      </div>
    </main>
  );
}
