import { useContext } from "react"
import { QuizContext } from "../context/quiz"

import "./Option.css"

const Option = ({option, selectOption, answer, hide}) => {

    const [quisState, dispatch] = useContext(QuizContext)
  return (
    <div className={`option ${quisState.answerSelected && option === answer ? 'correct': ""} ${quisState.answerSelected && option !== answer ? 'wrong': ""} ${hide ? "hide": ""}`} onClick={()=> selectOption()} >
        <p>{option}</p>
    </div>
  )
}

export default Option