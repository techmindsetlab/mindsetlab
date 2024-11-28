import { useEffect, useRef } from "react";
import gsap from "gsap";

interface Props {
  isHovered: boolean;
}

const Cursor = ({ isHovered }: Props) => {
  const size = isHovered ? 100 : 50;
  const circle = useRef<HTMLDivElement | null>(null);
  const mouse = useRef({
    x: 0,
    y: 0,
  });

  const manageMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    mouse.current = {
      x: clientX,
      y: clientY,
    };
  };

  useEffect(() => {
    const animate = () => {
      if (circle.current) {
        gsap.to(circle.current, {
          x: mouse.current.x,
          y: mouse.current.y,
          xPercent: -50,
          yPercent: -50,
          duration: 1,
          ease: "power3.out",
        });
      }
      window.requestAnimationFrame(animate);
    };

    animate();
    window.addEventListener("mousemove", manageMouseMove);

    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, []);

  return (
    <div
      ref={circle}
      className="fixed top-0 sm:block hidden z-40 cursor-none left-0 bg-[#FAFAFA] mix-blend-difference rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        filter: `blur(${isHovered ? 10 : 0}px)`,
        transition: `height 0.3s ease-out, width 0.3s ease-out, filter 0.3s ease-out`,
      }}
    />
  );
};

export default Cursor;
