import { motion } from "framer-motion";
import Button from "./button";
import Paragraph from "./paragraph";
import { works } from "../../helper/const";
import { WorksData } from "../../helper/const";

interface Props {
  scrollRotation: number;
  onMouseEnter: React.MouseEventHandler<HTMLParagraphElement>;
  onMouseLeave: React.MouseEventHandler<HTMLParagraphElement>;
}

const MasonryGrid = ({ scrollRotation, onMouseEnter, onMouseLeave }: Props) => {
  const parallaxStartPoint = 910;
  const parallaxEndPoint = 1770;

  const columns: WorksData[][] = [[], [], [], []];
  works.forEach((image, index) => {
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
          className="grid h-fit gap-4"
          style={{
            transform: calculateParallax(scrollRotation, columnIndex),
          }}
          transition={{ type: "spring", stiffness: 30 }}
        >
          {column.map((image) => (
            <motion.div
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              key={image.id}
              className="relative overflow-hidden rounded-lg group"
            >
              <img
                src={image.src}
                alt={`Image ${image.id}`}
                className="object-cover w-full h-fit"
                style={{ aspectRatio: `${image.width} / ${image.height}` }}
              />

              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 group-hover:transition-all duration-300 flex items-center justify-center">
                <Paragraph className="absolute text-[#FAFAFA] top-4 transform -translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  Social Media
                </Paragraph>

                <Paragraph size="xxl" className="text-[#FAFAFA] font-neue-corp-bold transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  {image.name}
                </Paragraph>

                <Paragraph className="absolute text-[#FAFAFA] bottom-4 transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  2022
                </Paragraph>
              </div>
            </motion.div>
          ))}
          {columnIndex === columns.length - 1 && (
            <div>
              <Paragraph
                className="text-[#FAFAFA] lg:text-base lg:leading-6 text-[12px] leading-5"
                text="Nah ini penjelasan tambahannya call to action yang mengajak audiens yang mengunjungi website mengarah ke ‘All Works’"
              />
              <Button
                text={"See All Works"}
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
