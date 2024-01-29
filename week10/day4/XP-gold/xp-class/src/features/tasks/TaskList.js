import { useSelector, useDispatch } from "react-redux";
import { useRef, useState } from "react";
import { addTask, removeTask, editTask, completeTask, addCategory } from "./tasksActions.js"; 
import './tasks.css';

const TasksList = () => {
    const tasks = useSelector((state) => state.tasks.tasks);
    const categories = useSelector((state) => state.tasks.categories);
    const addRef = useRef();
    const categoryRef = useRef();
    const [editId, setEditId] = useState(null);
    const [editText, setEditText] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [filter, setFilter] = useState("all");
    const dispatch = useDispatch();

    const filteredTasks = tasks.filter((task) => {
        if (filter === "all") return true;
        if (filter === "completed") return task.completed;
        return !task.completed;
    });

    const handleAdd = () => {
        const taskText = addRef.current?.value;
        if (taskText) {
            dispatch(addTask(taskText, selectedCategory));
            addRef.current.value = '';
            setSelectedCategory(""); // Очистите выбранную категорию после добавления задачи
        }
    };

    const handleRemove = (taskId) => {
        dispatch(removeTask(taskId));
    };

    const handleEdit = (task) => {
        setEditId(task.id);
        setEditText(task.text);
    };

    const handleSave = (id) => {
        dispatch(editTask(id, editText));
        setEditId(null);
        setEditText("");
    };

    const handleComplete = (taskId) => {
        dispatch(completeTask(taskId));
    };

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const handleAddCategory = () => {
        const categoryText = categoryRef.current?.value;
        if (categoryText) {
            dispatch(addCategory(categoryText));
            categoryRef.current.value = '';
        }
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
                <select value={selectedCategory} onChange={handleCategoryChange}>
                    <option value="">Select Category</option>
                    {categories.map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
                <button onClick={handleAdd}>Add Task</button>
                <input type="text" placeholder="Add new category" ref={categoryRef} />
                <button onClick={handleAddCategory}>Add Category</button>
            </div>
            {filteredTasks.map((task) => (
                <div key={task.id}>
                    {editId === task.id ? (
                        <>
                            <input type="text" value={editText} onChange={(e) => setEditText(e.target.value)} />
                            <button onClick={() => handleSave(task.id)}>Save</button>
                        </>
                    ) : (
                        <>
                            <span className={task.completed ? 'task-completed' : ''}>
                                {task.text} ({task.category}) {/* Добавьте отображение категории */}
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






// import { useSelector, useDispatch } from "react-redux";
// import { useRef, useState } from "react";
// import { ADD_TASK, REMOVE_TASK, EDIT_TASK, COMPLITE_TASK } from "./tasksReducer";
// import './tasks.css';

// const TasksList = () => {
//     const tasks = useSelector((state) => state.tasks);
//     const addRef = useRef();
//     const [editId, setEditId] = useState(null);
//     const [editText, setEditText] = useState("");
//     const [filter, setFilter] = useState("all"); // State for filtering tasks
//     const dispatch = useDispatch();

//     // Filtered tasks based on the filter state
//     const filteredTasks = tasks.filter(task => {
//         if (filter === "all") return true;
//         if (filter === "completed") return task.completed;
//         return !task.completed; // Handles the "active" filter
//     });

//     const handleAdd = () => {
//         const taskText = addRef.current?.value;
//         if (taskText) {
//             dispatch({ type: ADD_TASK, payload: { text: taskText } });
//             addRef.current.value = '';
//         }
//     };

//     const handleRemove = (taskId) => {
//         dispatch({ type: REMOVE_TASK, payload: { id: taskId } });
//     };

//     const handleEdit = (task) => {
//         setEditId(task.id);
//         setEditText(task.text);
//     };

//     const handleSave = (id) => {
//         dispatch({ type: EDIT_TASK, payload: { id, text: editText } });
//         setEditId(null);
//         setEditText("");
//     };

//     const handleComplete = (taskId) => {
//         dispatch({ type: COMPLITE_TASK, payload: { id: taskId } });
//     };

//     return (
//         <>
//             <div>
//                 <h1>Tasks List</h1>
//             </div>
//             <div>
//                 <button onClick={() => setFilter("all")}>All</button>
//                 <button onClick={() => setFilter("completed")}>Completed</button>
//                 <button onClick={() => setFilter("active")}>Active</button>
//             </div>
//             <div>
//                 <input type="text" placeholder="Add new task" ref={addRef} />
//                 <button onClick={handleAdd}>Add Task</button>
//             </div>
//             {filteredTasks.map(task => (
//                 <div key={task.id}>
//                     {editId === task.id ? (
//                         <>
//                             <input type="text" value={editText} onChange={(e) => setEditText(e.target.value)} />
//                             <button onClick={() => handleSave(task.id)}>Save</button>
//                         </>
//                     ) : (
//                         <>
//                             <span className={task.completed ? 'task-completed' : ''}>
//                                 {task.text}
//                             </span>
//                             <button onClick={() => handleComplete(task.id)}>
//                                 {task.completed ? 'Uncomplete' : 'Complete'}
//                             </button>
//                             <button onClick={() => handleEdit(task)}>Edit</button>
//                             <button onClick={() => handleRemove(task.id)}>Remove</button>
//                         </>
//                     )}
//                 </div>
//             ))}
//         </>
//     );
// };

// export default TasksList;
