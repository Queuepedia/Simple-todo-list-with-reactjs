
import React from 'react';

function FilterTodo({ setTodos }) {
  const handleFilter = (status) => {
    const filteredTodos = status === 'completed'
      ? JSON.parse(localStorage.getItem('todos')).filter(todo => todo.completed)
      : status === 'uncompleted'
        ? JSON.parse(localStorage.getItem('todos')).filter(todo => !todo.completed)
        : JSON.parse(localStorage.getItem('todos'));
    setTodos(filteredTodos);
  };

  return (
    <div className="filter-todo">
      <button onClick={() => handleFilter('all')}>All</button>
      <button onClick={() => handleFilter('completed')}>Completed</button>
      <button onClick={() => handleFilter('uncompleted')}>Uncompleted</button>
    </div>
  );
}

export default FilterTodo;
