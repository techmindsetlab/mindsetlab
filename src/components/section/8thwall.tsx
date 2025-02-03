import { useState, useEffect } from "react";

const OFI3DRendering = ({ iframeSrc }: { iframeSrc: string }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    if (iframeSrc && !isLoading) {
      window.location.href = iframeSrc;
    }
  }, [iframeSrc, isLoading]);

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
    </div>
  );
};

export default OFI3DRendering;
