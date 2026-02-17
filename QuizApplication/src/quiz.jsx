import { questions } from './questions'
import './App.css'
import { useState } from 'react'

export default function Quiz() {
    const [trigger, setTrigger] = useState(0)
    const [answers, setAnswer] = useState('')
    const [score, setScore] = useState(0)

    const formdata = questions[trigger]



      function handleSubmit(e) {
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
         <><h1>Question {formdata.id}</h1>
            <h2>{formdata.question}</h2>
            <div>

                {/* for the answer Options */}
                {formdata.options.map((item, index) =>
                (<label key={index}>
                    <input
                        type='radio'
                        name={`question -${formdata.id}`}
                        value={item}
                        checked={answers===item}
                        onChange={e=>setAnswer(e.target.value)} />
                    {item}
                </label>))}

            </div>
            <button onClick={handleSubmit}> GetNextguestion</button>
            /</>:(<h1 id='totalscore'>You scored {score}/{questions.length}</h1>)
            }
            
        </form>)
}