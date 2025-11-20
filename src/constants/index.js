export const INITIAL_STATE = {
  currentStep: 0,
  email: "",
  answers: {},
}

export const QUESTIONS = [
  {
    id: 1,
    text: "What does Array.prototype.map() do?",
    options: [
      "Mutates the original array",
      "Filters elements of the array",
      "Creates a new array by applying a function to each element",
      "Returns the first element of the array",
    ],
    answer: 2,
  },
  {
    id: 2,
    text: "What happens when using let to declare a variable?",
    options: [
      "The variable is hoisted and initialized with undefined",
      "The variable is hoisted but not accessible before initialization (TDZ)",
      "The variable is not hoisted",
      "The variable is accessible before the declaration",
    ],
    answer: 1,
  },
]
