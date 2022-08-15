import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleComplete, deleteTodo } from '../redux/todoSlice';
import { RiCloseCircleLine } from 'react-icons/ri';

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  const handleDeleteTodo = () => {
    dispatch(deleteTodo({ id: id }));
  };

  const handleCompleteClick = () => {
    dispatch(toggleComplete({ id: id, completed: !completed }));
  };

  return (
    <li className={`todo-row ${completed && 'todo-row complete'}`}>
      <span className="" onClick={handleCompleteClick}>
        {title}
      </span>
      <RiCloseCircleLine onClick={handleDeleteTodo} className="delete-icon" />
    </li>
  );
};

export default TodoItem;
