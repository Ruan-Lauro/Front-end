//Components
import {GrFormNext, GrFormPrevious} from 'react-icons/gr'
import {FiSend} from 'react-icons/fi'
import UserForm from './components/UserForm'
import ReviewForm from './components/ReviewForm'
import Thanks from './components/Thanks'
import Steps from './components/Steps'
import './App.css'
import { useState } from 'react'

//Hooks
import {useForm} from './hooks/useForm'

const formTemplate ={
  name: "",
  email:"",
  review: "",
  comment: ""
}

function App() {

  const [data, setData] = useState(formTemplate)

  const updateFielHandler = (key, value) =>{
    setData((prev)=> {
      return {...prev, [key]: value}
    })
  }

  const Formcomponents = [
  <UserForm data={data} updateFielHandler={updateFielHandler} />, 
  <ReviewForm data={data} updateFielHandler={updateFielHandler}/>, 
  <Thanks data={data}/>]

  const {currentSteps, currentComponent, changeStep, isLastStep, isFirstStep} = useForm(Formcomponents)

  return (
    <div className="app">
      <div className='header'>
        <h2>Deixe sua avaliação</h2>
        <p>
          Ficamos felizes com a sua compra, utilize o formulário abaixo para avaliar o produto
        </p>
      </div>
      <div className='form-container'>
        <Steps currentStep={currentSteps}/>
        <form onSubmit={(e) => changeStep(currentSteps + 1, e)}>  
          <div className="inputs-container">{currentComponent}</div>
          <div className="actions">
            {!isFirstStep && (
              <button type='button' onClick={() => changeStep(currentSteps - 1)}>
              <GrFormPrevious/>
              <span>Voltar</span>
            </button>
            )}
            {!isLastStep ? (
              <button type='submit'>
              <span>Avançar</span>
              <GrFormNext/>
            </button>
            ):(
              <button type='button'>
              <span>Enviar</span>
              <FiSend/>
            </button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
