import React, { useRef, useState } from 'react'

interface inputProps {
    onAddTodo: (titleTodo: string) => void
}

function TodoInput({ onAddTodo }: inputProps) {
    const [text, setText] = useState<string>('')
    const todoAddRef = useRef<any>(null)

    const handleAddNewTodo = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        if (!text.trim()) return
        onAddTodo(text.trim())
        setText('')
        todoAddRef.current.focus()
    }

    return (
        <div className='todo_container-input' >
            <input
                type="text"
                placeholder='nhập công việc..'
                value={text}
                onChange={(e) => setText(e.target.value)}
                ref={todoAddRef}
                autoFocus
            />

            <button onClick={(e) => handleAddNewTodo(e)}>Thêm</button>
        </div>
    )
}

export default TodoInput