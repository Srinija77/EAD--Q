import React,{useState} from "react";
function Counter()
{
    const[count,setCount]=useState(0);
    return(
        <div align="center">
            <h2>counter</h2>
            <button onClick={()=>setCount(count+1)}>Increment</button>
              <button onClick={()=>setCount(count-1)}>Decrement</button>
                <button onClick={()=>setCount(0)}>Reset</button>
                <h2>count:{count}</h2>

        </div>
    );
}
export default Counter;