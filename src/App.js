import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import TotalCompleteItems from './components/TotalCompleteItems';
import TotalUncompleteItems from './components/TotalUncomplitedItems';

const App = () => {
  return (
    <div className="">
      <h1>What is the plan for Today</h1>
      <AddTodoForm />
      <TotalCompleteItems />
      <TotalUncompleteItems />
      <TodoList />
    </div>
  );
};

export default App;
