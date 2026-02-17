import { questions } from './questions'
import './App.css'
import { useState } from 'react'

export default function Quiz() {
    const [trigger, setTrigger] = useState(0)
    const [answers, setAnswer] = useState('')
    const [score, setScore] = useState(0)

    const formdata = questions[trigger]



      function handleSubmit(e) {
        if(!answers) {
            alert('Please Select an answer to move to the next question')
        return }
        e.preventDefault()
if(answers===formdata.answer){
    setScore(score+1)
}
setAnswer('')
setTrigger(trigger+1)


    }
    return (
<form onSubmit={handleSubmit} className='forms' >
{ trigger < questions.length ?
         <>
            <div>
<h1>Question {formdata.id}</h1>
            <h2>{formdata.question}</h2>
                {/* for the answer Options */}
                <p className='options'>{formdata.options.map((item, index) =>
                (<label key={index}>
                    <input
                        type='radio'
                        name={`question -${formdata.id}`}
                        value={item}
                        checked={answers===item}
                        onChange={e=>setAnswer(e.target.value)} />
                    {item}
                </label>))}
                </p>

            </div>
            <button onClick={handleSubmit}>Next Question </button>
            /</>:(<h1 id='totalscore'>You scored {score}/{questions.length}</h1>)
            }
            
        </form>)
}