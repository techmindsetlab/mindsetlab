import HighlightGrid from "../base/highlight-grid";
import Paragraph from "../base/paragraph";

const Highlight = ({
  campaignName,
  campaignText,
}: {
  campaignName: string;
  campaignText: string;
}) => {
  return (
    <div>
      <HighlightGrid campaignName={campaignName} campaignText={campaignText} />
      {/* Campaign Text for mobile */}
      <Paragraph
        size="sm"
        className="lg:hidden text-center text-white mt-[-2.5rem] lg:mt-[-4rem] lg:text-2xl relative z-10 mb-3"
      >
        {campaignText}
      </Paragraph>
    </div>
  );
};

export default Highlight;
