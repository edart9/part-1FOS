const Content=({course})=>{
    return(
        course.map((element, index) => (
            <div key={index}>
              {element.name}: {element.exercises}
            </div>
        ))
    )
 }
export default Content;
