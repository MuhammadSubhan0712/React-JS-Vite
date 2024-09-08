import { useEffect, useRef, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [Question, setQuestion] = useState([])
  const [QuestionState , setQuestionState] = useState(0)
  const [Score , setScore] = useState(0)
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


// Function to shuffle the given options:
function Shuffling(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)) ;

    [array[i] , array[j]] = [array[j] , array[i]]
  }
  return array
}


// Function for the next question:
  function nextQuestion(index) {
    const checkedBtn =  checkinput.current.find(input => input.checked);
    if (checkedBtn) {
      const selectedval = checkedBtn.value;
      console.log("Selected Answer ==>" , selectedval);
    }
    QuestionState < Question.length - 1 ? setQuestionState(QuestionState + 1) : alert("Questions End");
  }



  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Quiz App</h1>
      
      <button >Start the Quiz</button>
    
      {Question.length > 0 ? (
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Q{QuestionState + 1}: {Question[QuestionState].question.text}</h2>
          <ul className="space-y-4">
            {Shuffling([...Question[QuestionState].incorrectAnswers, Question[QuestionState].correctAnswer]).map((item, index) => (
              <li key={index} className="flex items-center">
                <input type="radio" name="choice" id={item} value={item} ref={el => (checkinput.current[index] = el)} className="mr-2"/>
                <label htmlFor={item} className="text-lg">{item}</label>
              </li>
            ))}
          </ul>
          <button onClick={nextQuestion} className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700">Next</button>
        </div>
      ) : (
        <h1 className="text-2xl font-semibold text-gray-700">Loading...</h1>
      )}
    </div>
  

  )
}

export default App










