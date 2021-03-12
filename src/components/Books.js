import React from "react"

function Books(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <h3>{props.author}</h3>
        </div>
    )
}

export default Books