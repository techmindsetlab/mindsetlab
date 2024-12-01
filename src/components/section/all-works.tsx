import React from "react";
import { allWorksData } from "../../helper/const";
import Button from "../base/button";

const WorksCard: React.FC = () => {
  return (
    <div className="relative">
      {allWorksData.map((item, index) => (
        <div
          key={index}
          className="sticky flex-col lg:gap-12 lg:border border-t border-b -mt-12 lg:rounded-[15px] lg:px-8 lg:pb-0 pb-16 lg:pt-0 pt-4 bg-[#1e1e1e] flex h-[60vh] items-center justify-center group hover:bg-cover hover:bg-center transition-all duration-500 ease-in-out"
          style={{
            top: `calc(70px + ${index * 1}rem)`,
            scrollBehavior: "smooth",
          }}
        >
          {/* DESKTOP VERSION */}
          <div
            className="w-full absolute h-full rounded-lg border lg:block hidden transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 group-hover:scale-100 scale-110"
            style={{
              backgroundImage: `url(${item.imageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
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
            <p className="lg:text-[12px] text-[10px] h-fit px-2 py-0.5 lg:py-1 text-lg font-neue-corp-thin text-[#FAFAFA] border border-[#FAFAFA] rounded-md">
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
      ))}
    </div>
  );
};

export default WorksCard;
