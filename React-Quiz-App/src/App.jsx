import { useEffect, useRef, useState } from 'react';
import axios from 'axios';

function App() {
  const [Question, setQuestion] = useState([]);
  const [QuestionState, setQuestionState] = useState(0);
  const [Score, setScore] = useState(0);
  const [Result, setResult] = useState(false);
  const [Start, setStart] = useState(false);
  const [Exit, setExit] = useState(false);
  const checkinput = useRef([]);

  useEffect(() => {
    axios("https://the-trivia-api.com/v2/questions")
      .then((res) => {
        console.log(res.data);
        setQuestion(res.data);
      })
      .catch((error) => {
        console.log("Error ==> ", error);
      });
  }, []);


  // Function to shuffle the given options:
  function Shuffling(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

 // Function for the next question:
  function nextQuestion() {
    const checkedBtn = checkinput.current.find(input => input.checked);
    
    if (checkedBtn) {
      const selectedval = checkedBtn.value;
      if (selectedval === Question[QuestionState].correctAnswer) {
        setScore(Score + 10);
      }
    }
    if (QuestionState < Question.length - 1) {
      setQuestionState(QuestionState + 1);
      checkinput.current = []; 
    } 
    else {
      setResult(true);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center font-serif min-h-screen bg-gradient-to-r from-blue-700 via-black to-gray-500 text-white p-4">
      {!Exit ? (
        <>
          <h1 className="text-5xl font-bold mb-8 animate-bounce">Quiz App</h1>

          {!Start ? (
            <div className="space-x-4">
              <button
                onClick={() => setStart(true)}
                className="px-6 py-3 text-xl bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-800 transition duration-300"
              >
                Let's start the quiz
              </button>
              <button
                onClick={() => setExit(true)}
                className="px-6 py-3 text-xl bg-red-600 text-white rounded-lg shadow-lg hover:bg-red-800 transition duration-300"
              >
                Exit
              </button>
            </div>
          ) : Question.length > 0 ? (
            !Result ? (
              <div className="bg-white text-black p-8 rounded-lg shadow-2xl max-w-lg w-full">
                <h2 className="text-2xl font-semibold mb-6">
                  Q{QuestionState + 1}: {Question[QuestionState].question.text}
                </h2>
                <ul className="space-y-4">
                  {Shuffling([...Question[QuestionState].incorrectAnswers, Question[QuestionState].correctAnswer]).map((item, index) => (
                    <li key={index} className="flex items-center">
                      <input
                        type="radio"
                        name="choice"
                        id={item}
                        value={item}
                        ref={el => (checkinput.current[index] = el)}
                        className="mr-2"
                      />
                      <label htmlFor={item} className="text-lg">{item}</label>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={nextQuestion}
                  className="mt-6 w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  Next
                </button>
              </div>
            ) : (
              <div className="text-center">
                <h2 className="text-4xl font-bold mb-4 text-yellow-300">Quiz Completed</h2>
                <p className="text-2xl mb-4">
                  You have scored: {Score} / {Question.length * 10}
                </p>
                {Score >= (Question.length * 10) / 2 ? (
                  <p className="text-green-400 text-2xl font-bold">You have passed! 😊</p>
                ) : (
                  <p className="text-red-400 text-2xl font-bold">You have failed. 😞</p>
                )}
              </div>
            )
          ) : (
            <h1 className="text-2xl font-semibold text-gray-200 animate-pulse">Loading...</h1>
          )}
        </>
      ) : (
        <div className="text-4xl text-yellow-200 font-bold">"Program Terminated"</div>
      )}
    </div>
  );
}

export default App;
