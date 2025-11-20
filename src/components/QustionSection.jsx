const QuestionSection = ({ question, userAnswer, setAnswer, onNext }) => {
  return (
    <div className="screen full-width">
      <article>{question.text}</article>
      {question.options.map((option, index) => (
        <label key={index}>
          <input
            type="radio"
            name="answer"
            value={index}
            checked={userAnswer === option}
            onChange={() => setAnswer(question.id, option)}
            disabled={userAnswer !== undefined}
            aria-invalid={
              userAnswer === undefined ? undefined : question.answer !== index
            }
          />
          {option}
        </label>
      ))}
      <div className="button-container">
        <button
          disabled={userAnswer === undefined}
          onClick={onNext}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default QuestionSection
