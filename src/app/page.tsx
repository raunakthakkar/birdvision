"use client";

import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const routr = useRouter();
  return (
    <main className={styles.main}>
      <button onClick={() => routr.push("/product")}>Fetch details</button>
    </main>
  );
}
