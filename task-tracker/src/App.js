import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Tasks from './components/Tasks';
import AddTaskForm from './components/AddTask';
import { useState, useEffect } from 'react';

const initialTasks = [];


const App = ()=> {
  
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState(initialTasks);

  useEffect(() => {
    const getTasks = async () => {
      const tasks = await fetchTasks();
      setTasks(tasks);
    }
      
    getTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const tasks = await res.json();
    return tasks;
  }

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const tasks = await res.json();
    return tasks;
  }
  
  const addTask = async (task) => {
    // const id = Math.floor(Math.random() * 1000000);
    // const newTask = { id, ...task };
    // setTasks([...tasks, newTask]);

    const res = await fetch("http://localhost:5000/tasks",
      {
        method: "POST",
        headers: { 'Content-type': "application/json" }, 
        body: JSON.stringify(task)
      });
    const data = await res.json();
    setTasks([...tasks, data]);

  }
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, { method: "DELETE" });

    setTasks(tasks.filter((task) => task.id !== id));
  }

  const toggleReminder = async (id) => {
    const task = await fetchTask(id);
    const updated = { ...task, reminder: !task.reminder};
    
    const res = await fetch(`http://localhost:5000/tasks/${id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json"},
        body : JSON.stringify(updated)
      });
  
    const data = await res.json();

    setTasks(tasks.map((task) => {
      if (task.id === id)
        return { ...task, reminder: data.reminder };
      else
        return task;
    }));
  }

  return (
    <div className="container">
      <Header title="Task Tracker" onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTaskForm onAdd={addTask} />}
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
      <p>{tasks.length === 0 ? "No Tasks" : ""}</p>
      <Footer/>
    </div>
  );
}

// class App extends React.Component{
//   render() {
//     return (
//       <div className="container">
//         <Header/>
//       </div>
//     );
//   }
// }

export default App;
