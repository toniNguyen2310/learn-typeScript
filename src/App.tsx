import React, { useState, useEffect } from 'react';
import { type Todo } from './types/todo';
import './App.css'
import TodoList from './MiniApps/TodoList/TodoList';

const App: React.FC = () => {
  return (
    <TodoList />
  );
};

export default App;
