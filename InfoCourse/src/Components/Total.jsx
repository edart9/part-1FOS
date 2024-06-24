const Total=({course})=>{
    let t=0
    course.parts.map((element)=>
        t=t+element.exercises
    )
    return (
        <div>Sum of exercises: {t}</div>
    )
}
export default Total;