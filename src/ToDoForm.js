import React, { useState } from "react";

const Footer = ({addTask, removeComplete}) =>{
    const [input, setInput] = useState('')

    const handleChange = (e) =>{
        setInput(e.currentTarget.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        addTask(input)
        setInput('')
    }

    const handleClick = (e) =>{
        e.preventDefault()
        removeComplete()
    }
    
    return(
        <footer>
        <form onSubmit={handleSubmit}>
            <input type='text' className="newTask" placeholder='Enter Task' value={input} onChange={handleChange} id='addTask' />
            <button>Add task</button>
        </form>
        <button onClick={handleClick}>Remove Completed</button>
        </footer>
    )
}

export default Footer