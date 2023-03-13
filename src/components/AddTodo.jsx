import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addTodo } from '../features/todosSlice';

const AddTodo = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = {
      id: nanoid(),
      text: text,
    };
    dispatch(addTodo(todo));
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodo;
