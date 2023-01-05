import { useState } from 'react';

function NewTodo({ onNewTodo }) {
    const [todo, setTodo] = useState('');
    const handleClick = () => {
      if (!todo) {
        return;
      }
      onNewTodo(todo);
      setTodo('');
    };

    const handleChange = (e) => {
        const todo = e.target.value;
        setTodo(todo);
        console.log({ todo });
    };

    return (
        <div>
            <input type="text" onChange={handleChange} value={todo} />
            <button onClick={handleClick}>Add</button>
        </div>
    );
}

export default NewTodo;