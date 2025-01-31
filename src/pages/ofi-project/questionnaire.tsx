import Paragraph from "../../components/base/paragraph";
import QuestionnaireSection from "../../components/section/questionnaire-section";

const Questionnaire = () => {
    return (
        <div className="mt-[2rem] lg:mt-[3rem] px-4 lg:px-12 lg:min-h-[35vh]">
            <img
                src="/logo-final-ofi.png"
                alt="Logo OFI"
                className="h-full w-[30%] lg:w-[10%] transition-transform duration-100 mx-auto"
                style={{
                    transform: `translateX(${-((1 - 1) * 20)}%)`,
                }}
            />
            <Paragraph
                size="xxl"
                className="text-[#FAFAFA] mt-6 text-center font-bold"
            >
                Country Meet 2025
            </Paragraph>
            <Paragraph
                size="xl"
                className="text-[#FAFAFA] text-center mb-4 font-bold"
            >
                Indonesia Cluster
            </Paragraph>
            <QuestionnaireSection />
        </div>
    );
};

export default Questionnaire;
