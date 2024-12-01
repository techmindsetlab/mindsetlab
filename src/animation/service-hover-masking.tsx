import { useState, useEffect } from "react";

const ServiceSVG = () => {
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
      setMaskColor("#FAFAFA");
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
        viewBox="0 0 415 63"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M29.099 61C9.40866 61 2.19809 53.7228 2 41.3985H21.73C21.9677 45.5066 24.1467 47.815 29.416 47.815C34.1702 47.815 36.2304 45.7414 36.2304 43.1983V42.8853C36.2304 40.7334 34.8833 39.3641 32.0704 39.0511L17.9266 37.4469C7.70506 36.3123 2.59428 31.1088 2.59428 21.4058V20.7016C2.59428 9.23806 9.88408 2 28.6632 2C47.0858 2 54.1379 9.08156 54.336 20.7016H35.2003C34.9626 17.2195 33.1401 15.185 28.4652 15.185C24.1864 15.185 22.3243 17.063 22.3243 19.6061V19.9191C22.3243 22.071 23.6713 23.2838 26.3258 23.6359L40.3111 25.2401C50.8892 26.4138 56 31.6565 56 41.555V42.2593C56 53.8011 48.7894 61 29.099 61Z"
          fill={maskColor}
          stroke="#1E1E1E"
          strokeWidth="3"
        />
        <path
          d="M146 61V3H179.954C191.155 3 197.439 9.5523 197.439 20.3919V21.2008C197.439 29.1283 193.926 34.265 188.033 35.9637C191.468 37.2985 193.497 40.3724 194.551 45.59L196.034 53.1534C196.775 56.9149 197.673 59.1799 199 60.5955V61H178.432C177.652 59.3821 177.3 57.3598 176.793 53.841L176.169 47.9763C175.622 44.417 173.866 42.7587 170.978 42.7587H165.241V61H146ZM172.773 29.735C176.169 29.735 178.276 27.5105 178.276 24.113V23.2232C178.276 19.947 176.169 17.7225 172.773 17.7225H165.241V29.735H172.773Z"
          fill={maskColor}
          stroke="#1E1E1E"
          strokeWidth="3"
        />
        <path
          d="M214.928 61L197 3H217.292L226.394 38.795L235.22 3H255L237.19 61H214.928Z"
          fill={maskColor}
          stroke="#1E1E1E"
          strokeWidth="3"
        />
        <path
          d="M249 61V3H269V61H249Z"
          fill={maskColor}
          stroke="#1E1E1E"
          strokeWidth="3"
        />
        <path
          d="M300.165 61C281.388 61 272 51.6492 272 33.0259V29.9741C272 11.3508 281.388 2 300.165 2C318.081 2 326.57 10.5292 326.726 25.6704V26.2964H306.893V24.9662C306.815 19.8017 304.155 17.063 299.891 17.063C295.275 17.063 292.068 20.2712 292.068 27.6267V35.3733C292.068 42.7288 295.275 45.937 299.891 45.937C304.233 45.937 307.05 43.12 307.089 37.7208V36.0385H327V36.6645C326.922 52.5491 318.394 61 300.165 61Z"
          fill={maskColor}
          stroke="#1E1E1E"
          strokeWidth="3"
        />
        <path
          d="M329 61V3H412.843V18.0865H348.389V25.6095H407.751V37.9861H348.389V45.9135H413V61H329Z"
          fill={maskColor}
          stroke="#1E1E1E"
          strokeWidth="3"
        />
        <path
          d="M59 61V3H142.843V18.0865H78.3888V25.6095H137.751V37.9861H78.3888V45.9135H143V61H59Z"
          fill={maskColor}
          stroke="#1E1E1E"
          strokeWidth="3"
        />
      </svg>
    </div>
  );
};

export default ServiceSVG;
