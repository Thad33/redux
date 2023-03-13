import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, editTodo } from '../features/todosSlice';

const Todo = ({ text, id }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(text);

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    dispatch(editTodo({
      id: id,
      text: newText,
    }));
    setIsEditing(false);
  };

  const handleCancel = () => {
    setNewText(text);
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <>
          <input type="text" value={newText} onChange={(e) => setNewText(e.target.value)} />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </>
      ) : (
        <>
          <span>{text}</span>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </div>
  );
};

export default Todo;
