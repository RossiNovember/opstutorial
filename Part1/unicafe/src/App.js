import {useState} from 'react'
import Button from './components/Button'
import Statistics from './components/Statistics'

const App = () => {

  const [good, setGood] = useState(0)
  const [bad, setBad] = useState(0)
  const [neutral, setNeutral] = useState(0)
  
  const all = good + bad + neutral
  
  const avg = ((good + -bad) / all).toFixed(2)

  const pos = (good / all).toFixed(2)

  return (
    <div>
      <h1>Give feedback</h1>
      <Button text="Good" handleClick={() => setGood(good + 1)}/>
      <Button text="Neutral" handleClick={() => setNeutral(neutral + 1)}/>
      <Button text="Bad" handleClick={() => setBad(bad + 1)}/>
      <h1>Statistics</h1>
      {all > 0 ? <Statistics good={good} neutral={neutral} bad={bad} all={all} avg={avg} pos={pos}/> : "No feedback given"}
    </div>
  )
}

export default App;
