function Todo({ todo, onClick }) {
    return (
        <li>
            <input 
                type="checkbox"
                onClick={onClick}
                checked={todo.done ? 'checked' : ''}
            ></input>
            {todo.name}
        </li>
    );
}

export default Todo;