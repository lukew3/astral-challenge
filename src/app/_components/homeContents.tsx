"use client";
import  { useState } from 'react';
import WebcamCapture from './webcamCapture';

export default function HomeContents() {
    const [imageSrc, setImageSrc] = useState("");
    const [steps, setSteps] = useState<{}[]>([]);

    return (
      <>
        { imageSrc == "" ?
            <WebcamCapture 
                setImageSrc={setImageSrc}
                setSteps={setSteps}
            /> : 
            <img src={imageSrc} alt="Captured" />
        }
      </>
    );
  }