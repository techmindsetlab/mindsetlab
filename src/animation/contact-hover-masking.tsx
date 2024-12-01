import { useState, useEffect } from "react";

const ContactSVG = () => {
  const [maskColor, setMaskColor] = useState<string>("rgb(0, 0, 0)");
  const [isHovered, setIsHovered] = useState(false);

  const generateRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  };

  useEffect(() => {
    let colorInterval: ReturnType<typeof setInterval> | null = null;

    if (isHovered) {
      colorInterval = setInterval(() => {
        setMaskColor(generateRandomColor());
      }, 100);
    } else {
      if (colorInterval) {
        clearInterval(colorInterval);
      }
      setMaskColor("#1e1e1e");
    }

    return () => {
      if (colorInterval) {
        clearInterval(colorInterval);
      }
    };
  }, [isHovered]);

  return (
    <div
      className="relative w-full h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 414 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M32.2809 77.8889C11.8249 77.8889 2 68.0102 2 46.7836V33.1053C2 11.8787 11.8249 2 32.2809 2C51.8804 2 61.0504 11.2201 61.1511 29.8124V32.7507H39.234V28.0393C39.234 21.6561 36.4125 18.8192 32.0794 18.8192C27.3937 18.8192 24.1691 22.0614 24.1691 29.9137V49.8739C24.1691 57.8275 27.3937 61.0698 32.0794 61.0698C36.5636 61.0698 39.4859 58.1315 39.4859 51.5456V46.0743H61.5038V49.5192C61.4534 68.6181 52.1827 77.8889 32.2809 77.8889Z"
          fill={maskColor}
          stroke="#fafafa"
          stroke-width="3"
        />
        <path
          d="M88.2374 77.8889C67.9637 77.8889 58.0543 68.0102 58.0543 46.7836V33.1053C58.0543 11.8787 67.9637 2 88.2374 2C108.562 2 118.421 11.8787 118.421 33.1053V46.7836C118.421 68.0102 108.562 77.8889 88.2374 77.8889ZM88.2374 61.0698C92.9393 61.0698 96.2256 57.7768 96.2256 49.8232V30.0657C96.2256 22.1121 92.9393 18.8192 88.2374 18.8192C83.5355 18.8192 80.2998 22.1121 80.2998 30.0657V49.8232C80.2998 57.7768 83.5355 61.0698 88.2374 61.0698Z"
          fill={maskColor}
          stroke="#fafafa"
          stroke-width="3"
        />
        <path
          d="M115.833 76.1642V3.72473H156.365L208.907 39V3.72473H244.793V76.1642H205.52L151.411 39L151.462 76.1642H115.833Z"
          fill={maskColor}
          stroke="#fafafa"
          stroke-width="3"
        />
        <path
          d="M244.744 76.1642V20.5464H228.314V3.72473H282.644V20.5464H266.264V76.1642H244.744Z"
          fill={maskColor}
          stroke="#fafafa"
          stroke-width="3"
        />
        <path
          d="M257.635 76.1642L276.618 3.72473H302.367L321.451 76.1642H299.337L297.217 65.5054H281.112L279.042 76.1642H257.635ZM283.888 51.361H294.44L289.139 24.2846L283.888 51.361Z"
          fill={maskColor}
          stroke="#fafafa"
          stroke-width="3"
        />
        <path
          d="M339.658 77.8889C319.202 77.8889 309.378 68.0102 309.378 46.7836V33.1053C309.378 11.8787 319.202 2 339.658 2C359.258 2 368.428 11.2201 368.529 29.8124V32.7507H346.611V28.0393C346.611 21.6561 343.79 18.8192 339.457 18.8192C334.771 18.8192 331.547 22.0614 331.547 29.9137V49.8739C331.547 57.8275 334.771 61.0698 339.457 61.0698C343.941 61.0698 346.863 58.1315 346.863 51.5456V46.0743H368.881V49.5192C368.831 68.6181 359.56 77.8889 339.658 77.8889Z"
          fill={maskColor}
          stroke="#fafafa"
          stroke-width="3"
        />
        <path
          d="M374.1 76.1642V20.5464H357.67V3.72473H412V20.5464H395.62V76.1642H374.1Z"
          fill={maskColor}
          stroke="#fafafa"
          stroke-width="3"
        />
      </svg>
    </div>
  );
};

export default ContactSVG;
