import { HydrateClient } from "~/trpc/server";
import React from "react";
import styles from "./index.module.css";
import WebcamCapture from "~/app/_components/webcamCapture";

export default async function Home() {
  let capturingFlag = false;
  return (
    <HydrateClient>
      <main className={styles.main}>
        <span className={styles.header}>Math Made Easy</span>
        { capturingFlag ?
          <WebcamCapture /> :
          <SolvingMode />
        }
      </main>
    </HydrateClient>
  );
}

function SolvingMode() {
  return (
    <div>
      <WebcamCapture />
    </div>
  );
}
