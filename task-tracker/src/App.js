import React from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTaskForm from './components/AddTask';
import { useState } from 'react';

const initialTasks = [
  {
    id: 1,
    description: "Doctor",
    day: "June 5th at 10:00am",
    reminder: true,
  },
  {
    id: 2,
    description: "Meeting",
    day: "June 7th at 2:00pm",
    reminder: true,
  },
  {
    id: 3,
    description: "Shopping",
    day: "June 8th at 09:00am",
    reminder: true,
  },
  {
    id: 4,
    description: "React",
    day: "June 8th at 04:00pm",
    reminder: false,
  },

];


const App = ()=> {
  
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState(initialTasks);
  
  const addTask = (task) => {
    //console.log(task)
    const id = Math.floor(Math.random() * 1000000);
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);

  }
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  const toggleReminder = (id) => {
    console.log(id, "reminder");
    setTasks(tasks.map((task) => {
      if (task.id === id)
        return { ...task, reminder: !task.reminder };
      else
        return task;
    }));
  }

  return (
    <div className="container">
      <Header title="Task Tracker" onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTaskForm onAdd={addTask} />}
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
      <p>{ tasks.length === 0 ? "No Tasks":""}</p>
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
