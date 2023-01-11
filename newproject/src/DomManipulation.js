import React from 'react'

function DomManipulation() {

    function changeText() {
        var pTag = document.getElementById("p1")
        pTag.innerText = "Hello"
    }

    return (
        <div id="d1">
            <p id="p1">DomManipulation</p>
            <button onClick={changeText}>Change Text</button>
        </div>
    )
}

export default DomManipulation