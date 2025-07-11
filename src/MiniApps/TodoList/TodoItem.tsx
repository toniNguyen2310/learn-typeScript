import React, { useEffect, useRef, useState } from 'react'
import type { Todo } from './TodoList'

interface todoItemProps {
    todo: Todo;
    onUpdateTitle: (id: number, title: string) => void;
    onDeleteTodo: (id: number) => void;
    onToggle: (id: number) => void;
}

function TodoItem({ todo, onUpdateTitle, onDeleteTodo, onToggle }: todoItemProps) {
    const [isEdit, setIsEdit] = useState<boolean>(false)
    const [titleChange, setTitleChange] = useState<string>(todo.title)
    const inputRef = useRef<any>(null)

    const handleEditTitle = () => {
        setIsEdit(!isEdit)
        onUpdateTitle(todo.id, titleChange)
    }

    useEffect(() => {
        if (isEdit) inputRef.current.focus()
    }, [isEdit])
    return (
        <>{
            isEdit ?
                <div className='todo-item' >
                    <input type='text'
                        value={titleChange}
                        onChange={(e) => setTitleChange(e.target.value)}
                        ref={inputRef}
                    />
                    <button className='save-button' onClick={() => handleEditTitle()} >Lưu</button>
                </div>
                : <div className='todo-item' >
                    <span onClick={() => onToggle(todo.id)} className={todo.completed ? 'line-through' : ''}>{todo.title}</span>
                    <button className='edit-button' onClick={() => setIsEdit(true)} >Sửa</button>
                    <button onClick={() => onDeleteTodo(todo.id)} >Xóa</button>
                </div>
        }


        </>

    )
}

export default TodoItem