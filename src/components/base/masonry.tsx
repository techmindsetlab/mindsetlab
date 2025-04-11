import { motion } from "framer-motion";
import Button from "./button";
import Paragraph from "./paragraph";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { WorksList } from "../../types/home";

interface Props {
  scrollRotation: number;
  onMouseEnter: React.MouseEventHandler<HTMLParagraphElement>;
  onMouseLeave: React.MouseEventHandler<HTMLParagraphElement>;
  data: WorksList[];
}

const MasonryGrid = ({
  scrollRotation,
  onMouseEnter,
  onMouseLeave,
  data,
}: Props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/works");
  };

  // const handleDetailWorks = (slug: string, item: WorksList) => {
  //   navigate(`/works/${slug}`, { state: { workData: item } });
  // };

  const parallaxStartPoint = 880;
  const parallaxEndPoint = 1770;

  const columns: WorksList[][] = [[], [], [], []];
  data.forEach((image, index) => {
    columns[index % 4].push(image);
  });

  const calculateParallax = (scrollRotation: number, index: number) => {
    if (scrollRotation < parallaxStartPoint) {
      return "translateY(0)";
    }
    if (scrollRotation > parallaxEndPoint) {
      return index === 0 || index === 2
        ? `translateY(${(parallaxEndPoint - parallaxStartPoint) * 0.1}px)`
        : `translateY(${-1 * (parallaxEndPoint - parallaxStartPoint) * 0.1}px)`;
    }
    return index === 0 || index === 2
      ? `translateY(${(scrollRotation - parallaxStartPoint) * 0.1}px)`
      : `translateY(${-(scrollRotation - parallaxStartPoint) * 0.1}px)`;
  };

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 lg:mt-12 mt-6 gap-4">
      {columns.map((column, columnIndex) => (
        <motion.div
          key={columnIndex}
          className={`${
            columnIndex === 2 && "-mt-20 lg:mt-0"
          } grid h-fit gap-4`}
          style={{
            transform: calculateParallax(scrollRotation, columnIndex),
          }}
          transition={{ type: "spring", stiffness: 30 }}
        >
          {column.map((item, index) => (
            <motion.div
              // onClick={() => handleDetailWorks(item.slug, item)}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              key={index}
              className="relative overflow-hidden rounded-lg group"
            >
              <img
                src={item.banner.thumbnail?.url}
                alt={`Image ${item.id}`}
                className="object-cover w-full h-fit"
                style={{
                  aspectRatio: `${item.banner.width} / ${item.banner.height}`,
                }}
              />

              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 group-hover:transition-all duration-800 flex items-center justify-center">
                <Paragraph className="absolute text-[#FAFAFA] top-4 transform -translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-1000">
                  {item.category}
                </Paragraph>

                <Paragraph
                  size="xxl"
                  className="text-[#FAFAFA] font-neue-machina-bold transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500"
                >
                  {item.name}
                </Paragraph>

                <Paragraph className="absolute text-[#FAFAFA] text-center bottom-4 left-0 right-0 transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-1000">
                  {moment(item.date).format("YYYY")}
                </Paragraph>
              </div>
            </motion.div>
          ))}
          {columnIndex === columns.length - 1 && (
            <div>
              <Paragraph
                size="sm"
                className="text-[#FAFAFA] lg:text-base lg:leading-6 text-sm leading-4"
                text="Peep what we’re serving. Viral moments, bold strategies, and straight-up fire—no cap, all caught in 4K."
              />
              <Button
                text={"The Tea"}
                onClick={handleClick}
                size="small"
                className="w-36 lg:w-64 font-neue-corp-thin mt-2 lg:mt-4 px-3 lg:py-2 text-[12px] lg:text-lg py-1.5"
                isEnabledArrow
                isPrimary={false}
              />
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default MasonryGrid;
