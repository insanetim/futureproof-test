import { QUESTIONS } from "../constants"

const ResultSection = ({ email, answers }) => {
  const result = Object.entries(answers).reduce(
    (acc, [questionId, answer]) => {
      const qustion = QUESTIONS.find(q => q.id === Number(questionId))
      const correctAnswerString = qustion.options[qustion.answer]
      if (answer === correctAnswerString) {
        acc.correct++
      } else {
        acc.incorrect++
      }
      return acc
    },
    { correct: 0, incorrect: 0 }
  )

  return (
    <div className="screen full-width">
      <h2>Congratulations!</h2>
      <p>Your email: {email}</p>
      <p>Your answers:</p>
      <ul>
        {Object.entries(answers).map(([questionId, answer]) => (
          <li key={questionId}>
            Question {questionId}: {answer}
          </li>
        ))}
      </ul>
      <p>
        Correct: {result.correct}, Incorrect: {result.incorrect}
      </p>
    </div>
  )
}

export default ResultSection
