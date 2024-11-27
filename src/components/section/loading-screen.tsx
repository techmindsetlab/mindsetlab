import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const LoadingScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full bg-[#FAFAFA] z-50 flex flex-col justify-end"
      initial={{ opacity: 1 }}
      animate={{
        clipPath:
          progress === 100
            ? "polygon(0 0, 0% 0, 0% 100%, 0 100%)"
            : "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      }}
      transition={{
        duration: progress === 100 ? 1.2 : 0,
        ease: "easeInOut",
      }}
      onAnimationComplete={() => {
        if (progress === 100) {
          setTimeout(() => {
            navigate("/");
          }, 1200);
        }
      }}
    >
      <div className="w-full p-8">
        <motion.div
          className="text-right text-sm font-semibold text-[#1e1e1e] mt-2"
          initial={{ opacity: 1 }}
          animate={{
            scale: progress === 100 ? 0.8 : 1,
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
        >
          {progress}%
        </motion.div>
        <div className="h-1 bg-gray-300 w-full rounded-full">
          <motion.div
            className="h-full bg-[#1e1e1e] rounded-full"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
