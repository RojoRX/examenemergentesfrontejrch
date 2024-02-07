import Image from "next/image";
import styles from "./page.module.css";
import ClientComponent from "./components/clientComponent";

export default function Home() {
  return (
    <main className={styles.main}>
      <ClientComponent></ClientComponent>
    </main>
  );
}
