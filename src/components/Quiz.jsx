import React, { useState } from 'react'
import QUESIONS from '../questions.js'
import quizCompleteImg from '../assets/quiz-complete.png'

const Quiz = () => {
const [userAnswer,setUserAnswers]=useState([])

const activeQuestionIndex=userAnswer.length;

const quizComplete=activeQuestionIndex===QUESIONS.length
function handleSelectAnswer(selectedAnswer){
    setUserAnswers((prevUserAnswers)=> [...prevUserAnswers,selectedAnswer])
}

if(quizComplete){

  return (
    <div id='summary'>
      <img src={quizCompleteImg} alt='quiz complete image'/>
      <h2>Quiz completed</h2>
    </div>
  )

}

const shuffledAnswer=[...QUESIONS[activeQuestionIndex].answers]
shuffledAnswer.sort(()=> Math.random()-0.5)

  return (
   <div id='quiz'>
     <div id='question'>
        <h2>{QUESIONS[activeQuestionIndex].text}</h2>
        <ul id='answers'>
        {shuffledAnswer.map((answer)=>
        <li key={answer} className='answer'>
            <button onClick={()=>handleSelectAnswer(answer)}>{answer}</button>
        </li>)}
        </ul>
    </div>

   </div>
  )
}


export default Quiz