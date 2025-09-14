import { useEffect, useMemo, useRef, useState } from 'react';

function Tasks() {
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState('all');
    const [title, setTitle] = useState('');
    const inputRef = useRef(null);

    useEffect(() => {
        const raw = localStorage.getItem('tasks');
        if (raw) setTasks(JSON.parse(raw));
    }, []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const filteredTasks = useMemo(() => {
        if (filter === 'active') return tasks.filter((t) => !t.done);
        if (filter === 'done') return tasks.filter((t) => t.done);
        return tasks;
    }, [tasks, filter]);

    function handleAdd(e) {
        e.preventDefault();
        if (!title.trim()) return;
        setTasks((prev) => [
            ...prev,
            { id: Date.now(), title: title.trim(), done: false },
        ]);
        setTitle("");
        inputRef.current?.focus();
    }

    function toggleTask(id) {
        setTasks((prev) =>
            prev.map((t) => 
                t.id === id ? { ...t, done: !t.done } : t
            )
        );
    }

    function removeTask(id) {
        setTasks((prev) => prev.filter((t) => t.id !== id));
    }

    function clearAll() {
        if (confirm("Clear all tasks?")) setTasks([]);
    }

    const doneCount = tasks.filter((t) => t.done).length;

    return (
        <section className='page-section'>
            <header className='tasks-header'>
                <h1>Tasks</h1>
                <p className='tasks-summary'>
                    Total: <b>{tasks.length}</b> • Completed: {" "}
                    <b>{doneCount}</b>
                </p>
            </header>

            <form className='task-form' onSubmit={handleAdd}>
                <input 
                    ref={inputRef} 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder='Add a Task...'
                    className='task-input'
                />
                <button className='add-button' type='submit'>
                    Add
                </button>
            </form>
            
            <div className='task-filters'>
                {['all', 'active', 'done'].map((f) => (
                    <button 
                        key={f}
                        onClick={() => setFilter(f)}
                        className={`filter-button ${filter === f ? 'active' : ''}`}
                    >
                        {f.charAt(0).toUpperCase() + f.slice(1)}
                    </button>
                ))}

                <button
                    onClick={clearAll}
                    className='clear-button'
                >
                    Clear All
                </button>
            </div>

            {filteredTasks.length === 0 ? (
                <p className='no-tasks'>No tasks found.</p>
            ) : (
                <ul className='task-list'>
                    {filteredTasks.map((t) => (
                        <li
                            key={t.id}
                            className={`task-item ${t.done ? 'completed' : ''}`}
                        >
                            <input
                                type='checkbox'
                                checked={t.done}
                                onChange={() => toggleTask(t.id)}
                                className='task-checkbox'
                            />
                            <span className='task-text'>
                                {t.title}
                            </span>
                            <button
                                onClick={() => removeTask(t.id)}
                                className='delete-button'
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}

export default Tasks;