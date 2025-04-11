import Paragraph from "../../base/paragraph";
import ClientSlider from "./client-slider";

const client = [
  {
    name: "Foot Locker",
    description:
      "With us, you tap into a vibrant mix of functional creativity,",
    image: "/dummy_client_icon.svg",
  },
  {
    name: "Zoetis",
    description:
      "With us, you tap into a vibrant mix of functional creativity,",
    image: "/dummy_client_icon_2.svg",
  },
];

const MainCharacter = () => {
  return (
    <div className="lg:mt-12 mt-10">
      <Paragraph
        size="xxl"
        className="text-[#FAFAFA] lg:text-[4rem] lg:leading-[4rem] w-[70%] lg:px-12 px-4"
        text="You haven’t been the main character?"
      />
      <div className="lg:px-2 mt-4">
        <ClientSlider client={client} />
      </div>
    </div>
  );
};

export default MainCharacter;
