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

  useEffect(() => {
    if (cameraPermission === "granted" && iframeSrc) {
      window.location.href = iframeSrc;
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, [cameraPermission, iframeSrc]);

  const requestCameraAccess = async () => {
    try {
      await navigator.mediaDevices.getUserMedia({ video: true });
      setCameraPermission("granted");
    } catch (error) {
      setError(error instanceof Error ? error.message : "Unknown error");
    }
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
    </div>
  );
};

export default OFI3DRendering;
