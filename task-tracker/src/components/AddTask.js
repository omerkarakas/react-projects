import { useState } from 'react';

const AddTaskForm = ({onAdd}) => {
  const [description, setDescription] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!description) {
      alert('Please add a task description');
      return
    }

    onAdd({ description, day, reminder });
    
    setDescription("");
    setDay("");
    setReminder(false);
  }

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="">Task</label>
        <input type="text"
          placeholder="Add Task"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="">Date & Time</label>
        <input type="text"
          placeholder="Add Day & Time"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label htmlFor="">Set Reminder</label>
        <input type="checkbox"
          value={reminder}
          checked={reminder}
          onChange={(e) => setReminder(e.target.checked)}
        />
      </div>

      <input type="submit" value="Save Task" className="btn btn-block"/>

    </form>
  )
}

export default AddTaskForm
