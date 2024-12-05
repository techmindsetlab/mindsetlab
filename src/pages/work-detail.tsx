import { useLocation } from "react-router-dom";
import Paragraph from "../components/base/paragraph";
import Button from "../components/base/button";
import Carousel from "../components/section/carousel";
import Slider from "react-slick";

const WorkDetails = () => {
  const location = useLocation();
  const { title, imageUrl, socmedImg } = location.state || {};

  const images = [
    "https://www.stockvault.net/data/2012/10/29/137060/preview16.jpg",
    "https://www.stockvault.net/data/2012/10/29/137060/preview16.jpg",
    "https://www.stockvault.net/data/2012/10/29/137060/preview16.jpg",
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mt-20">
      {/* BLACK CONTAINER */}
      <div className="px-4">
        <div className="flex text-[#FAFAFA] justify-between">
          <Paragraph size="sm">Projects</Paragraph>
          <img src="/gradient_octagon.svg" className="w-5 h-5" />
          <Paragraph size="sm">{title}</Paragraph>
        </div>

        {/* DIVIDER */}
        <div className="flex items-center my-4 lg:my-8">
          <div className="relative lg:h-[4rem] lg:w-[4rem] h-[2rem] w-[2rem] mr-2 flex items-center justify-center">
            <img
              src="/mindsetlab_logo.svg"
              alt="Mindsetlab Logo"
              className="absolute h-[8px] w-[8px] lg:h-[10px] lg:w-[10px]"
            />

            <img
              src="/outer_octagon.svg"
              alt="Outer Octagon Logo"
              className="absolute h-full w-full"
            />
          </div>
          <div className="border h-fit w-full" />
          <Button
            size="extrasmall"
            isPrimary={false}
            isEnabledArrow={true}
            isSmallButton
            className="text-[8px] text-center ml-2 w-[8rem]"
            text={"View Project"}
          />
        </div>

        {/* HEADER */}
        <div>
          <Paragraph size="xxxl" className="text-[#FAFAFA]">
            Foot Locker
          </Paragraph>
          <Paragraph
            size="sm"
            className="text-[#FAFAFA] font-neue-corp-thin mt-1"
          >
            Nama campaign atau tagline si project.
          </Paragraph>
          <div className="flex items-center mt-4 mb-3 text-[#FAFAFA] justify-between">
            <Paragraph size="sm">Social Media</Paragraph>
            <Paragraph
              size="sm"
              className="border px-1 rounded-md border-[#FAFAFA]"
            >
              2022
            </Paragraph>
          </div>
          <img src={imageUrl} className="w-full h-[14rem] rounded-lg" />
          <div className="flex items-start mt-3 pb-3 mb-4 border-b border-b-[#FAFAFA] justify-between">
            <div>
              <Paragraph
                size="xl"
                className="text-[#FAFAFA] font-neue-corp-bold"
              >
                DAILY CONTENT
              </Paragraph>
              <Paragraph
                size="xl"
                className="text-[#FAFAFA] font-neue-corp-bold"
              >
                DAILY CONTENT
              </Paragraph>
            </div>
            <img src="/gradient_octagon.svg" className="w-5 mt-1 h-5" />
          </div>
        </div>

        <div className="mb-8">
          <Paragraph size="xl" className="text-[#FAFAFA]">
            "Daily Content"
          </Paragraph>
          <Paragraph
            size="lg"
            className="font-neue-corp-thin w-[90%] text-white"
          >
            Nah ini untuk penjelasan project atau campaign yang dilakuin, kayak
            objectivenya secara keseluruhan project. Nah ini untuk penjelasan
            project atau campaign yang dilakuin, kayak objectivenya secara
            keseluruhan project. Nah ini untuk penjelasan project atau campaign
            yang dilakuin, kayak objectivenya secara keseluruhan project.
          </Paragraph>
        </div>

        {/* PHONE FRAME SLIDER */}
        <div className="flex relative mb-8 justify-center">
          <img src="/phone_frame.svg" />
          <div className="absolute top-4 w-[75%] h-[55vh] overflow-hidden">
            <Slider {...settings} className="h-[55vh]">
              {images.map((image, index) => (
                <div key={index} className="w-full h-[55vh]">
                  <img
                    className="w-full h-[55vh] object-cover rounded-t-2xl"
                    src={image}
                    alt={`Slide ${index + 1}`}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      {/* WHITE CONTAINER */}
      <Carousel images={socmedImg} />

      {/* <div className="px-5">
        <div>
          <img src="/qubic.svg" />
        </div>
        <div></div>
      </div> */}
    </div>
  );
};

export default WorkDetails;
