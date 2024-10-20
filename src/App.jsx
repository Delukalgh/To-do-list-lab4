import { useState } from 'react';
import TaskForm from './components/TaskForm'; 
import './App.css';


function App() {
  const initialData = [
    {
      id: 1,
      taskName: 'Do laundry',
      completed: false
    },
    {
      id: 2,
      taskName: 'Get groceries',
      completed: false
    },
  ];

  // Move the tasks state up to App component
  const [tasks, setTasks] = useState(initialData);

  // Calculate how many tasks are not completed
  const incompleteTasks = tasks.filter(task => !task.completed).length;

  return (
    <>
    <div className='container'>
      <h1>To Do List</h1>
      {/* Display the number of remaining tasks */}
      <h2>{incompleteTasks} tasks remaining</h2>

      {/* Pass tasks and setTasks as props to TaskForm */}
      <TaskForm tasks={tasks} setTasks={setTasks} />
    </div>
    </>
  );
}

export default App;