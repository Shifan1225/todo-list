import Todo from "./Todo";

function Todos({ todos, onToggleDone }) {
    return (
        <ul>
            {todos.map((todo, i) => {
                return <Todo todo={todo} onClick={(e) => onToggleDone(i)} />
            })}
      </ul>
    );
}

export default Todos;