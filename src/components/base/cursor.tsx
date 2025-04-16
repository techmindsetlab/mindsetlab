import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { IoIosArrowRoundForward } from "react-icons/io";

interface Props {
  isHovered: boolean;
  isLink: boolean;
  hoverImage?: string;
}

const Cursor = ({ isHovered, isLink, hoverImage }: Props) => {
  const size = isHovered || isLink ? 100 : 50;
  const circle = useRef<HTMLDivElement | null>(null);
  const arrowRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const mouse = useRef({
    x: 0,
    y: 0,
    prevX: 0,
    prevY: 0,
  });
  // Track velocity for swaying effect
  const velocity = useRef({ x: 0, y: 0 });
  const [isImageVisible, setIsImageVisible] = useState(false);

  const manageMouseMove = (e: MouseEvent) => {
    // Calculate velocity based on mouse movement
    velocity.current.x = e.clientX - mouse.current.x;
    velocity.current.y = e.clientY - mouse.current.y;

    // Update mouse position
    mouse.current.prevX = mouse.current.x;
    mouse.current.prevY = mouse.current.y;
    mouse.current.x = e.clientX;
    mouse.current.y = e.clientY;
  };

  useEffect(() => {
    const animate = () => {
      // Animate the cursor circle
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

      // Animate the image with swaying effect
      if (imageRef.current && isImageVisible) {
        // Base position (farther to the right - 250px)
        const baseX = mouse.current.x + 250;
        const baseY = mouse.current.y;

        // Apply elastic movement with velocity influence
        const swayX = baseX + velocity.current.x * 0.8; // Amplify horizontal movement
        const swayY = baseY + velocity.current.y * 0.5; // Less vertical movement

        gsap.to(imageRef.current, {
          x: swayX,
          y: swayY,
          xPercent: -50,
          yPercent: -50,
          rotation: velocity.current.x * 0.05, // Slight rotation based on horizontal velocity
          duration: 1.2, // Slower follow for more sway
          ease: "elastic.out(1, 0.8)", // Elastic easing for swaying effect
        });

        // Gradually reduce velocity for smoother movement
        velocity.current.x *= 0.9;
        velocity.current.y *= 0.9;
      }

      window.requestAnimationFrame(animate);
    };

    animate();
    window.addEventListener("mousemove", manageMouseMove);

    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, [isImageVisible]);

  useEffect(() => {
    // Arrow animation
    if (isHovered && arrowRef.current) {
      gsap.fromTo(
        arrowRef.current,
        {
          opacity: 0,
          x: -50,
          y: -50,
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        }
      );
    }
  }, [isHovered]);

  // Handle image visibility
  useEffect(() => {
    if (isHovered && hoverImage) {
      setIsImageVisible(true);
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          {
            opacity: 0,
            scale: 0.8,
            x: mouse.current.x + 200, // Start closer to cursor
            y: mouse.current.y,
            xPercent: -50,
            yPercent: -50,
          },
          {
            opacity: 1,
            scale: 1,
            x: mouse.current.x + 250, // End position
            duration: 0.6,
            ease: "power3.out",
          }
        );
      }
    } else {
      if (imageRef.current) {
        gsap.to(imageRef.current, {
          opacity: 0,
          scale: 0.8,
          duration: 0.3,
          onComplete: () => setIsImageVisible(false),
        });
      }
    }
  }, [isHovered, hoverImage]);

  const showImageCursor = isHovered && hoverImage;

  return (
    <>
      {/* Main cursor */}
      <div
        ref={circle}
        className={`fixed top-0 left-0 sm:block hidden z-40 cursor-none bg-[#FAFAFA] ${
          !isHovered && "mix-blend-difference"
        } rounded-full pointer-events-none`}
        style={{
          width: size,
          height: size,
          transition: `height 0.3s ease-out, width 0.3s ease-out`,
          transform: isLink && isHovered ? "scale(1.5)" : "scale(1)",
          filter: isLink ? "blur(10px)" : "none",
        }}
      >
        {isHovered && (
          <div
            ref={arrowRef}
            className="absolute text-[#1e1e1e] inset-0 flex items-center justify-center"
            style={{
              opacity: isHovered ? 1 : 0,
              transition: "opacity 0.8s ease-out",
              mixBlendMode: "normal",
            }}
          >
            <IoIosArrowRoundForward
              className="text-[#1e1e1e] text-5xl"
              style={{
                transition: "transform 0.8s ease-out",
                mixBlendMode: "normal",
                transform: "rotate(45deg)",
              }}
            />
          </div>
        )}
      </div>

      {/* Image that appears to the right of cursor with swaying effect */}
      {showImageCursor && (
        <div
          ref={imageRef}
          className="fixed top-0 left-0 sm:block hidden z-40 pointer-events-none overflow-hidden shadow-lg"
          style={{
            width: 220,
            height: 160,
            opacity: 0, // Start invisible and animate in
            borderRadius: "12px", // Larger border radius, not fully rounded
            transformOrigin: "center center",
          }}
        >
          <img
            src={hoverImage}
            alt="Hover image"
            className="w-full h-full object-cover"
          />
        </div>
      )}
    </>
  );
};

export default Cursor;
