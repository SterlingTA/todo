import React from "react";
import "./App.css"


const ToDo = ({todo, handleToggle,removeTask}) =>{

    const handleClick = (e) =>{
        handleToggle(e.target.value)
        
    }

    const remove = (id) =>{
        removeTask(id.target.id)
    }

    return (
        <>
        <tr id= {todo.id} key={todo.id+todo.task} name='todo' value={todo.id}>
            <td className="data">{todo.task}</td> 
            <td className="data">{todo.date}</td> 
            <td><input type="checkbox" className="check" value ={todo.id} defaultChecked ={todo.complete} onChange={handleClick}/></td> 
            <button  className="remove" id={todo.id} onClick={remove}>Remove Task</button>
        </tr>
        
        </>
    );
};

export default ToDo;