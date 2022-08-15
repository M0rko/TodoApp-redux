import React from 'react';
import { useSelector } from 'react-redux';

const TotalUncompleteItems = () => {
  const todos = useSelector((state) => state.todos.filter((todo) => todo.completed === false));

  return <h4 className="uncompleted-tasks">Total uncompleted items: {todos.length}</h4>;
};

export default TotalUncompleteItems;
