"use client";
import React from "react";
import Webcam from "react-webcam";
import { useCallback, useState } from "react";
import { api } from "~/trpc/react";

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user"
};

const WebcamCapture = () => {
  const submitMutation = api.submitImage.useMutation();
  const webcamRef = React.useRef<Webcam>(null);
  const [url, setUrl] = useState<string | null>(null);
  const capture = useCallback(async () => {
    const imageSrc: string = webcamRef.current?.getScreenshot() || "";
    if (imageSrc) {
      setUrl(imageSrc);
      console.log(imageSrc);
      const res = await submitMutation.mutateAsync({ imageb64: imageSrc }, {
        onSuccess: (data) => {
          console.log('Response:', data); // Should log "hi"
        },
        onError: (error) => {
          console.error('Error:', error);
        },
      });
      console.log(res);
    }
  }, [webcamRef]);

  return (
    <>
      {url ?
        <img src={url} alt="Captured" /> :
        <>
        <Webcam
        audio={false}
        height={720}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={1280}
        videoConstraints={videoConstraints}
      />
      <button onClick={capture}>Capture photo</button>
      </>
      }

    </>
  );
};
  
export default WebcamCapture;