import { useState, useEffect } from "react";

const OfiRundownPage = () => {
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
      window.location.href = "https://oficountrymeet2025.8thwall.app/rundown/";
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
        <p style={{ marginBottom: "20px" }}>
          This experience requires camera access to work.
        </p>
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
          Allow Camera Access
        </button>
      </div>
    );
  }

  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
      {isLoading && (
        <div
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
        src="https://oficountrymeet2025.8thwall.app/rundown/"
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

export default OfiRundownPage;
