import React, { useState } from 'react'
import QUESIONS from '../questions.js'

const Quiz = () => {
const [userAnswer,setUserAnswers]=useState([])

const activeQuestionIndex=userAnswer.length;
function handleSelectAnswer(selectedAnswer){
    setUserAnswers((prevUserAnswers)=> [...prevUserAnswers,selectedAnswer])
}

  return (
   <div id='quiz'>
     <div id='question'>
        <h2>{QUESIONS[activeQuestionIndex].text}</h2>
        <ul id='answers'>
        {QUESIONS[activeQuestionIndex].answers.map((answer)=>
        <li key={answer} className='answer'>
            <button onClick={()=>handleSelectAnswer(answer)}>{answer}</button>
        </li>)}
        </ul>
    </div>

   </div>
  )
}


export default Quiz