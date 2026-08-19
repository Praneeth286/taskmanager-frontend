import TaskList from '../TaskList';
import AddTaskForm from '../AddTaskForm';
import {useMemo} from 'react';
function TasksPage({tasks, isLoading, error, addTask, deleteTask}){
    const taskStats = useMemo(()=> {
        console.log('Calculating task stats...');
        const completed = tasks.filter(task => task.isDone).length;
        const pending = tasks.length - completed;
        return{ completed, pending};
        },[tasks]);
    return(
        <>
            <h1>Task Manager</h1>
            <p>{taskStats.completed} completed, {taskStats.pending} pending</p>
            <AddTaskForm onAdd={addTask}/>
            {isLoading && <p>Loading tasks...</p>}
            {error && <p className="error-message">Error: {error}</p>}
            {!isLoading && !error &&(
                <TaskList tasks={tasks} onDelete={deleteTask}/>

               )}
           </>
           );
    }
export default TasksPage;