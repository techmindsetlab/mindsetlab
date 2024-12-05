import { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaLocationArrow } from "react-icons/fa";

interface Props {
  isHovered: boolean;
}

const Cursor = ({ isHovered }: Props) => {
  const size = isHovered ? 100 : 50;
  const circle = useRef<HTMLDivElement | null>(null);
  const arrowRef = useRef<HTMLDivElement | null>(null); 
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
          duration: 0.5,
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
  }, [isHovered]);

  useEffect(() => {
    if (isHovered && arrowRef.current) {
      gsap.fromTo(
        arrowRef.current,
        {
          opacity: 0,
          x: -50, // Mulai dari kiri
          y: 50, // Mulai dari bawah
        },
        {
          opacity: 1,
          x: 0,
          y: 0, // Pergi ke posisi tengah
          duration: 0.3,
          ease: "power3.out",
        }
      );
    }
  }, [isHovered]);

  return (
    <>
      <div
        ref={circle}
        className="fixed top-0 left-0 sm:block hidden z-40 cursor-none bg-[#FAFAFA] mix-blend-difference rounded-full pointer-events-none"
        style={{
          width: size,
          height: size,
          transition: `height 0.3s ease-out, width 0.3s ease-out`,
        }}
      >
        {isHovered && (
          <div
            ref={arrowRef}
            className="absolute text-[#1e1e1e] inset-0 flex items-center justify-center"
            style={{
              opacity: isHovered ? 1 : 0,
              transition: "opacity 0.3s ease-out",
            }}
          >
            <FaLocationArrow
              className="text-[#1e1e1e] mix-blend-difference text-3xl"
              style={{
                transition: "transform 0.3s ease-out",
              }}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Cursor;
