import TodoItem from "../TodoItem/TodoItem";

const TodoList = (props) => {
    const deleteHandler = (id) => {
        props.onDeleteItem(id);
    };
    return (
        <ul className="home__list">
            {props.items.map((todo) => <TodoItem onDeleteItem={deleteHandler}>{todo}</TodoItem>)}
        </ul>
    );
}

export default TodoList;