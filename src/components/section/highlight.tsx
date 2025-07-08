import { Daum3 } from "../../types/work-detail";
import HighlightGrid from "../base/highlight-grid";
import Paragraph from "../base/paragraph";

const Highlight = ({
  campaignName,
  campaignText,
  campaignHighlights
}: {
  campaignName: string;
  campaignText: string;
  campaignHighlights: Daum3[];
}) => {
  return (
    <div>
      <HighlightGrid
        campaignName={campaignName}
        campaignText={campaignText}
        campaignHighlights={campaignHighlights}
      />
      {/* Campaign Text for mobile */}
      <Paragraph
        size="extrasmall"
        className="lg:hidden text-center text-white mt-[-2.5rem] lg:mt-[-4rem] lg:text-2xl relative z-10 mb-3"
      >
        {campaignText}
      </Paragraph>
    </div>
  );
};

export default Highlight;
