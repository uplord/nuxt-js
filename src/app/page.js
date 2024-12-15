import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Page</h1>
      <div className={styles.block}>
      Block
      </div>
    </div>
  );
}
