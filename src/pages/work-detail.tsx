import { useLocation } from "react-router-dom";
import Paragraph from "../components/base/paragraph";
import Button from "../components/base/button";
import Carousel from "../components/section/carousel";

const WorkDetails = () => {
  const location = useLocation();
  const { title, imageUrl, listWorks, description, socmedImg } =
    location.state || {};

  return (
    <div className="mt-28">
      {/* BLACK CONTAINER */}
      <div className="px-12">
        <div className="flex items-center border-b pb-4 border-b-[#FAFAFA] justify-between">
          <Paragraph
            size="ultra"
            className="font-neue-corp-bold text-[#FAFAFA]"
            text={title}
          />
          <Button
            isSmallButton
            text={"See Work"}
            size="small"
            isPrimary={false}
            className="w-36 lg:w-36 h-[2rem] font-neue-corp-thin mt-4 px-4 lg:text-lg"
            isEnabledArrow
          />
        </div>
        <div className="flex items-center justify-between my-6">
          <Paragraph className="text-[#FAFAFA] text-xl" text="Lorem Ipsum" />
          <Paragraph className="text-[#FAFAFA] text-sm" text="Lorem Ipsum" />
          <Paragraph
            className="text-[#FAFAFA] border border-[#FAFAFA] px-3 py-0.5 rounded-full text-sm"
            text="2022"
          />
        </div>
        <div className="w-full h-[40rem] relative overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex mt-12 mx-10">
          <div className="space-y-2 w-[30%]">
            {listWorks && listWorks.length > 0 ? (
              listWorks.map((item: string, index: number) => (
                <p key={index} className="text-sm text-[#FAFAFA]">
                  {item}
                </p>
              ))
            ) : (
              <p className="text-[#FAFAFA]">-</p>
            )}
          </div>
          <div className="text-2xl w-[70%] text-[#FAFAFA]">{description}</div>
        </div>
      </div>
      {/* WHITE CONTAINER */}
      <div className="bg-[#FAFAFA] overflow-hidden mt-12 p-12">
        <Carousel images={socmedImg} />
      </div>
    </div>
  );
};

export default WorkDetails;
