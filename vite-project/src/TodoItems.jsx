import React, { useState } from 'react';

function ToDoItem({ task, deleteTask, toggleTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editTask(newText);
    setIsEditing(false);
  };

  return (
    
    <li className={task.completed ? 'checked' : ''}>
      {isEditing ? (
        <input 
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
      ) : (
        <span onClick={toggleTask}>{task.text}</span>
      )}
      {isEditing ? (
        <button onClick={handleSave}>Save</button>
      ) : (
        <>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={deleteTask}>delete</button>
        </>
      )}
    </li>
  );
}

export default ToDoItem;
