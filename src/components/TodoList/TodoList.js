import TodoItem from "../TodoItem/TodoItem";
import react from 'react';

function TodoList() {
    return react.createElement(
        'ul',
        {
            className:'home__list'
        },
        react.createElement(TodoItem,{},'Reza'),
        react.createElement(TodoItem,{},'Mohammad'),
        react.createElement(TodoItem,{},'Sadegh'),
        react.createElement(TodoItem,{},'Ali'),
    );
    /*return (
        <ul className="home__list">
            <TodoItem>Reza</TodoItem>
            <TodoItem>Mohammad</TodoItem>
            <TodoItem>Sadegh</TodoItem>
            <TodoItem>Ali</TodoItem>
        </ul>
    );*/
}

export default TodoList;