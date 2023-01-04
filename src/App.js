import './App.css';
import {useState} from 'react';
import Todos from './Todos';


function App() {
  const [todos, setTodos] = useState([
    { name: 'Read a book', done: true },
    { name: 'Write a blog', done: true },
    { name: 'Make a video', done: false },
    { name: 'Reply a comment', done: true },
  ]);
  const [todo, setTodo] = useState('');
  const handleClick = () => {
    if (!todo) {
      return;
    }
    const newTodos = todos.concat([{ name: todo, done: false }]);
    setTodos(newTodos);
    setTodo('');
  }
  const handleChange = (e) => {
    const todo = e.target.value;
    setTodo(todo);
    console.log({todo});
  }

  const toggleDone = (index) => {
    const newTodos = todos.map((todo, i) => {
      if (i !== index) {
        return todo;
      }
      return { name: todo.name, done: !todo.done };
    });
    setTodos(newTodos);
  }

  const totalRemaining = todos.filter((todo) => {
    return todo.done === false;
  }).length;

  return (
    <div className="App">
      <h1>My Todo List</h1>
      <div>TotalRemaining: {totalRemaining}</div>
      <div>
        <input type="text" onChange={handleChange} value={todo} />
        <button onClick={handleClick}>Add</button>
      </div>
      <Todos todos={todos} onToggleDone={(i) => toggleDone(i)}></Todos>
    </div>
  );
}

export default App;
