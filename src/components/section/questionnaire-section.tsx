import { Link } from "react-router-dom";

const QuestionnaireSection = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center lg:justify-center">
            {/* Cards */}
            <Link
                to="https://app.sli.do/event/tdBsNfLTRKJfrFYP6HUoyZ"
                className="cursor-none bg-white rounded-md p-4 mb-3 lg:mr-6 border w-full text-center"
            >
                Farewell Notes for Ravi Pokhriyal
            </Link>
            <Link
                to="https://app.sli.do/event/96dqiQoFiyRZzAKxyd6s2i"
                className="cursor-none bg-white rounded-md p-4 mb-3 lg:mr-6 border w-full text-center"
            >
                Q&A Pre Event Meeting Question
            </Link>
            <Link
                to="https://app.sli.do/event/dPfLvSSkLLG8fgZBpfMTgX"
                className="cursor-none bg-white rounded-md p-4 mb-3 lg:mr-6 border w-full text-center"
            >
                Q&A Country Meet 2025
            </Link>
            <Link
                to="https://interprefy.interpret.world/loginlink?token=ofimeeting"
                className="cursor-none bg-white rounded-md p-4 mb-3 border w-full text-center"
            >
                Audio Translation
            </Link>
        </div>
    )
}

export default QuestionnaireSection
