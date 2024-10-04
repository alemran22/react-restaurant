import { useState } from "react";
import { faqItemData } from "../../constant/faq_constant";
import Question from "./Question";

const QuestionAnswerSection = () => {
  const [showAnswer, setShowAnswer] = useState(null);
  const handleShowAnswer = (id) => {
    setShowAnswer(id);
  };
  return (
    <div className="container mx-auto w-full md:w-[927px] my-6 md:my-36 p-5">
      {/* section heading */}
      <div className="text-center md:my-14">
        <h3 className="font-medium text-lg py-1 border-[#E1B168] border-y-2 inline-block uppercase">
          Questions
        </h3>
        <h2 className="font-bold text-2xl md:text-[40px] my-3">
          Frequently Asked Questions
        </h2>
      </div>
      {/* questions */}
      <div className="flex flex-col gap-2 md:gap-4">
        {faqItemData.map((item) => (
          <Question
            key={item.id}
            {...item}
            handleShowAnswer={handleShowAnswer}
            showAnswer={showAnswer}
          />
        ))}
      </div>
    </div>
  );
};

export default QuestionAnswerSection;
