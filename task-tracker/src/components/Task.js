import { FaTimes } from 'react-icons/fa';

const Task = ({ task, onDelete, onToggle}) => {
  return (
    <div className={`task ${task.reminder? 'reminder': ""}`}
      onDoubleClick={() => onToggle(task.id)}
>
      <h3>{task.description}
        {/* <FaTimes onClick={onDelete} style={{ color: 'red', cursor: 'pointer' }} /></h3> */}
      
        {/* If you want to pass the task id to the function, do not just replace
        onDelete with onDelete(task.id), this will execute the function immediately: */}

        <FaTimes
          onClick={() => onDelete(task.id)}
          style={{ color: 'red', cursor: 'pointer' }
        } /></h3>
      

      <p>{task.day}</p>
      {/* <p>{task.reminder?1:0}</p> */}


    </div>
  )
}

export default Task
