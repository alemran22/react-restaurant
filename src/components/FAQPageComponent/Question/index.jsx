import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

/* eslint-disable react/prop-types */
const Question = ({ id, question, answer, handleShowAnswer, showAnswer }) => {
  return (
    <button
      onClick={() => handleShowAnswer(id)}
      className="px-2 md:px-10 py-1 md:py-7 border border-[#C4C4C4] justify-between"
    >
      <div className="text-start">
        <div className="flex justify-between items-center ">
          <h3 className="md:text-2xl font-medium">{question} </h3>
          {showAnswer === id ? (
            <IoIosArrowUp className="text-xl md:text-2xl" />
          ) : (
            <IoIosArrowDown className="text-xl md:text-2xl" />
          )}
        </div>
        {showAnswer === id && (
          <p className="text-base md:text-xl mt-3">{answer}</p>
        )}
      </div>
    </button>
  );
};

export default Question;
