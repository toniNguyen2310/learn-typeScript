import React from 'react';
import { type Todo } from '../types/todo';

interface Props {
    todo: Todo;
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}

const TodoItem: React.FC<Props> = ({ todo, onToggle, onDelete }) => {
    return (
        <li>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.title}
            </span>
            <button onClick={() => onDelete(todo.id)}>Xóa</button>
        </li>
    );
};

export default TodoItem;
