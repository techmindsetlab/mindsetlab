import { useState } from "react";
import BottomAnimation from "../animation/from-bottom";
import Divider from "../components/base/divider";
import Dropdown from "../components/base/dropdown";
import Paragraph from "../components/base/paragraph";
import WorksCard from "../components/section/all-works";
import { worksCategory, allWorksData } from "../helper/const";
import { motion } from "motion/react";
import Contact from "../components/section/contact-section";

interface Props {
  onMouseEnter?: React.MouseEventHandler<HTMLParagraphElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLParagraphElement>;
  scale: number;
  scrollRotation: number;
}

const Works = ({
  onMouseLeave,
  onMouseEnter,
  scale,
  scrollRotation,
}: Props) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelectedCategory(option);
  };

  const filteredWorksData =
    selectedCategory && selectedCategory !== "All Works"
      ? allWorksData.filter((item) => item.tagging === selectedCategory)
      : allWorksData;

  return (
    <div className="max-w-full mx-auto">
      <BottomAnimation
        wrapperStyle="mt-[6rem] lg:mt-[8rem]"
        motionStyle="flex justify-between lg:-ml-2 mx-4 lg:px-0 lg:justify-center"
      >
        <img
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          src="/work_header_1.svg"
          alt="Mindsetlab Creative Logo Header"
          className="h-full lg:w-[50%] transition-transform duration-100"
          style={{
            transform: `translateX(${-((scale - 1) * 20)}%)`,
          }}
        />
        <img
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          src="/work_header_2.svg"
          alt="Mindsetlab Creative Logo Header"
          className="h-full w-[20.8%] -ml-4 lg:-ml-12 -mr-4 transition-transform duration-100"
          style={{
            transform: `scaleX(${scale})`,
          }}
        />
        <img
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          src="/work_header_3.svg"
          alt="Mindsetlab Creative Logo Header"
          className="h-full w-[27.3%] mr-9 lg:mr-0 transition-transform duration-100"
          style={{
            transform: `translateX(${(scale - 1) * 30}%)`,
          }}
        />
      </BottomAnimation>
      <div className="px-5 lg:px-8">
        <Divider isHasText text="WORKS" scrollRotation={scrollRotation} />
        <div className="px-2 w-[70%]">
          <Paragraph
            size="xxl"
            style={{ lineHeight: "1.2" }}
            className="text-[#FAFAFA] text-2xl lg:text-5xl"
          >
            Tolong diganti copy <br className="block lg:hidden" /> tentang
            Mindsetlab
          </Paragraph>
          <Paragraph
            size="xl"
            className="text-[#FAFAFA] text-base font-neue-corp-thin mt-6"
          >
            Nah ini penjelasan tambahannya tentang headline diatas yaa, Nah ini
            penjelasan tambahannya tentang headline diatas yaa
          </Paragraph>
        </div>
        <div className="mb-24 mt-12 flex items-center">
          <div className="w-fit">
            <Dropdown
              options={worksCategory}
              onSelect={handleSelect}
              selectedCategory={selectedCategory}
            />
          </div>
          <div className="border w-full h-fit mx-2 border-[#FAFAFA]" />
          <img src="/gradient_octagon.svg" className="w-8  h-8" />
        </div>
        <motion.div
          key={selectedCategory}
          className="mb-24"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <WorksCard
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            data={filteredWorksData}
          />
        </motion.div>
      </div>
      <Contact isScrollable={false} scrollRotation={scrollRotation} />
    </div>
  );
};

export default Works;
