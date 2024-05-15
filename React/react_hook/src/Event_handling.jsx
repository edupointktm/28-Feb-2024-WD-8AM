import React from 'react'

function Event_handling() {

    let getMessage = () => {
        alert("Welcome to event handling project")
    }

    return (
        <>
            <div className="container">
                <div>Event_handling</div>
                <button onClick={() => getMessage()}>Click Me</button>
            </div>
        </>

    )
}

export default Event_handling