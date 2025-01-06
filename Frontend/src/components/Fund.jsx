import { useState } from "react"
export default function Fund() {
    var [counter,setCount]=useState(0);
    function increment(){
        setCount(counter+1);
    }

    function decrement(){
        setCount(counter-1);
    }

    function reset(){
        setCount(0);
    }
  return (
    <div>
        <h1>The fundind is increased to {counter}</h1>
        <button onClick={increment}> Provid Fund </button>
        <button onClick={decrement}> Refund </button>
        <button onClick={reset}> Provid Fund </button>

      
    </div>
  )
}
