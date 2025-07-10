import React from 'react'
import type { Todo } from '../types/todo'

interface Props {
    todo: Todo;
    todos1: Todo[];
    setTodos1: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const ItemTodo: React.FC<Props> = ({ todo, setTodos1, todos1 }) => {

    const onchangeCheckBox = (e: React.FormEvent) => {

        // const updatedTodos = todos.map(t => t.id === todo.id ? { ...t, completed: !t.completed } : t)
        const updatedTodos = todos1.map(t => {
            if (t.id === todo.id) {
                return { ...t, completed: !t.completed }
            }
            return t
        }

        );
        setTodos1(updatedTodos)
        console.log(updatedTodos)
        // setTodos(prev =>
        //     prev.map(t =>
        //         t.id === todo.id ? { ...t, completed: !t.completed } : t
        //     )
        // );


    }
    return (
        <li>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={(e) => onchangeCheckBox(e)}
            />
            <span key={todo.id}>{todo.id}</span>
            <button>Delete</button>
        </li>
    )
}
export default ItemTodo
