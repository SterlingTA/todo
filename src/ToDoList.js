import React from "react";
import ToDo from "./ToDo"
import "./App.css"

const ToDoList = ({toDoList,handleToggle,removeTask}) =>{
    return(
        <table>
            <tr>
            {toDoList.length !== 0 && <th className="col1">Task</th>}
            {toDoList.length !== 0 && <th className="col2">Date start</th>}
            {toDoList.length !== 0 && <th className="col3">Done</th>}
            </tr>
            {toDoList.map(todo =>{
                return (
                    <ToDo todo={todo} handleToggle = {handleToggle} removeTask ={removeTask}  />
                )
            })}
        </table>
    )
}

export default ToDoList