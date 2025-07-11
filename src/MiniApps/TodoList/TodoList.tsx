import { useEffect, useState } from 'react';
import './todo.scss'
import TodoInput from './TodoInput'
import TodoTasks from './TodoTasks';


export interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

const LOCAL_STORAGE_KEY = "todos";


const TodoList: React.FC = () => {
    const [highlightTitle, setHighlightTitle] = useState<boolean>(false);
    const [todos, setTodos] = useState<Todo[]>(() => {
        const saved = localStorage.getItem(LOCAL_STORAGE_KEY)
        return saved ? JSON.parse(saved) : [];
    })

    const onUpdateTitle = (id: number, newTitle: string) => {
        setTodos((prev) =>
            prev.map((todo) => todo.id === id ? { ...todo, title: newTitle } : todo)
        )
    }

    const onDeleteTodo = (id: number) => {
        setTodos((prev) =>
            prev.filter((todo) => todo.id !== id)
        )
    }

    const onToggle = (id: number) => {
        setTodos((prev) =>
            prev.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
        )
    }

    const onAddTodo = (titleTodo: string) => {
        const newTodo: Todo = {
            id: Date.now(),
            title: titleTodo,
            completed: false
        }
        setHighlightTitle(true)
        setTimeout(() => setHighlightTitle(false), 400)
        setTodos((prev) => [...prev, newTodo])
    }

    // 💾 Lưu mỗi khi todos thay đổi
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    }, [todos]);

    return (
        <div className='todo_container'>
            <div id={highlightTitle ? 'highlight' : ''} className='todo_container-title'>Todo Matsu</div>
            <TodoInput onAddTodo={onAddTodo} />
            <TodoTasks todos={todos} onUpdateTitle={onUpdateTitle} onDeleteTodo={onDeleteTodo} onToggle={onToggle} />
        </div>
    );
};

export default TodoList;