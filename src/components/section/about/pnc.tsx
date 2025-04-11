import Paragraph from "../../base/paragraph";
import EmployeeCarousel from "./employee-carousel";

interface Props {
  data: {
    id: number;
    afterHoverImage: string;
    beforeHoverImage: string;
    position: string;
    name: string;
  }[];
}

const PeopleAndCulture = ({ data }: Props) => {
  return (
    <div className="bg-[#FAFAFA] py-6 rounded-[1rem]">
      <div className="lg:px-12  px-5">
        <img src="/pnc_icon_title.svg" className="w-[70%]" />
        <Paragraph
          size="extrasmall"
          className="font-neue-corp-thin lg:text-xl mt-4 leading-3"
        >
          With us, you tap into a vibrant mix of functional creativity,
          innovation, and business-centric goals. We pack a punch with tailored
          website solutions that resonate with top brands' objectives. With our
          close-knit team, you receive personalized attention and effortless
          integration with your team's goals.
        </Paragraph>
      </div>
      <div className="mt-6">
        <EmployeeCarousel data={data} />
      </div>
    </div>
  );
};

export default PeopleAndCulture;
