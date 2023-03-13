import React from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

function App() {
  return (
    <div>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
