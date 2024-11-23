import { HydrateClient } from "~/trpc/server";
import React from "react";
import styles from "./index.module.css";
import HomeContents from "~/app/_components/homeContents";

export default async function Home() {
  return (
    <HydrateClient>
      <main className={styles.main}>
        <span className={styles.header}>Math Made Easy</span>
        <HomeContents />
      </main>
    </HydrateClient>
  );
}
