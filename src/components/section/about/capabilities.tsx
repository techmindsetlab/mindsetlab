import Paragraph from "../../base/paragraph";

const capabilities = [
  {
    category: "Strategy",
    item: [
      "Brand Definition",
      "Customer Insight",
      "Messaging",
      "Verbal Identity",
    ],
  },
  {
    category: "Design",
    item: ["Web Design", "Socmed Design", "Visual Identity", "Design Systems"],
  },
  {
    category: "Creative",
    item: ["Art Direction", "Marketing Materials", "Photo & Video"],
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

const Capabilities = () => {
  return (
    <div className="px-4 lg:px-12 lg:mt-12 mt-8">
      <Paragraph
        size="ultra"
        text="Capabilities"
        className="text-[#FAFAFA] lg:text-[6rem]"
      />
      {capabilities.map((item, idx) => (
        <div key={idx} className="flex lg:mt-12 mt-4">
          <Paragraph
            text={item.category}
            className="text-[#FAFAFA] lg:text-5xl w-[30%] font-neue-machina-bold"
          />
          <div className="grid lg:space-y-4">
            {item.item.map((item) => (
              <div className=" -mt-2">
                <Paragraph
                  size="xxl"
                  text={item}
                  className="text-[#FAFAFA] lg:text-5xl  pt-1 font-neue-corp-thin"
                />
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
