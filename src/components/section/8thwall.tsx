import { useState, useEffect } from "react";
import Paragraph from "../../components/base/paragraph";

const OFI3DRendering = ({ iframeSrc }: { iframeSrc: string }) => {
  const [cameraPermission, setCameraPermission] = useState("prompt");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function checkCameraPermission() {
      try {
        const result = await navigator.permissions.query({
          name: "camera" as PermissionName,
        });
        setCameraPermission(result.state);

        result.addEventListener("change", (e) => {
          setCameraPermission((e.target as PermissionStatus).state);
        });
      } catch (err) {
        console.error("Permission check failed:", err);
      }
    }

    checkCameraPermission();
  }, []);

  const requestCameraAccess = async () => {
    try {
      await navigator.mediaDevices.getUserMedia({ video: true });
    } catch (error) {
      setError(error as string);
    }
  };

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  if (error) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <p style={{ color: "red", marginBottom: "20px" }}>{error}</p>
        <button
          onClick={requestCameraAccess}
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Try Again
        </button>
      </div>
    );
  }

  if (cameraPermission === "prompt") {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <Paragraph
          className="text-[#fafafa] text-center text-4xl font-neue-corp-regular"
          style={{ marginBottom: "20px" }}
        >
          This experience requires camera access to work.
        </Paragraph>
        <button
          onClick={requestCameraAccess}
          style={{
            padding: "10px 20px",
            backgroundColor: "#fafafa",
            color: "#1e1e1e",
            border: "1px solid #fafafa",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Allow Camera Access
        </button>
      </div>
    );
  }

  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
      {isLoading && (
        <div
          className="text-[#fafafa] text-4xl font-neue-corp-regular"
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
      <iframe
        src={iframeSrc}
        style={{
          width: "100%",
          height: "100%",
          border: "none",
          position: "absolute",
          top: 0,
          left: 0,
        }}
        onLoad={handleIframeLoad}
        allow="camera; gyroscope; accelerometer; xr-spatial-tracking"
      />
    </div>
  );
};

export default OFI3DRendering;