import React from "react";
function TodoItems(props) {
    return(
        <div>
            <input type="checkbox"   onChange={() => props.handleChange(props.item.id) }  checked={props.item.isCompleted}/>
            <p> {props.item.text} </p>
        </div>
    )
}
export default TodoItems