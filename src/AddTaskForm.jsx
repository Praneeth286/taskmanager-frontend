import { useState } from 'react';
function AddTaskForm({ onAdd }) {
    const [taskTitle, setTaskTitle]= useState('');
    const [validationError, setValidationError] = useState('')
    function handleSubmit(){
        const trimmedTitle = taskTitle.trim();
        if (trimmedTitle === ''){
            setValidationError('Task title cannot be empty');
            return;
            }
        if (trimmedTitle.length > 100){
            setValidationError('Task title must be under 100 characters');
            return;
            }
        setValidationError('');
        onAdd(trimmedTitle);
        setTaskTitle('');
        }
    return(
        <div className= "task-input-row">
            <input
            type="text"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            placeholder="Enter a task"
            />
            <button onClick= {handleSubmit}>Add Task</button>
            {validationError && <p className="error-message">{validationError}</p>}
            </div>
            );
        }
    export default AddTaskForm;