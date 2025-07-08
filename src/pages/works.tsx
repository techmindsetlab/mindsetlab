import { useState } from "react";
import BottomAnimation from "../animation/from-bottom";
import Divider from "../components/base/divider";
import Dropdown from "../components/base/dropdown";
import Paragraph from "../components/base/paragraph";
import WorksCard from "../components/section/all-works";
import { endpoints, worksCategory } from "../helper/const";
import { motion } from "motion/react";
import Contact from "../components/section/contact-section";
import useSWR from "swr";
import { fetcher } from "../services/fetcher";
import { WorksResponse } from "../types/response";

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

  const { data, error, isLoading } = useSWR<WorksResponse>(
    `${import.meta.env.VITE_API_BASE_URL}${endpoints.WORKS_PAGE}`,
    fetcher,
    {
      dedupingInterval: 1000 * 60 * 10,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  const handleSelect = (option: string) => {
    setSelectedCategory(option);
  };

  if (isLoading) return <div className="px-5 lg:px-12">Loading works...</div>;
  if (error) return <div className="px-5 lg:px-12">Failed to load works</div>;

  const filteredWorksData =
    selectedCategory && selectedCategory !== "All Works"
      ? data?.data.filter((item) => item.category === selectedCategory)
      : data?.data;

  return (
    <div className="max-w-full mx-auto">
      <BottomAnimation
        duration={1.2}
        wrapperStyle="mt-[6rem] lg:mt-[8rem]"
        motionStyle="flex justify-between lg:-ml-2 mx-4 lg:px-0 lg:justify-center"
      >
        <img
          src="/work_header_1.svg"
          alt="Mindsetlab Creative Logo Header"
          className="h-full lg:w-[50%] transition-transform duration-100"
          style={{
            transform: `translateX(${-((scale - 1) * 20)}%)`,
          }}
        />
        <img
          src="/work_header_2.svg"
          alt="Mindsetlab Creative Logo Header"
          className="h-full w-[20.8%] -ml-4 lg:-ml-12 -mr-4 transition-transform duration-100"
          style={{
            transform: `scaleX(${scale})`,
          }}
        />
        <img
          src="/work_header_3.svg"
          alt="Mindsetlab Creative Logo Header"
          className="h-full w-[27.3%] mr-9 lg:mr-0 transition-transform duration-100"
          style={{
            transform: `translateX(${(scale - 1) * 30}%)`,
          }}
        />
      </BottomAnimation>
      <div className="px-5 lg:px-12">
        <Divider isHasText text="WORKS" scrollRotation={scrollRotation} />
        <div className="px-2 lg:w-[70%]">
          <BottomAnimation duration={1.3}>
            <Paragraph
              size="xxl"
              style={{ lineHeight: "1.2" }}
              className="text-[#FAFAFA] text-2xl lg:text-5xl"
            >
              We Do The Absolute Most
            </Paragraph>
          </BottomAnimation>
          <BottomAnimation>
            <Paragraph
              size="xl"
              className="text-[#FAFAFA] text-base font-neue-corp-thin mt-6"
            >
              Big ideas, bold moves, and vibes that stick—we’re all about
              creating work that speaks loud and clear. From campaigns that
              break the internet to designs that feel so you, this is where we
              show off what we’re made of. Ready to see the magic? Let’s flex.
            </Paragraph>
          </BottomAnimation>
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
            data={filteredWorksData || []}
          />
        </motion.div>
      </div>
      <Contact
        isScrollable={false}
        scrollRotation={scrollRotation}
        typography={"Sitting on a spark? Let’s fire it up and create, FR!"}
      />
    </div>
  );
};

export default Works;
