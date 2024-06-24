import { useState } from 'react'
import Button from './Components/Button'
import MaxVal from './Components/MaxVal'

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
  const [points,setPoints]=useState({ 0:0 , 1:0 , 2:0 , 3:0 , 4:0 , 5:0 , 6:0 , 7:0 })
  const handleNext= ()=>{
    const max=anecdotes.length
    const randomInteger=Math.floor(Math.random()*max);
    console.log('INDEX: ',randomInteger)
    console.log('TOTAL:',points[selected])
    setSelected(randomInteger);
  }
  const Votes = () => {
    const updatedPoints = { ...points };
    updatedPoints[selected] += 1;
    setPoints(updatedPoints);
  };
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} points</p>
      <Button onClick={handleNext} text={'next anecdote'}/>
      <Button onClick={Votes} text={'vote'}/>
      <h1>Anecdote with most votes</h1>
      <MaxVal points={points} anecdotas={anecdotes}/>
    </div>
  )
}

export default App