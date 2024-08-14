import React, { useState } from 'react';
import ToDoItem from './TodoItems';

function ToDoList({ tasks, addTask, deleteTask, toggleTask, editTask }) {
  const [input, setInput] = useState('');

  const handleAddTask = () => {
    if (input.trim()) {
      addTask(input);
      setInput('');
    } else {
      alert("You must have to write something!");
    }
  };

  return (
    <div className="todo-list">
      <div className="search">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Write your text here...."
        />
        <button onClick={handleAddTask}>Add</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <ToDoItem
            key={index}
            task={task}
            deleteTask={() => deleteTask(index)}
            toggleTask={() => toggleTask(index)}
            editTask={(newText) => editTask(index, newText)}
          />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
