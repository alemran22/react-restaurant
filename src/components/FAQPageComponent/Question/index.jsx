/* eslint-disable react/prop-types */
const Question = ({ id, question, answer, handleShowAnswer, showAnswer }) => {
  return (
    <button
      onClick={() => handleShowAnswer(id)}
      className="flex md:px-10 py-1 md:py-7 border border-[#C4C4C4] justify-between"
    >
      {/* left */}
      <div className="text-start">
        <h3 className="md:text-2xl font-medium">{question} </h3>
        {showAnswer === id && (
          <p className="text-base md:text-xl mt-3">{answer}</p>
        )}
      </div>
      {/* right icon */}
      <div className="">icon</div>
    </button>
  );
};

export default Question;
