import { IoIosArrowForward } from "react-icons/io";
import Paragraph from "../../base/paragraph";
import BottomAnimation from "../../../animation/from-bottom";

const capabilities = [
  {
    category: "Strategy",
    item: [
      { name: "Brand Definition", image: "/brand_definition.png" },
      { name: "Customer Insight", image: "https://www.dummyimage.com/300" },
      { name: "Messaging", image: "https://www.dummyimage.com/300" },
      { name: "Verbal Identity", image: "https://www.dummyimage.com/300" },
    ],
  },
  {
    category: "Design",
    item: [
      { name: "Web Design", image: "https://www.dummyimage.com/300" },
      { name: "Socmed Design", image: "https://www.dummyimage.com/300" },
      { name: "Visual Identity", image: "https://www.dummyimage.com/300" },
      { name: "Design Systems", image: "https://www.dummyimage.com/300" },
    ],
  },
  {
    category: "Creative",
    item: [
      { name: "Art Direction", image: "https://www.dummyimage.com/300" },
      { name: "Marketing Materials", image: "https://www.dummyimage.com/300" },
      { name: "Photo & Video", image: "https://www.dummyimage.com/300" },
    ],
  },
];

const perfectFor = [
  "Startups",
  "Corporate",
  "Creative Agency",
  "HR Recruitment",
  "Event Organizers",
  "Premium Brands",
  "Production House",
];

interface Props {
  setIsHovered: (isHovered: boolean) => void;
  setHoverImage: (isHoverImage: string | undefined) => void;
}

const Capabilities = ({ setIsHovered, setHoverImage }: Props) => {
  const handleMouseEnter = (image: string) => {
    setIsHovered(true);
    setHoverImage(image);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setHoverImage(undefined);
  };

  return (
    <div className="px-4 lg:px-12 lg:mt-12 mt-8">
      <BottomAnimation>
        <Paragraph
          size="ultra"
          text="Capabilities"
          className="text-[#FAFAFA] lg:text-[7rem]"
        />
      </BottomAnimation>

      {capabilities.map((item, idx) => (
        <div key={idx} className="flex lg:mt-20 mt-4">
          <div className="w-[30%] ">
            <BottomAnimation>
              <div className="text-white -mt-2 py-2 lg:text-5xl font-bold">
                {item.category}
              </div>
            </BottomAnimation>
          </div>

          <div className="grid w-full lg:space-y-4">
            {item.item.map((subItem, subIdx) => (
              <div
                key={subIdx}
                onMouseEnter={() => handleMouseEnter(subItem.image)}
                onMouseLeave={() => handleMouseLeave()}
                className="group w-full -mt-2 relative flex items-center justify-between"
              >
                <div className="flex justify-between w-full items-center">
                  <BottomAnimation>
                    <span className="text-[#FAFAFA] w-full py-1 lg:text-5xl pt-1 font-neue-corp-thin relative inline-block">
                      {subItem.name}
                    </span>
                  </BottomAnimation>

                  <span className="opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out text-white text-3xl">
                    <IoIosArrowForward color="#FAFAFA" size={25} />
                  </span>
                </div>

                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-[#FAFAFA] origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"></span>
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="flex mt-8 items-center">
        <Paragraph
          size="sm"
          className="text-[#FAFAFA] lg:w-[6%] w-[30%] font-neue-corp-thin"
          text="Perfect for"
        />
        <div className="border h-fit w-full mr-2" />
        <img
          src="/gradient_octagon.svg"
          className="w-[2rem] lg:w-[2rem] relative top-0 lg:z-40 h-full"
        />
      </div>
      <div className="flex flex-wrap mt-4 gap-3">
        {perfectFor.map((item) => (
          <div className="border w-fit p-2 rounded-lg border-[#FAFAFA]">
            <Paragraph
              text={item}
              className="text-[#FAFAFA] lg:text-5xl font-neue-corp-thin"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Capabilities;
