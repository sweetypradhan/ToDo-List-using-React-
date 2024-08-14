import { useState } from 'react'
import './App.css'
import ToDoList from './To-doList'
import Header from './Header'

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { text: task, completed: false }]);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const editTask = (index, newText) => {
    const newTasks = [...tasks];
    newTasks[index].text = newText;
    setTasks(newTasks);
  };

  return (
    <div className="app-container">
      
      <Header />
      <ToDoList
        tasks={tasks}
        addTask={addTask}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
        editTask={editTask}
      />
    </div>
  );
}


export default App
