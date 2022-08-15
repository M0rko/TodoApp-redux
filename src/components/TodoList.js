import React from 'react';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const [filtered, setFiltered] = useState(todos);
  useEffect(() => {
    setFiltered(todos);
  }, [todos]);

  const todoFilter = (type) => {
    console.log(type);

    if (type === 'all') {
      setFiltered(todos);
    } else if (type === 't') {
      setFiltered([...todos].filter((item) => item.completed === true));
    } else if (type === 'f') {
      setFiltered([...todos].filter((item) => item.completed === false));
    }
  };
  return (
    <div>
      <div className="buttons">
        <button className="filter-button" onClick={() => todoFilter('all')}>
          All
        </button>
        <button className="filter-button" onClick={() => todoFilter('t')}>
          Completed
        </button>
        <button className="filter-button" onClick={() => todoFilter('f')}>
          Uncompllited
        </button>
      </div>
      {console.log(filtered)}
      <ul className="list-group">
        {filtered.map((todo) => (
          <TodoItem key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
