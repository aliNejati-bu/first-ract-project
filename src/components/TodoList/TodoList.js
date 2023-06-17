import TodoItem from "../TodoItem/TodoItem";

const TodoList = (props) => {
    const deleteHandler = (id) => {
        props.onDeleteItem(id);
    };
    if (props.items.length > 0) {
        return <ul className="home__list">
            {props.items.map((todo) => <TodoItem key={todo.id} onDeleteItem={deleteHandler}>{todo}</TodoItem>)}
        </ul>;
    } else {
        return <p>TODO List is empty.</p>;
    }


}

export default TodoList;