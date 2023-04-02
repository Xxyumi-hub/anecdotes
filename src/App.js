import { useState } from 'react';

function App() {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const [points, setPoints] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
  })
  const [selected, setSelected] = useState(0)

  const onVoteClick = () => {
    setPoints(points => {
      const copy = {...points}
      copy[selected] = copy[selected] + 1
      console.log('prev:', copy);
      return copy;
    })
  }

  const determineMostVotes2 = (points) => {
    let maxProperty = 0
    let max = 0;
    for (const point in points) {
      if(points[point] > max) {
        max = points[point];
        maxProperty = point;
      }
    }
    return maxProperty;
  }

  return (
    <div className="App">
      <h2>Anecdote of the day</h2>
      {anecdotes[selected]}
      <p>has {points[selected]} votes</p>
      <button onClick={onVoteClick}>vote</button>
      <button onClick={() => setSelected(Math.floor(Math.random() * 6))}>Next anecdote</button>
      <h2>Anecdote with most votes</h2>

      <p>{anecdotes[determineMostVotes2(points)]}</p>
      <p>has {points[determineMostVotes2(points)]} points</p>
    </div>
  );
}

export default App;
