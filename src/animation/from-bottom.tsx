import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";

interface WrapperAnimationProps {
  children: React.ReactNode;
  initialY?: number;
  duration?: number;
  wrapperStyle?: string;
  motionStyle?: string;
  delay?: number;
  triggerOnce?: boolean;
}

const BottomAnimation: React.FC<WrapperAnimationProps> = ({
  children,
  initialY = 200,
  duration = 1.5,
  wrapperStyle = "",
  motionStyle = "",
  delay = 0,
  triggerOnce = true,
}) => {
  const { ref, inView } = useInView({
    triggerOnce,
    threshold: 0.2,
  });
  return (
    <div ref={ref} className={`relative overflow-hidden ${wrapperStyle}`}>
      <motion.div
        initial={{ y: initialY, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : { y: initialY, opacity: 0 }}
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
