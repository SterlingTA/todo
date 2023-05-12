import './App.css';
import  {useState} from 'react'

import Header from './header';
import Footer from './ToDoForm';
import ToDoList from "./ToDoList"
import {v4 as uuid} from 'uuid'

function App() {

  const [toDos, setToDos] = useState([])

  const handleToggle = (id) =>{
    let mapped = toDos.map(task =>{
      return task.id === id ? {...task, complete: !task.complete} : {...task}
    })
    setToDos(mapped)
  }

  const addTask = (input) =>{
    const unique_id = uuid().slice(0,8)
    let copy =  [...toDos]
    copy = [...copy, {id: unique_id, task:input, complete: false, date: new Date().toDateString()}]
    setToDos(copy)
  }

  const removeTask = (id) =>{
   
    let filter = toDos.filter(task =>{
      return task.id !== id
    })
    setToDos(filter)
  }

  const removeComplete = () =>{
    let filter = toDos.filter(task =>{
      return !task.complete
    })
    setToDos(filter)
  }

  return (
    <div className="App">
      <Header />
      <ToDoList toDoList = {toDos} handleToggle ={handleToggle} removeTask = {removeTask} />

      <Footer addTask = {addTask} removeComplete ={removeComplete} />


    </div>
  );
}



export default App;
