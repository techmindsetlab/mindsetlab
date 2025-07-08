import { Engagement as EngagementType } from "../../types/work-detail"
import EngagementCard from "../base/engagement-card"
import Paragraph from "../base/paragraph"

const Engagement = ({
    title,
    description,
    data = []
}: EngagementType) => {
    return (
        <div className="px-5 lg:px-0 pb-8">
            {/* Divider */}
            <div className="lg:hidden h-[0.5px] bg-[#FFFFFF] mb-8" />
            <div className="flex">
                {/* Left Section */}
                <div className="flex flex-col mr-5 w-2/3">
                    <img src="/engagement-icon.svg" className="w-2/3 self-center" />
                    <Paragraph size="xxxl" className="text-white my-5">{title}</Paragraph>
                    <Paragraph size="extrasmall" className="text-white">{description}</Paragraph>
                </div>
                {/* Right Section */}
                <div className="h-max flex flex-wrap gap-2">
                    {data.map((item) => (
                        <EngagementCard
                            key={item.id}
                            value={item.value}
                            text={item.text}
                            type={item.type}
                        />
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Engagement