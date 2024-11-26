import React from "react";
import Webcam from "react-webcam";
import { useCallback } from "react";

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "environment"
};

export default function WebcamCapture({ setImageSrc }: { setImageSrc: Function }) {
  const webcamRef = React.useRef<Webcam>(null);
  const capture = useCallback(async () => {
    const imageSrc: string = webcamRef.current?.getScreenshot() || "";
    if (imageSrc) {
      setImageSrc(imageSrc);
    }
  }, [webcamRef]);

  return (
    <>
      <Webcam
        audio={false}
        height={720}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={1280}
        videoConstraints={videoConstraints}
        onClick={capture}
      />
      <i>(Tap the image to take a photo of the problem)</i>
    </>
  );
};
