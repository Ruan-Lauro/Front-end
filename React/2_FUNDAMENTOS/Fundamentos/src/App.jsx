import './App.css';
import Events from './components/Events';
import FirstComponents from './components/FirstComponents';
import MyComponents from './components/MyComponents';
import TemplateExpression from './components/TemplateExpression';
//Comntário

function App() {
  return (<div className='App'>
    <h1>Fundamentos do React</h1>
    <FirstComponents/>
    <TemplateExpression/>
    <MyComponents/>
    <Events/>
  </div>)
}

export default App
