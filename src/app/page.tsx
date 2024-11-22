import { api, HydrateClient } from "~/trpc/server";
import React from "react";
import styles from "./index.module.css";
import WebcamCapture from "~/app/_components/webcamCapture";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });

  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <main className={styles.main}>
        <span className={styles.header}>Math Made Easy</span>
        <WebcamCapture />
      </main>
    </HydrateClient>
  );
}
