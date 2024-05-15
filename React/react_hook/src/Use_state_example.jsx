import React, { useState } from 'react'

function Use_state_example() {
    let [names, setNames] = useState("Prabhat")
    return (
        <>
            <div className="container">
                <div>Example of Hook</div>
                {names} <br></br>
                <button onClick={() => setNames("Mohan")}>Hit Me</button>
            </div>
        </>
    )
}

export default Use_state_example