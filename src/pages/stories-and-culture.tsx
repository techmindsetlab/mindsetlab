import BottomAnimation from "../animation/from-bottom";
import Divider from "../components/base/divider";
import Paragraph from "../components/base/paragraph";

interface Props {
  scrollRotation: number;
}

const StoriesAndCulture = ({ scrollRotation }: Props) => {
  return (
    <div className="mt-20">
      <div className="lg:px-12 px-5">
        <BottomAnimation duration={1}>
          <img src="/stories_header.svg" className="w-full h-full" />
        </BottomAnimation>

        <div className="flex z-10 relative -my-[5.5rem] justify-center">
          <BottomAnimation>
            <img src="/and_icon.svg" className="w-[10rem] z-40 h-full" />
          </BottomAnimation>
        </div>
        <BottomAnimation duration={1.2}>
          <img src="/culture_header.svg" className="w-full h-full" />
        </BottomAnimation>
      </div>
      <div className="lg:px-12 px-5">
        <Divider scrollRotation={scrollRotation} />
      </div>
      <div className="lg:px-12 px-5">
        <BottomAnimation duration={1.3}>
          <Paragraph
            size="xxl"
            style={{ lineHeight: "1.2" }}
            className="text-[#FAFAFA] lg:w-[50%] text-2xl lg:text-5xl"
          >
            Unveiling Stories, Celebrating Cultures
          </Paragraph>
        </BottomAnimation>
        <BottomAnimation>
          <Paragraph
            size="xl"
            className="text-[#FAFAFA] lg:w-[70%] text-base font-neue-corp-thin mt-6"
          >
            Every story shapes the way we see the world. “Stories and Cultures”
            is where creativity meets heritage, turning traditions into
            inspiration. In a fast-moving creative industry, culture drives
            authenticity and connection. Let’s explore, create, and inspire
            together.
          </Paragraph>
        </BottomAnimation>
      </div>

      <div className="bg-[#FAFAFA] lg:px-12 my-12 py-8 px-5">
        <h1 className="text-[#1e1e1e] underline font-neue-corp-bold text-2xl lg:text-5xl">
          About Us
        </h1>
        <Paragraph
          size="xl"
          className="text-[#1e1e1e] lg:w-[70%] text-base font-neue-corp-thin mt-6"
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident,
          nemo excepturi officia ipsa illum laboriosam eum placeat, optio,
          veritatis iusto doloribus? Hic soluta maiores nulla nam velit earum
          exercitationem odit? Consequuntur ratione veniam cumque debitis optio.
          Autem optio facere quas?
        </Paragraph>
      </div>
    </div>
  );
};

export default StoriesAndCulture;
