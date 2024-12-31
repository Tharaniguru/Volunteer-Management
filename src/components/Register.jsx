import { useRef,useState,useEffect } from "react"


var UseRef= ()=>{
  var [text,setText]=useState("");
  var prevText=useRef("");

  useEffect(()=>{
    prevText.current=text
  },[text])

  return (
    <section>
      <h1>this is UseRef</h1>
      <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
      <h3>my current render is {text}</h3>
      <h3>previous text is {prevText.current}</h3>
    </section>
  )
}

export default UseRef;