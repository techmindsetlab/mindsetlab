import { useEffect, useState } from "react";
import Button from "../base/button";
import { WorksDataProps } from "../../helper/const";

interface Props {
    data: WorksDataProps[]
}

const WorksCard = ({data}: Props) => {
  const [visibleIndex, setVisibleIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;

      const currentIndex = Math.floor(scrollPosition / (viewportHeight / 2));
      setVisibleIndex(currentIndex);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const offsetAdjustment = Math.floor(visibleIndex / 12) * 0.5;

  return (
    <div className="relative">
      {data.map((item, index) => {
        const isVisible = index >= visibleIndex - 4 && index <= visibleIndex;

        return (
          <div
            key={index}
            className={`sticky flex-col lg:gap-12 lg:border border-t border-b -mt-12 lg:rounded-[15px] lg:px-8 lg:pb-0 pb-16 lg:pt-0 pt-4 bg-[#1e1e1e] flex h-[60vh] items-center justify-center group transition-all duration-500 ease-in-out ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
            style={{
              top: `calc(70px - ${index + offsetAdjustment}rem)`,
              scrollBehavior: "smooth",
            }}
          >
            {/* DESKTOP VERSION */}
            <div
              className="w-full absolute h-full rounded-lg border lg:block hidden transition-all duration-700 ease-in-out opacity-0 group-hover:opacity-100 group-hover:scale-100 group-hover:blur-0 scale-95 blur-sm"
              style={{
                backgroundImage: `url(${item.imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60 rounded-lg transition-opacity duration-700 group-hover:opacity-50"></div>
            </div>

            {/* MOBILE VERSION */}
            <div className="w-full h-[26vh] rounded-lg border lg:hidden">
              <img
                src={item.imageUrl}
                className="w-full h-full rounded-lg object-cover"
                alt={item.title}
              />
            </div>

            <div className="w-full z-10 flex justify-between gap-4 py-10">
              <h2 className="lg:text-4xl w-[50%] text-2xl font-neue-corp-bold font-bold text-white">
                {item.title}
              </h2>
              <p className="lg:text-[12px] text-[10px] h-fit px-4 py-0.5 lg:py-1 text-lg font-neue-corp-thin text-[#FAFAFA] border border-[#FAFAFA] rounded-lg">
                {item.tagging}
              </p>
            </div>

            <div className="w-full flex justify-start">
              <Button
                text={"Detail Work"}
                size="small"
                isPrimary={false}
                className="w-44 text-[12px] lg:w-64 font-neue-corp-thin mt-4 px-3 lg:py-2 lg:text-lg py-1.5"
                isEnabledArrow
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WorksCard;
