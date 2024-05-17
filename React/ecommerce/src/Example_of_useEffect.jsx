import React, { useEffect, useState } from 'react'

function Example_of_useEffect() {
    let [count, setCount] = useState(5)
  let [even, setEven]=useState(0)

  useEffect(()=>{
    console.log("I am running", count)
  },)
  let increase=()=>{
    setCount(count+1)
  }

  let decrease=()=>{
    setCount(count-1)
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-1">
            <div className="btn btn-primary" onClick={()=>increase()}>+</div>
          </div>

          <div className="col-1">
            <h4>{count}</h4>

          </div>

          <div className="col-1">
            <div className="btn btn-primary" onClick={()=>decrease()}>-</div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-1">
            <div className="btn btn-primary" onClick={()=>setEven(even+2)}>+</div>
          </div>

          <div className="col-1">
            <h4>{even}</h4>

          </div>

          <div className="col-1">
            <div className="btn btn-primary" onClick={()=>setEven(even-2)}>-</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Example_of_useEffect