import {useState, useEffect} from'react';
import {getTasks, createTask, deleteTask as deleteTaskApi} from'./api';
function useTasks(){
const [tasks, setTasks]=useState([]);
const[isLoading,setIsLoading]= useState(true);
const[error,setError] = useState(null);
useEffect(()=>{
getTasks()
.then(data => {
setTasks(data);
setIsLoading(false);
})
.catch(err=>{
setError(err.message);
setIsLoading(false);
});
},[]);
function addTask(title){
createTask(title).then(newTask => {
setTasks(prevTasks=>[...prevTasks,newTask]);
});
}
function deleteTask(id){
deleteTaskApi(id).then(() =>{
setTasks(prevTasks => prevTasks.filter(task=> task.id !==id));
});
}
return {tasks, isLoading, error, addTask, deleteTask };
}
export default useTasks;