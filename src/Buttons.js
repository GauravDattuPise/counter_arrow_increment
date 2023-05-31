import React, {useState} from "react"

export function Buttons(){

  const [count,setCount] = useState(0);

  function HandleCalc(value){
    setCount((prev) => prev + value)
  }

  return(
    <div>
           <h1>Hello</h1>          

           <button onClick={()=>HandleCalc(1)}>1</button>
           <button onClick={()=>HandleCalc(-1)}>-1</button>
           <p>{count}</p>
           <button onClick={()=>HandleCalc(10)}>10</button>
           <button onClick={()=>HandleCalc(-10)}>-10</button>
    </div>
  )
}