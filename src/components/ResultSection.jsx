const ResultSection = ({ email, answers }) => {
  return (
    <div className="screen full-width">
      <h2>Congratulations!</h2>
      <p>Your email: {email}</p>
      <p>
        Your answers:
        <ul>
          {Object.entries(answers).map(([questionId, answer]) => (
            <li key={questionId}>
              Question {questionId}: {answer}
            </li>
          ))}
        </ul>
      </p>
    </div>
  )
}

export default ResultSection
