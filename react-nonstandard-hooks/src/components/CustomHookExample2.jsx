import useLocalStorage from '../hooks/useLocalStorage';

function CustomHookExample2() {
  const [task, setTask] = useLocalStorage('task', '');
  const [tasks, setTasks] = useLocalStorage('tasks', []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const taskObject = {
      task,
      completed: false,
      date: new Date().toLocaleDateString(),
    };
    setTasks([...tasks, taskObject]);
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="w-50">
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Task
          </label>
          <input
            type="text"
            value={task}
            className="form-control"
            onChange={(e) => {
              setTask(e.target.value);
            }}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <hr />
      {tasks.map((t, index) => {
        return <h3 key={index}>{t.task}</h3>;
      })}
    </>
  );
}

export default CustomHookExample2;
