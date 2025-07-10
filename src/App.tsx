import React, { useState, useEffect } from 'react';
import { type Todo } from './types/todo';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css'
import InputTodo from './Components2/InputTodo';
import ListTodo from './Components2/ListTodo';

const App: React.FC = () => {


  return (
    <div>
      <h1>✅ Todo Toro</h1>
      <InputTodo />
      <ListTodo />
    </div>
  );
};

export default App;
