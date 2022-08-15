import React, { useState, useRef, useEffect } from 'react';
import '../App.css';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoSlice';

const AddTodoForm = () => {
  const [input, setInput] = useState('');

  const dispatch = useDispatch();

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addTodo({
        title: input
      })
    );

    setInput('');
  };

  return (
    <form onSubmit={onSubmit} className="todo-form">
      <input
        type="text"
        placeholder="Add todo..."
        value={input}
        onChange={handleChange}
        ref={inputRef}
        className="todo-input"></input>

      <button type="submit" className="todo-button edit">
        Submit
      </button>
    </form>
  );
};

export default AddTodoForm;
