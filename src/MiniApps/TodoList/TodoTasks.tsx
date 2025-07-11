import React, { useState } from 'react'
import type { Todo } from './TodoList'
import TodoItem from './TodoItem'

interface TodoTasksProps {
    todos: Todo[];
    onUpdateTitle: (id: number, title: string) => void;
    onDeleteTodo: (id: number) => void;
    onToggle: (id: number) => void;
}


function TodoTasks({ todos, onUpdateTitle, onDeleteTodo, onToggle }: TodoTasksProps) {


    return (
        <div className='todo_container-list'>
            {todos.map((todo) => {
                return (
                    <TodoItem todo={todo} key={todo.id} onUpdateTitle={onUpdateTitle} onDeleteTodo={onDeleteTodo} onToggle={onToggle} />
                )
            })}
        </div>

    )
}

export default TodoTasks