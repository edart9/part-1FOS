import Counters from "./Counters";
import Statistics from './Statistics';
const History=({good,neutral,bad})=>{
    if ((good+bad+neutral)===0)
        {return <div>Not feedback given</div>}
    else
        {return <div>
            <Counters name='good' count={good}/>
      <Counters name='neutral' count={neutral}/>
      <Counters name='bad' count={bad}/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
        </div>}
}
export default History;