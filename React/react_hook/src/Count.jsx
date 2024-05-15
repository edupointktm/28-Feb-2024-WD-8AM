import React, { useState } from 'react'

function Count() {
    let [count, setCount] = useState(10)

    let increase =()=>{
        setCount(count+1)
    }
    return (
        <>
            <div className='container'>
                <div>Count</div>
                <div className="row">
                    <div className="col-1">
                        <button className='btn btn-primary fs-3' onClick={increase}>+</button>
                    </div>

                    <div className="col-1">
                        <div className='fs-1' > {count} </div>
                    </div>

                    <div className="col-1">
                        <button className='btn btn-danger fs-3' onClick={()=>setCount(count-1)}>-</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Count