import { useEffect, useRef, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [Question, setQuestion] = useState([])
  const [QuestionState , setQuestionState] = useState(0)

  const checkinput = useRef([])

  useEffect(() => {

    axios("https://the-trivia-api.com/v2/questions")
    .then((res) => { 
      console.log(res.data);
      setQuestion(res.data);
    })

    .catch((error) => { 
      console.log("Error ==> " , error);
      
    })
  }, [])

function Shuffling(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)) ;

    [array[i] , array[j] = array[j] , array[i]]
  }
  return array
}


  function nextQuestion(index) {
    const checkedBtn =  checkinput.current.find(input => input.checked);
    if (checkedBtn) {
      const selectedval = checkedBtn.value;
      console.log("Selected Answer ==>" , selectedval);
    }
    QuestionState < Question.length - 1 ? setQuestionState(Question + 1) : alert("Questions End");
  }



  return (
    <>
     <h1>Quiz App</h1>
      {Question.length > 0 ? <div>
        <h1>Q{QuestionState + 1}: {Question[QuestionState].Question.text}</h1>
        <ul>
          {Shuffling([...Question[QuestionState].incorrectAnswers , Question[QuestionState].correctAnswer]).map((item , index)=>{
            return <li key={index}>
            <input type="radio" name='choice' id={item} value={item} ref={el => (checkinput.current[index] = el)}/>
            <label htmlFor={item}>{item}</label>
          </li>
          
          })}
        </ul>
        <button onClick={()=> nextQuestion()}>Next {Question.length}</button>
      </div> : <h1>Loading...</h1>}
    </>

  )
}

export default App










