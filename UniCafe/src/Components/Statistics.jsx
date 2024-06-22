import StatisticLine from "./StatisticLine";

const statistics=({good,neutral,bad})=>{
    const all=good+neutral+bad;
    const avg= (good*1+bad*-1)/all;
    const pos=(good/all)*100;
    console.log(all)
    if(all==0){
        return(<div>Not feedbacks yet</div>)
    }
    return (
        <table>
            <StatisticLine text='good ' value={good}/>
            <StatisticLine text='neutral ' value={neutral}/>
            <StatisticLine text='bad ' value={bad}/>
            <StatisticLine text='all ' value={all}/>
            <StatisticLine text='Average ' value={avg.toFixed(1)}/>
            <StatisticLine text='positive ' value={`${pos.toFixed(1)}%`} />
        </table>
    )
}
export default statistics;

