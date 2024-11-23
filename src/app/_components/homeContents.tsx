"use client";
import { useState } from 'react';
import WebcamCapture from './webcamCapture';
import SolveContents from './solveContents';

export default function HomeContents() {
  const [imageSrc, setImageSrc] = useState("");
  const [steps, setSteps] = useState<{ desc: string, code: string }[]>([]);

  return (
    <>
      {imageSrc == "" ?
        <WebcamCapture
          setImageSrc={setImageSrc}
          setSteps={setSteps}
        /> :
        <SolveContents
          imageSrc={imageSrc}
          setImageSrc={setImageSrc}
          steps={steps}
          setSteps={setSteps}
        />
      }
    </>
  );
}
