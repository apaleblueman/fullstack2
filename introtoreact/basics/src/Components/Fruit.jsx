import React, {useState} from "react";
function Fruit(){
    const [fruit, setfruit] = useState("apple");
    function changefruit(){
        setfruit("mango")// sefruit = sefruit + 1
    }
    return(
        <div>
            <h1>my favourite fruit is {fruit}</h1>
            <button onClick={changefruit}>change fruit</button>
        </div>
    )
}

export default Fruit;