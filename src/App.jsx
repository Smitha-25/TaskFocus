import { useEffect, useState } from "react";
import ProgressTracker from "./Components/ProgressTracker";
import TaskForm from "./Components/TaskForm";
import TaskList from "./Components/TaskList";
import "./Style.css";

function App() {
const[tasks, setTasks] = useState([]);

useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
});

const addTask = (task) => {
     setTasks([...tasks, task])
}

const updateTask = (updatedTask, index) => {
    const newtask = [...tasks];
    newtask[index] = updatedTask;
    setTasks(newtask);
}

const deleteTask = (index) => {
     setTasks(tasks.filter((_, i) => i != index));
}

const clearTasks = () => {
   setTasks([]);
}

  return(
    <div className="App">
      <header>
      <h1 className="title">Task Focus</h1>
      <p className="tagline">Our Friendly TaskManager</p>
      </header>
   
      <TaskForm addTask={addTask}/>
      <TaskList tasks = {tasks}
        updateTask = {updateTask}
         deleteTask = {deleteTask}/>
      <ProgressTracker tasks = {tasks}/>

      {tasks.length > 0 && (<button onClick={clearTasks} className="clear-btn">Clear All Tasks</button>) }
   
    </div>
  )
}

export default App;