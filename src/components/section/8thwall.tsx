import { useState, useEffect } from "react";

const OFI3DRendering = ({ iframeSrc }: { iframeSrc: string }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [cameraGranted, setCameraGranted] = useState(false);

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
      setCameraGranted(true); // Set camera access granted
    } catch (error) {
      console.error("Error accessing camera:", error);
    }
  };

  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
      {isLoading && !cameraGranted && (
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

      {!isLoading && !cameraGranted && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
          }}
        >
          <p>Please grant camera access to continue.</p>
          <button
            onClick={requestCameraAccess}
            style={{
              backgroundColor: "#4CAF50",
              color: "white",
              fontSize: "16px",
              padding: "10px 20px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Grant Camera Access
          </button>
        </div>
      )}

      {!isLoading && cameraGranted && (
        <iframe
          src={iframeSrc}
          style={{ width: "100%", height: "100%", border: "none" }}
          title="3D Experience"
          allow="camera; microphone; accelerometer; gyroscope"
        ></iframe>
      )}
    </div>
  );
};

export default OFI3DRendering;
