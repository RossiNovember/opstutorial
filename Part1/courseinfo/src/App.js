import {useState} from 'react'
import Button from './components/Button'

const App = () => {
  
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(7).fill(0))

  // Showing a random anecdote while also making sure it's never the same anecdote twice
  const getRandomAnecdote = () => {
    let number = Math.floor(Math.random() * 7)
    while (number === selected) {
       number = Math.floor(Math.random() * 7)
    }
    setSelected(number)
  }
  
  const popular = () => {
      let max = 0
      votes.forEach(vote => max = Math.max(max, vote))
      return votes.indexOf(max)
  }



  const vote = () => {
    setVotes(prev => {
      const arr = [...prev]
      arr[selected] = arr[selected] + 1
      return arr
    })
  }

  return (
    <div>
     <h2>Anecdote of the day</h2>
     <h2>{anecdotes[selected]}</h2>
     <h3>has {votes[selected]} votes</h3>
     <Button handleClick={vote} text="Vote"/>
     <Button handleClick={getRandomAnecdote} text="Next Anecdote"/>
     <h2>{anecdotes[popular()]}</h2>
     </div>
  )
}

export default App