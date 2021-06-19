import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import Fab from '@material-ui/core/Fab';


function Note(props){

    function handleClick(){
        props.onDelete(props.id);
    }

    return(
        <d1v class="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <Fab onClick={handleClick}>
                <DeleteIcon />
            </Fab>
        </d1v>
    )
}

export default Note;