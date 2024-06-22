import { useState } from 'react'
import Statistics from './Components/Statistics.jsx';



const App = () => {
  const [good,setGood]=useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const CountGood = () => {
    const cGood=good+1;
    setGood(cGood)}
  const CountBad=()=>{ 
      const cBad=bad+1;
      setBad(cBad)};
  const CountNeutral=()=>
    { const cNeutral=neutral+1;
      setNeutral(cNeutral)};

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={CountGood}>good</button>
      <button onClick={CountNeutral}>neutral</button>
      <button onClick={CountBad}>bad</button>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  );
};


export default App