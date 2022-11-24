import React from "react";
import "./Todolist.css"

function Todolist(props){
    return(
        <div className='todolist-container'>
            {props.listdata.map(
                item => (
                    <div key={item.id}>
                        <h1>{item.title}</h1>
                        <p>{item.body}</p>
                    </div>
                )
            )}
        </div>
    )
}

export default Todolist;