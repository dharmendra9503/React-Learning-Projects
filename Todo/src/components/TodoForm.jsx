import React from 'react';
import { useTodo } from '../context';

function TodoForm() {
    const [todo, setTodo] = React.useState("");
    const { addTodo } = useTodo();

    const add = (e) => {
        e.preventDefault();

        if (!todo) return;
        addTodo({
            todo,
            toggleComplete: false
        });

        setTodo("");
    }
    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="bg-green-600 px-3 py-1 rounded-r-lg shrink-0">
                Add
            </button>
        </form>
    )
}

export default TodoForm;