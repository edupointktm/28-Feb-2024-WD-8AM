import React from 'react'

function Input_box_emaple() {
  return (
   <>
   <div className="container">
    <h5>Input Box Example</h5>
    <div className="row">
        <div className="col-1">First Name: </div>
        <div className="col-2"><input type='text'></input></div>

        <div className="col-1">Last Name: </div>
        <div className="col-2"><input type='text'></input></div>
        <div className="col-2"><button className='btn btn-primary'>Get Full Name</button></div>
    </div>
    <div className="row">
        <div className="col">Result:</div>
    </div>
    </div>
   </>
    
  )
}

export default Input_box_emaple