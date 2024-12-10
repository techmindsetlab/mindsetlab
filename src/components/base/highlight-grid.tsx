import Paragraph from "./paragraph"

const HighlightGrid = ({
    campaignName,
    campaignText
}: {
    campaignName: string;
    campaignText: string;
}) => {
    return (
        <div className="relative h-[60vh] md:h-[80vh] lg:h-[90vh] lg:bg-[red]">
            <div className="absolute bg-white rounded w-[30%] lg:w-[10%] h-[40%] left-[7%]" />
            <div className="absolute bg-white rounded w-[15%] lg:w-[7.5%] aspect-square top-[6%] left-[47%]" />
            <div className="absolute bg-white rounded w-[28%] lg:w-[14%] aspect-square top-[1%] right-[2%]" />
            <div className="absolute bg-[green] rounded w-[28%] lg:w-[14%] aspect-square top-[30%] left-[20%]" />
            <div className="absolute bg-white rounded w-[50%] lg:w-[25%] h-[25%] top-[55%]" />
            <div className="absolute bg-white rounded w-[15%] lg:w-[7.5%] aspect-square top-[61%] left-[53%]" />
            <div className="absolute bg-white rounded w-[26%] lg:w-[13%] h-[37%] top-[46%] right-[3%]" />
            <Paragraph className="absolute w-[45%] top-[26%] right-[4%] text-white lg:text-5xl" size="xxl">{campaignName}</Paragraph>
            {/* Campaign Text for Desktop */}
            <Paragraph size="sm" className="hidden lg:block absolute text-center text-white w-full lg:text-2xl bottom-5">{campaignText}</Paragraph>
        </div>
    )
}

export default HighlightGrid;