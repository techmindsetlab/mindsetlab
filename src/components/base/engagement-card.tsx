import Paragraph from "./paragraph"

const EngagementCard = ({
    value,
    text,
    type = "Percentage"
}: {
    value: number;
    text: string;
    type: "Percentage" | "Number"
}) => {
    return (
        <div className="w-[47%] h-fit aspect-square px-3 py-2 rounded border border-white flex flex-col justify-between">
            <Paragraph size="xxl" className="text-white">{value}<span className="text-sm">{type === 'Percentage' && '%'}</span></Paragraph>
            <Paragraph size="extrasmall" className="text-white">{text}</Paragraph>
        </div>
    );
};



export default EngagementCard