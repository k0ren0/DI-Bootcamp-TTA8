import { useSelector, useDispatch } from "react-redux";
import { useRef, useState } from "react";
import { ADD_TASK, REMOVE_TASK, EDIT_TASK, COMPLITE_TASK } from "./tasksReducer";
import './tasks.css';

const TasksList = () => {
    const tasks = useSelector((state) => state.tasks);
    const addRef = useRef();
    const [editId, setEditId] = useState(null);
    const [editText, setEditText] = useState("");
    const [filter, setFilter] = useState("all"); // State for filtering tasks
    const dispatch = useDispatch();

    // Filtered tasks based on the filter state
    const filteredTasks = tasks.filter(task => {
        if (filter === "all") return true;
        if (filter === "completed") return task.completed;
        return !task.completed; // Handles the "active" filter
    });

    const handleAdd = () => {
        const taskText = addRef.current?.value;
        if (taskText) {
            dispatch({ type: ADD_TASK, payload: { text: taskText } });
            addRef.current.value = '';
        }
    };

    const handleRemove = (taskId) => {
        dispatch({ type: REMOVE_TASK, payload: { id: taskId } });
    };

    const handleEdit = (task) => {
        setEditId(task.id);
        setEditText(task.text);
    };

    const handleSave = (id) => {
        dispatch({ type: EDIT_TASK, payload: { id, text: editText } });
        setEditId(null);
        setEditText("");
    };

    const handleComplete = (taskId) => {
        dispatch({ type: COMPLITE_TASK, payload: { id: taskId } });
    };

    return (
        <>
            <div>
                <h1>Tasks List</h1>
            </div>
            <div>
                <button onClick={() => setFilter("all")}>All</button>
                <button onClick={() => setFilter("completed")}>Completed</button>
                <button onClick={() => setFilter("active")}>Active</button>
            </div>
            <div>
                <input type="text" placeholder="Add new task" ref={addRef} />
                <button onClick={handleAdd}>Add Task</button>
            </div>
            {filteredTasks.map(task => (
                <div key={task.id}>
                    {editId === task.id ? (
                        <>
                            <input type="text" value={editText} onChange={(e) => setEditText(e.target.value)} />
                            <button onClick={() => handleSave(task.id)}>Save</button>
                        </>
                    ) : (
                        <>
                            <span className={task.completed ? 'task-completed' : ''}>
                                {task.text}
                            </span>
                            <button onClick={() => handleComplete(task.id)}>
                                {task.completed ? 'Uncomplete' : 'Complete'}
                            </button>
                            <button onClick={() => handleEdit(task)}>Edit</button>
                            <button onClick={() => handleRemove(task.id)}>Remove</button>
                        </>
                    )}
                </div>
            ))}
        </>
    );
};

export default TasksList;
