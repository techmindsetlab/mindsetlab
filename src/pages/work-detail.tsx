import { useLocation } from "react-router-dom";
import Paragraph from "../components/base/paragraph";
import Carousel from "../components/section/carousel";
import Slider from "react-slick";
import Contact from "../components/section/contact-section";
import WorkDetailDivider from "../components/base/work-detail-divider";

interface Props {
  scrollRotation: number;
}

const WorkDetails = ({ scrollRotation }: Props) => {
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
    slidesToShow: 1,
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
    <div className="mt-20 lg:mt-28">
      {/* BLACK CONTAINER */}
      <div className="px-4 lg:px-12">
        <div className="flex text-[#FAFAFA] items-center mb-0 lg:mb-12 justify-between">
          <Paragraph size="sm" className="text-sm lg:text-2xl">
            Projects
          </Paragraph>
          <img src="/gradient_octagon.svg" className="w-5 h-5" />
          <Paragraph size="sm" className="text-sm lg:text-xl">
            {title}
          </Paragraph>
        </div>

        {/* DIVIDER */}
        <div className="block lg:hidden">
          <WorkDetailDivider />
        </div>

        {/* HEADER */}
        <div>
          <Paragraph size="xxxl" className="text-[#FAFAFA] lg:text-[4rem]">
            Foot Locker
          </Paragraph>
          <Paragraph
            size="sm"
            className="text-[#FAFAFA] lg:text-xl font-neue-corp-thin lg:mt-4 mt-1"
          >
            Nama campaign atau tagline si project.
          </Paragraph>
          <div className="hidden lg:block">
            <WorkDetailDivider />
          </div>
          <div className="flex items-center mt-4 mb-3 text-[#FAFAFA] justify-between">
            <Paragraph size="sm" className="lg:text-xl">
              Social Media
            </Paragraph>
            <Paragraph
              size="sm"
              className="border px-1 rounded-md border-[#FAFAFA]"
            >
              2022
            </Paragraph>
          </div>

          <img
            src={imageUrl}
            className="w-full lg:h-[42rem] h-[14rem] rounded-lg"
          />
          <div className="lg:hidden flex items-start lg:mt-8 mt-3 pb-3 mb-4 border-b border-b-[#FAFAFA] justify-between">
            <div>
              <Paragraph
                size="xl"
                className="text-[#FAFAFA] uppercase font-neue-corp-bold"
              >
                Daily Content
              </Paragraph>
              <Paragraph
                size="xl"
                className="text-[#FAFAFA] uppercase font-neue-corp-bold"
              >
                Campaign
              </Paragraph>
            </div>
            <img src="/gradient_octagon.svg" className="w-5 mt-1 h-5" />
          </div>
        </div>
        <div className="lg:flex lg:border-b lg:mb-8 justify-between lg:px-12 lg:mt-8">
          <div className="hidden space-y-2 lg:block">
            <Paragraph size="md" className="text-[#FAFAFA]">
              Daily Content
            </Paragraph>
            <Paragraph size="md" className="text-[#FAFAFA]">
              Campaign
            </Paragraph>
          </div>
          <div className="mb-8 lg:w-[70%] flex flex-col gap-6 lg:gap-0 w-full">
            <Paragraph size="xl" className="text-[#FAFAFA] lg:text-4xl">
              "Daily Content"
            </Paragraph>
            <Paragraph
              size="lg"
              className="font-neue-corp-thin w-[90%] lg:text-2xl lg:mt-4 text-white"
            >
              When it comes to Foot Locker Indonesia’s social media, we don’t
              just post—we vibe. From drip-checks that stop the scroll to
              stories that hit every sneakerhead right in the feels, we’re all
              about delivering daily content that slays. Think bold visuals,
              trending moments, and captions that speak straight to the culture.
              At Mindset Lab, we get it—sneakers aren’t just shoes; they’re a
              lifestyle. That’s why every post is designed to keep the community
              hyped and the feed fresh. Wanna see how we bring the heat every
              day? Click in and peep the magic.
            </Paragraph>
          </div>

          {/* PHONE FRAME SLIDER MOBILE VIEW */}
          <div className="flex lg:hidden relative mb-12 justify-center">
            <img src="/phone_frame.svg" />
            <div className="absolute top-4 w-[75%] lg:w-[90%] lg:h-[65vh] h-[55vh] overflow-hidden">
              <Slider {...settings} className="h-[55vh]">
                {images.map((image, index) => (
                  <div key={index} className="w-full lg:h-[65vh] h-[55vh]">
                    <img
                      className="w-full lg:h-[65vh] h-[55vh] object-cover rounded-t-2xl"
                      src={image}
                      alt={`Slide ${index + 1}`}
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>

        {/* PHONE FRAME DESKTOP VIEW */}
        <div className="hidden lg:flex relative mb-12 justify-between">
          {images.map((image, index) => (
            <div className="relative" key={index}>
              <img src="/phone_frame.svg" />
              <div className="absolute top-4 left-4 right-4 w-[75%] lg:w-[90%] lg:h-[65vh] h-[55vh] overflow-hidden">
                <div className="h-[55vh]">
                  <div className="w-full lg:h-[65vh] h-[55vh]">
                    <img
                      className="w-full lg:h-[65vh] h-[55vh] object-cover rounded-t-2xl"
                      src={image}
                      alt={`Slide ${index + 1}`}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* WHITE CONTAINER */}
      <div>
        <Carousel images={socmedImg} />
      </div>

      <div className="px-5 relative border-t border-[#FAFAFA] mt-8"></div>
      <Contact
        isScrollable={false}
        scrollRotation={scrollRotation}
        typography={
          "Got an idea that’s fire or just wanna collab on something epic?"
        }
      />
    </div>
  );
};

export default WorkDetails;
