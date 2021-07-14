import './App.css';
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

const tasks = [
  { id: 1 , name: "comprar Pan"},
  { id: 2 , name: "comprar Pan1"},
  { id: 3 , name: "comprar Pan2"},
  { id: 4 , name: "comprar Pan3"},

]

function App() {
  return (
    <div className='App'>
      <h2>Clase 002</h2>
      <TaskList tasks={tasks}/>
      <TaskForm tasks={tasks}/>
    </div>
  );
}

export default App;
