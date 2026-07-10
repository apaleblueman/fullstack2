import React, {useState} from "react";
function Counter(){
    const [counter, hookfunction] = useState(0);
    function changeIncrement(){
        hookfunction(counter+1);
    }
    function changeDicrement(){
        if(counter>0){
            hookfunction(counter-1);
        }
    }
    function Reset(){
        hookfunction(counter*0);
    }
    return(
        <div>
            <h1>Counter = {counter}</h1>
            <button onClick={changeIncrement}>Increase</button>
            <button onClick={changeDicrement}>Decrease</button>
            <button onClick={Reset}>Reset</button>
        </div>
    )
}

export default Counter;