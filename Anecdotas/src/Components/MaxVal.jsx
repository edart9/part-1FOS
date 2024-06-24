const MaxVal=({points,anecdotas})=>{
    var claves= Object.keys(points);
    var maxClave=claves[0];
    for (var i=0;i<claves.length;i++){
        var value=claves[i];
        if(points[value]>points[maxClave]) maxClave=value;
    }
    return (
        <div>
            <p>{anecdotas[maxClave]}</p>
            <p>has: {points[maxClave]} votes</p>
        </div>
    )
}
export default MaxVal;