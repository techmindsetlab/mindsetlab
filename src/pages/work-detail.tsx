import Paragraph from "../components/base/paragraph";
import Carousel from "../components/section/carousel";
import Slider from "react-slick";
import Contact from "../components/section/contact-section";
import WorkDetailDivider from "../components/base/work-detail-divider";
import Highlight from "../components/section/highlight";
import moment from "moment";
import { WorkDetailTypes } from "../types/workDetailTypes";
import { useLocation, useNavigate } from "react-router-dom";
import HighlightVideo from "../components/section/highlight-video";

interface Props {
  scrollRotation: number;
  workData: WorkDetailTypes[];
}

const WorkDetails = ({ scrollRotation, workData }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  const slug = path.split("/").pop();
  const images = [
    "https://www.stockvault.net/data/2012/10/29/137060/preview16.jpg",
    "https://www.stockvault.net/data/2012/10/29/137060/preview16.jpg",
    "https://www.stockvault.net/data/2012/10/29/137060/preview16.jpg",
  ];

  const detailWork = workData.find(
    (item) => item.data.attributes.slug === slug
  );

  const handleViewProject = (link: string) => {
    navigate(link);
  };

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
            {detailWork?.data?.attributes.name}
          </Paragraph>
        </div>

        {/* MOBILE VIEW DIVIDER */}
        <div className="block lg:hidden">
          <WorkDetailDivider
            viewProject={handleViewProject}
            link={detailWork?.data.attributes.projectURL || ""}
          />
        </div>

        {/* HEADER */}
        <div>
          <Paragraph size="xxxl" className="text-[#FAFAFA] lg:text-[4rem]">
            {detailWork?.data?.attributes.name}
          </Paragraph>
          <Paragraph
            size="sm"
            className="text-[#FAFAFA] lg:text-xl font-neue-corp-thin lg:mt-4 mt-1"
          >
            {detailWork?.data?.attributes.tagline}
          </Paragraph>
          <div className="hidden lg:block">
            {/* DIVIDER DESKTOP VIEW */}
            <WorkDetailDivider
              viewProject={handleViewProject}
              link={detailWork?.data.attributes.projectURL || ""}
            />
          </div>
          <div className="flex items-center mt-4 mb-3 text-[#FAFAFA] justify-between">
            <Paragraph size="sm" className="lg:text-xl">
              {detailWork?.data?.attributes.category}
            </Paragraph>
            <Paragraph
              size="sm"
              className="border px-1 rounded-md border-[#FAFAFA]"
            >
              {moment(detailWork?.data?.attributes.date).format("YYYY")}
            </Paragraph>
          </div>

          <div className="lg:h-[42rem] h-[14rem] rounded-lg overflow-hidden">
            <img
              src={detailWork?.data?.attributes.banner.data.attributes.url}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <div className="lg:hidden flex items-start lg:mt-8 mt-3 pb-3 mb-4 border-b border-b-[#FAFAFA] justify-between">
            <div>
              {detailWork?.data.attributes.scopeOfWorks.map((item) => (
                <Paragraph
                  key={item.id}
                  size="xl"
                  className="text-[#FAFAFA] uppercase font-neue-corp-bold"
                >
                  {item.scopeOfWork}
                </Paragraph>
              ))}
            </div>
            <img src="/gradient_octagon.svg" className="w-5 mt-1 h-5" />
          </div>
        </div>
        <div className="lg:flex lg:border-b lg:mb-8 justify-between lg:px-12 lg:mt-8">
          <div className="hidden space-y-2 lg:block">
            {detailWork?.data.attributes.scopeOfWorks.map((item) => (
              <Paragraph key={item.id} size="md" className="text-[#FAFAFA]">
                {item.scopeOfWork}
              </Paragraph>
            ))}
          </div>
          <div className="mb-8 lg:w-[70%] flex flex-col gap-6 lg:gap-0 w-full">
            <Paragraph size="xl" className="text-[#FAFAFA] lg:text-4xl">
              {detailWork?.data?.attributes.campaignTitle}
            </Paragraph>
            <Paragraph
              size="lg"
              className="font-neue-corp-thin w-[90%] lg:text-2xl lg:mt-4 text-white"
            >
              {detailWork?.data?.attributes.campaignText}
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
        <div className="hidden lg:flex relative mb-12 justify-center gap-16">
          {images.map((image, index) => (
            <div
              className={`${
                index === 1 ? "mt-12" : index === 2 ? "mt-24" : ""
              } relative`}
              key={index}
            >
              <img src="/phone_frame.svg" />
              <div className="absolute top-4 left-4 right-4 w-[75%] lg:w-[90%] lg:h-[65vh] h-[55vh] overflow-hidden">
                <div className="h-[55vh]">
                  <div className="w-full lg:h-[65vh] h-[55vh]">
                    <img
                      className="w-full lg:h-[60vh] h-[55vh] object-cover rounded-t-2xl"
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

      <HighlightVideo
        highlightVideo={
          detailWork?.data.attributes.highlightVideo.data[0].attributes.url
        }
        videoText={
          detailWork?.data.attributes.highlightVideo.data[0].attributes.caption
        }
      />

      {/* WHITE CONTAINER */}
      <div className="overflow-hidden">
        <Carousel
          images={detailWork?.data.attributes.highlightPhoto.data.map(
            (item) => item.attributes.url
          )}
        />
      </div>

      {/* HIGHLIGHT SECTION */}
      <div className="px-5 lg:px-0 lg:pt-8">
        {/* DIVIDER */}
        <div className="lg:hidden h-[0.5px] bg-[#FFFFFF] my-8" />
        {/* CONTENT */}
        <Highlight
          campaignName='"Nama Campaign"'
          campaignText="Nah ini untuk penjelasan project atau campaign yang dilakuin, Nah ini untuk penjelasan project atau campaign yang dilakuin, Nah ini untuk penjelasan project atau campaign yang dilakuin"
        />
      </div>
      {/* HIGHLIGHT SECTION ENDS */}

      <div className="px-5 relative border-t border-[#FAFAFA]"></div>
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
