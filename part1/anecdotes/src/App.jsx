import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState({
    0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0
  })

  const handleClickRandom = () => {
    setSelected(Math.floor(Math.random() * 8))
  }

  const handleVoteClick = () => {
    const newVotes = { ...vote }
    newVotes[selected] += 1
    setVote(newVotes)
  }

  const mostVotes = Math.max(...Object.values(vote))
  const mostVotesKey = Object.keys(vote).find(key => vote[key] === mostVotes)

  return (
    <div>
      <h2>Anecdote of the day</h2>
      {anecdotes[selected]} <br />
      has {vote[selected]} votes
      <div>
        <button onClick={handleVoteClick}>vote</button>
        <button onClick={handleClickRandom}>next anecdote</button>
      </div>

      <h2>Anecdote with most votes</h2>
      {anecdotes[mostVotesKey]} <br />
      has {vote[mostVotesKey]} votes
    </div>
  )
}

export default App