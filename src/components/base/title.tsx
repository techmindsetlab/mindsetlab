import React, { ReactNode } from "react";
import { motion } from "framer-motion"; // Import framer-motion

interface HeaderProps {
  text: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  headerSize?: string;
}

const Title: React.FC<HeaderProps> = ({
  text,
  className = "",
  style = {},
  headerSize,
}) => {
  return (
    <motion.h1
      className={`${headerSize} ${className}`}
      style={style}
      initial={{ opacity: 0, y: 50 }} // Mulai dengan opacity 0 dan sedikit terangkat
      whileInView={{
        opacity: 1, // Saat elemen muncul di layar, opacity berubah menjadi 1
        y: 0, // Bergerak ke posisi semula
      }}
      transition={{
        duration: 1, // Durasi animasi
        ease: "easeOut", // Jenis easing
      }}
      viewport={{ once: true, amount: 0.2 }} // Mengatur trigger animasi saat 20% elemen terlihat
    >
      {text}
    </motion.h1>
  );
};

export default Title;
