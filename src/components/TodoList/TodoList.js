import TodoItem from "../TodoItem/TodoItem";

function TodoList() {
    return (
        <ul className="home__list">
            <TodoItem>Reza</TodoItem>
            <TodoItem>Mohammad</TodoItem>
            <TodoItem>sadegh</TodoItem>
            <TodoItem>mohammad</TodoItem>
        </ul>
    );
}

export default TodoList;