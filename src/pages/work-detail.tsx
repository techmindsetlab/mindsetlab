import Paragraph from "../components/base/paragraph";
import Slider from "react-slick";
import Contact from "../components/section/contact-section";
import WorkDetailDivider from "../components/base/work-detail-divider";
import Highlight from "../components/section/highlight";
import moment from "moment";
import { useParams } from "react-router-dom";
import HighlightVideo from "../components/section/highlight-video";
import useSWR from "swr";
import { fetcher } from "../services/fetcher";
import { WorkDetailTypes } from "../types/work-detail";
import Campaign from "../components/section/campaign";
import Engagement from "../components/section/engagement";

interface Props {
  scrollRotation: number;
}

const WorkDetails = ({ scrollRotation }: Props) => {
  const { id } = useParams<{ id: string }>();

  const { data, error, isLoading } = useSWR<WorkDetailTypes>(
    id
      ? `${import.meta.env.VITE_API_BASE_URL}/slugify/slugs/work/${id}?populate=scopeOfWorks&populate=banner.image&populate=highlightVideo&populate=highlightPhoto&populate=campaignHighlight&populate=campaignLandscapeMedia&populate=campaignPortraitMedia&populate=engagement.data`
      : null,
    fetcher,
    {
      dedupingInterval: 1000 * 60 * 10,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  if (isLoading) return <div className="px-5 lg:px-12">Loading project...</div>;
  if (error || !data) return <div className="px-5 lg:px-12">Failed to load project</div>;

  const detail = data.data.attributes;

  const handleViewProject = (link: string) => {
    window.open(link, "_blank");
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
      <div className="px-4 lg:px-12">
        <div className="flex text-[#FAFAFA] items-center mb-0 lg:mb-12 justify-between">
          <Paragraph size="sm" className="text-sm lg:text-2xl">Projects</Paragraph>
          <img src="/gradient_octagon.svg" className="w-5 h-5" />
          <Paragraph size="sm" className="text-sm lg:text-xl">{detail.name}</Paragraph>
        </div>

        <div className="block lg:hidden">
          <WorkDetailDivider viewProject={handleViewProject} link={detail.projectURL || ""} />
        </div>

        <div>
          <Paragraph size="xxxl" className="text-[#FAFAFA] lg:text-[4rem]">{detail.title}</Paragraph>
          <Paragraph size="sm" className="text-[#FAFAFA] lg:text-xl font-neue-corp-thin lg:mt-4 mt-1">{detail.tagline}</Paragraph>
          <div className="hidden lg:block">
            <WorkDetailDivider viewProject={handleViewProject} link={detail.projectURL || ""} />
          </div>

          <div className="flex items-center mt-4 mb-3 text-[#FAFAFA] justify-between">
            <Paragraph size="sm" className="lg:text-xl">{detail.category}</Paragraph>
            <Paragraph size="sm" className="border px-1 rounded-md border-[#FAFAFA]">
              {moment(detail.date).format("YYYY")}
            </Paragraph>
          </div>

          <div className="lg:h-[42rem] h-[14rem] rounded-lg overflow-hidden">
            <img src={detail.banner.image.data.attributes.url} className="w-full h-full object-cover rounded-lg" />
          </div>

          <div className="lg:hidden flex items-start lg:mt-8 mt-3 pb-3 mb-4 border-b border-b-[#FAFAFA] justify-between">
            <div>
              {detail.scopeOfWorks.map((item) => (
                <Paragraph key={item.id} size="xl" className="text-[#FAFAFA] uppercase font-neue-corp-bold">
                  {item.scopeOfWork}
                </Paragraph>
              ))}
            </div>
            <img src="/gradient_octagon.svg" className="w-5 mt-1 h-5" />
          </div>
        </div>

        <div className="lg:flex lg:border-b lg:mb-8 justify-between lg:px-12 lg:mt-8">
          <div className="hidden space-y-2 lg:block">
            {detail.scopeOfWorks.map((item) => (
              <Paragraph key={item.id} size="md" className="text-[#FAFAFA]">
                {item.scopeOfWork}
              </Paragraph>
            ))}
          </div>

          <div className="mb-8 lg:w-[70%] flex flex-col gap-6 lg:gap-0 w-full">
            <Paragraph size="xl" className="text-[#FAFAFA] lg:text-4xl">{detail.explanationTitle}</Paragraph>
            <Paragraph size="lg" className="font-neue-corp-thin w-[90%] lg:text-2xl lg:mt-4 text-white">
              {detail.explanationDescription}
            </Paragraph>
          </div>

          <div className="flex lg:hidden relative mb-12 justify-center">
            <img src="/phone_frame.svg" />
            <div className="absolute top-4 w-[75%] lg:w-[90%] lg:h-[65vh] h-[55vh] overflow-hidden">
              <Slider {...settings} className="h-[55vh]">
                {detail.highlightPhoto.data.map((image, index) => (
                  <div key={index} className="w-full lg:h-[65vh] h-[55vh]">
                    <img
                      className="w-full lg:h-[65vh] h-[55vh] object-cover rounded-t-2xl"
                      src={image.attributes.url}
                      alt={`Slide ${index + 1}`}
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex relative mb-12 justify-center gap-16">
          {detail.highlightPhoto.data.map((image, index) => (
            <div
              className={`${index === 1 ? "mt-12" : index === 2 ? "mt-24" : ""} relative`}
              key={index}
            >
              <img src="/phone_frame.svg" />
              <div className="absolute top-4 left-4 right-4 w-[75%] lg:w-[90%] lg:h-[65vh] h-[55vh] overflow-hidden">
                <div className="h-[55vh]">
                  <div className="w-full lg:h-[55vh] h-[55vh]">
                    <img
                      className="w-full lg:h-[55vh] h-[55vh] object-cover rounded-t-2xl"
                      src={image.attributes.url}
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
        highlightVideo={detail.highlightVideo.data.attributes.url}
      />

      <div className="px-5 lg:px-0 lg:pt-8">
        <div className="lg:hidden h-[0.5px] bg-[#FFFFFF] my-8" />
        <Highlight
          campaignName={detail.campaignTitle}
          campaignText={detail.campaignText}
          campaignHighlights={detail.campaignHighlight.data}
        />
      </div>

      <Campaign
        campaignLandscapeMedia={detail.campaignLandscapeMedia.data.attributes}
        campaignPortraitMedia={detail.campaignPortraitMedia.data.attributes}
        campaignDescription={detail.campaignDescription}
      />

      {/* Engagement Section */}
      {detail.engagement && (
        <Engagement
          title={detail.engagement.title}
          description={detail.engagement.description}
          data={detail.engagement.data}
        />
      )}
      {/* Engagement Section Ends */}

      <div className="px-5 relative border-t border-[#FAFAFA]" />
      <Contact
        isScrollable={false}
        scrollRotation={scrollRotation}
        typography={"Got an idea that’s fire or just wanna collab on something epic?"}
      />
    </div>
  );
};

export default WorkDetails;
