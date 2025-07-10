import React, { useState } from 'react';

interface Props {
    onAdd: (title: string) => void;
}

const TodoForm: React.FC<Props> = ({ onAdd }) => {
    const [title, setTitle] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (title.trim()) {
            onAdd(title);
            setTitle('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="Nhập công việc..."
            />
            <button type="submit">Thêm</button>
        </form>
    );
};

export default TodoForm;
