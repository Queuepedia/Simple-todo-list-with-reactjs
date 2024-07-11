import React from 'react';
import { FaTrash } from 'react-icons/fa';

function TodoItem({ todo, deleteTodo, toggleComplete }) {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <span className="todo-text" onClick={() => toggleComplete(todo.id)}>
        {todo.text}
      </span>
      <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>
        <FaTrash />
      </button>
    </li>
  );
}

export default TodoItem;
