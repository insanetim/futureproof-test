import { useEffect, useState } from "react"
import EmailSection from "./components/EmailSection"
import QuestionSection from "./components/QuestionSection"
import ResultSection from "./components/ResultSection"
import { INITIAL_STATE, QUESTIONS } from "./constants"
import { loadLocalStorage, saveLocalStorage } from "./lib/localStorage"

const getInitialState = () => {
  const localState = loadLocalStorage("quizData")
  return localState || INITIAL_STATE
}

function App() {
  const [userData, setUserData] = useState(getInitialState())
  const [direction, setDirection] = useState("")

  const nextStep = () => {
    setDirection("next")
    setUserData(prev => ({
      ...prev,
      currentStep: prev.currentStep + 1,
    }))
  }

  const resetQuiz = () => {
    setDirection("previous")
    setUserData(INITIAL_STATE)
  }

  const setAnswer = (questionId, answer) => {
    setUserData(prev => {
      return {
        ...prev,
        answers: {
          ...prev.answers,
          [questionId]: answer,
        },
      }
    })
  }

  const setUserEmail = email => {
    setUserData(prev => ({
      ...prev,
      email,
    }))
  }

  const screens = [
    ...QUESTIONS.map(question => (
      <QuestionSection
        question={question}
        userAnswer={userData.answers[question.id]}
        setAnswer={setAnswer}
        onNext={nextStep}
      />
    )),
    <EmailSection
      userEmail={userData.email}
      setUserEmail={setUserEmail}
      onNext={nextStep}
    />,
    <ResultSection
      email={userData.email}
      answers={userData.answers}
    />,
  ]

  useEffect(() => {
    saveLocalStorage("quizData", userData)
  }, [userData])

  return (
    <div className="container">
      <div className={`content ${direction}`}>
        {screens[userData.currentStep]}
      </div>
      <hr />
      <div className="reset-button-container">
        <button
          className="secondary"
          onClick={resetQuiz}
        >
          Reset
        </button>
      </div>
    </div>
  )
}

export default App
