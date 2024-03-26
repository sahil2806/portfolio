import React, { useState,useRef } from 'react'

const Useref = () => {
 
 const [name,SetName] = useState("sahil sahu");
 const userrefElement = useRef("");
 
 function change(){
   userrefElement.current.style.color="red";
 }

 function change1(){
    userrefElement.current.style.color="blue";
  }

  return (
     
    <div> 
        <h1>sahil sahu</h1>
        <input ref={userrefElement} type='text' value={name}></input><br></br>
        <button onClick={change} >Change Color</button>
        <button onClick={change1} >Change Color</button>

    </div> 
  )
}

export default Useref