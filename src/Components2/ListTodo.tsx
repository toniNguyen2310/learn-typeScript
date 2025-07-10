import React, { useState } from 'react'
import type { Todo } from '../types/todo'
import ItemTodo from './ItemTodo'

const ListTodo = () => {
    const [todos1, setTodos1] = useState<Todo[]>([
        { id: 1, title: 'Hoc code', completed: false },
        { id: 2, title: 'Doc sach', completed: true },
        { id: 3, title: 'Da bong', completed: false },

    ])
    return (
        <ul>
            {todos1.map((todo1) => {
                return (
                    <ItemTodo key={todo1.id} todo={todo1} setTodos1={setTodos1} todos1={todos1} />
                )
            })}
        </ul>
    )
}
export default ListTodo
