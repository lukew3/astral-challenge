"use client";
import { useState } from 'react';
import WebcamCapture from './WebcamCapture/webcamCapture';
import SolveContents from './SolveContents/solveContents';
import styles from "./homeContents.module.css";

export default function HomeContents() {
  const [imageSrc, setImageSrc] = useState("");

  return (
    <>
      <span className={styles.header}>
        <span onClick={() => {setImageSrc("");}} style={{cursor: "pointer"}}>Math Made Easy</span>
      </span>

      <div className={styles.homeContents}>
        {imageSrc == "" ?
          <WebcamCapture
            setImageSrc={setImageSrc}
          /> :
          <SolveContents
            imageSrc={imageSrc}
            setImageSrc={setImageSrc}
          />
        }
      </div>
    </>
  );
}
