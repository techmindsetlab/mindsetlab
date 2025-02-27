import { motion } from "framer-motion";
import React from "react";

interface WrapperAnimationProps {
  children: React.ReactNode;
  initialY?: number;
  duration?: number;
  wrapperStyle?: string;
  motionStyle?: string;
  delay?: number;
}

const BottomAnimation: React.FC<WrapperAnimationProps> = ({
  children,
  initialY = 200,
  duration = 1.5,
  wrapperStyle = "",
  motionStyle = "",
  delay = 0,
}) => {
  return (
    <div className={`relative overflow-hidden ${wrapperStyle}`}>
      <motion.div
        initial={{ y: initialY }}
        animate={{ y: 0 }}
        transition={{
          type: "tween",
          ease: "easeInOut",
          duration,
          delay,
        }}
        className={`w-full h-full ${motionStyle}`}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default BottomAnimation;
