import React from "react";


function Note(props){

    function handleClick(){
        props.onDelete(props.id);
    }

    return(
        <d1v class="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={handleClick}>DELETE</button>
        </d1v>
    )
}

export default Note;