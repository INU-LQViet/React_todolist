import React from "react";
import './FormTodo.css';

function FormTodo(props){
    const [inputstate, setInputstate] = React.useState({
        "title": "",
        "body": "",
    })

    function handleInput(event){
        setInputstate({
            ...inputstate,
            [event.target.name]: event.target.value,
        })
    }

    function handleclick(event){
        event.preventDefault();
        props.handle(inputstate);
    }
    return(
        <div className='formTodo-container'>
            <div className="input-container">
                <label>
                    Title:
                    <br></br>
                    <input type= 'text' name="title" id="title" value={inputstate.title} onChange={handleInput}/>
                </label>
                <br></br>
                <label>
                    Body:
                    <br></br>
                    <input type= 'text' name="body" id="body" value={inputstate.body} onChange={handleInput}/>
                </label>
            </div>
            <div className="button-container" onClick={handleclick} >
                <button>OKAY</button>
            </div>
        </div>
    )
}

export default FormTodo;