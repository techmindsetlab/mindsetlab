import { Attributes5 } from "../../types/work-detail";
import Paragraph from "../base/paragraph";

interface Props {
  campaignLandscapeMedia: Attributes5;
  campaignPortraitMedia: Attributes5;
  campaignDescription: string | undefined;
}

const Campaign = ({ campaignLandscapeMedia, campaignPortraitMedia, campaignDescription }: Props) => {
  return (
    <div className="px-4 lg:px-8">
      <div className="w-full lg:h-[45rem] h-[14rem]">
        {
          campaignLandscapeMedia.mime.includes('video')
            ? <video
              src={campaignLandscapeMedia.url}
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            />
            : <img
              src={campaignLandscapeMedia.url}
              className="w-full h-full object-cover"
            />
        }
      </div>
      <div className="mt-6 justify-between flex">
        <Paragraph className="text-[#FAFAFA] w-[50%] lg:text-xl">{campaignDescription}</Paragraph>
        <div className="flex relative mb-12 w-[40%] justify-center">
          <img src="/phone_frame.svg" />
          <div className="absolute top-4 rounded-md w-[85%] lg:w-[40%] lg:h-[65vh] h-[55vh] overflow-hidden">
            {
              campaignPortraitMedia.mime.includes('video')
                ? <video
                  src={campaignPortraitMedia.url}
                  className="w-full h-[47%] object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
                : <img
                  src={campaignPortraitMedia.url}
                  className="w-full h-[47%] object-cover"
                />
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Campaign;
