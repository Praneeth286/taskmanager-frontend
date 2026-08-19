import styles from './TaskItem.module.css';
function TaskItem({task, onDelete}){
    return(
        <li className={styles.taskItem}>
            {task.title}
            <button className={styles.deleteButton} onClick={()=> onDelete(task.id)}>
                Delete
                </button>
            </li>
                );
            }
        export default TaskItem;