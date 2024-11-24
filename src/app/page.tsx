import { HydrateClient } from "~/trpc/server";
import React from "react";
import styles from "./index.module.css";
import HomeContents from "~/app/_components/HomeContents/homeContents";

export default async function Home() {
  return (
    <HydrateClient>
      <main className={styles.main}>
        <HomeContents />
      </main>
    </HydrateClient>
  );
}
