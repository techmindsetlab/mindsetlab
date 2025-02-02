import { useState, useEffect } from "react";

const OFI3DRendering = ({ iframeSrc }: { iframeSrc: string }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer); // Cleanup on component unmount
  }, []);

  // Function to request camera access (if necessary)
  const requestCameraAccess = async () => {
    try {
      // Request access to camera and microphone
      await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    } catch (error) {
      console.error("Error accessing camera:", error);
    }
  };

  useEffect(() => {
    // Request camera access when component is mounted
    requestCameraAccess();
  }, []);

  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
      {isLoading && (
        <div
          className="text-[#fafafa] text-2xl lg:text-4xl text-center font-neue-corp-regular"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          Loading 8th Wall Experience...
        </div>
      )}
      {!isLoading && (
        <iframe
          src={iframeSrc}
          style={{ width: "100%", height: "100%", border: "none" }}
          title="3D Experience"
          allow="camera; microphone; accelerometer; gyroscope" // Allow camera access here
        ></iframe>
      )}
    </div>
  );
};

export default OFI3DRendering;
