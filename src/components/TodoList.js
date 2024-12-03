// src/components/TodoList.js

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo } from '../Redux/todoSlice';

const TodoList = () => {
  const [newTodo, setNewTodo] = useState('');
  const todos = useSelector(state => state.todos);  // Access todos from Redux store
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      const todo = { id: Date.now(), text: newTodo };  // Create a new todo with a unique ID
      dispatch(addTodo(todo));  // Dispatch ADD_TODO action
      setNewTodo('');  // Clear input field
    }
  };

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));  // Dispatch REMOVE_TODO action
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}  // Update the input state
        placeholder="Enter todo"
      />
      <button onClick={handleAddTodo}>Add Todo</button>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text} 
            <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
