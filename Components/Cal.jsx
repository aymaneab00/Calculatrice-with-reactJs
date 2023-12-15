import React, { useState} from "react";

export default function Cal() {
    const [display,setdisplay]=useState("")
    const [result,setresult]=useState("")
    const operations = ["/","+","-","*"]

    const updatdisplay = (value) =>{
        setdisplay(display+value)
        if (!operations.includes(value)) {
            setresult (eval(display+value).toString())
        
        }
    }
    function calculate (){
setdisplay(result)
    }
    function clear (){
      setdisplay("")
    }

  return (
    <>
    <div className="container">
      <div className="display">
        {display || "0" }
      </div>
      <div className="operators">
        <div className="row">
          <button className="btn"onClick={()=>updatdisplay('+')} >+</button>
          <button className="btn" onClick={()=>updatdisplay('*')}>*</button>
          <button className="btn" onClick={()=>updatdisplay('-')}>-</button>
          <button className="btn" onClick={()=>updatdisplay('/')}>/</button>
        </div>
      </div>
      <div className="numbers">
        <div className="row">
          <div className="col">
            <button className="btn" onClick={()=>updatdisplay('1')}>1</button>
            <button className="btn" onClick={()=>updatdisplay('2')}>2</button>
            <button className="btn" onClick={()=>updatdisplay('3')}>3</button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button className="btn" onClick={()=>updatdisplay('4')}>4</button>
            <button className="btn" onClick={()=>updatdisplay('5')}>5</button>
            <button className="btn" onClick={()=>updatdisplay('6')}>6</button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button className="btn" onClick={()=>updatdisplay('7')}>7</button>
            <button className="btn" onClick={()=>updatdisplay('8')}>8</button>
            <button className="btn" onClick={()=>updatdisplay('9')}>9</button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button className="btn" onClick={()=>updatdisplay('.')}>.</button>
            <button className="btn" onClick={()=>updatdisplay('0')}>0</button>
            <button className="btn" onClick={calculate}>=</button>
            <button className="btn" onClick={clear}>clear</button>

          </div>
        </div>
      </div>
    </div>
    </>
  );
}
