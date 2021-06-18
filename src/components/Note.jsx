import React from "react";


function Note(props){
    return(
        <d1v class="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </d1v>
    )
}

export default Note;