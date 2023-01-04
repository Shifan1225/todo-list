import './App.css';
import {useState} from 'react';
import Todo from './Todo';


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

  const toggleDone = (e, index) => {
    const newTodos = todos.map((todo, i) => {
      if (i !== index) {
        return todo;
      }
      return { name: todo.name, done: !todo.done };
    });
    setTodos(newTodos);
  }

  const TotalRemaining = todos.filter((todo) => {
    return todo.done === false;
  }).length;

  return (
    <div className="App">
      <h1>My Todo List</h1>
      <div>TotalRemaining: {TotalRemaining}</div>
      <div>
        <input type="text" onChange={handleChange} value={todo} />
        <button onClick={handleClick}>Add</button>
      </div>
      <ul>
        {todos.map((todo, i) => {
          return 
          <Todo todo={todo} onClick={(e) => toggleDone(e, i)}></Todo>
        })}
      </ul>
    </div>
  );
}

export default App;
