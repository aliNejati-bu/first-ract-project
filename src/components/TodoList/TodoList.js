import TodoItem from "../TodoItem/TodoItem";

const TodoList = (props) => {
    const deleteHandler = (id) => {
        props.onDeleteItem(id);
    };
    let list_items = <p>TODO List is empty.</p>
    if (props.items.length > 0) {
        list_items = <ul className="home__list">
            {props.items.map((todo) => <TodoItem key={todo.id} onDeleteItem={deleteHandler}>{todo}</TodoItem>)}
        </ul>;
    }


    return (<>
        {list_items}
    </>);
}

export default TodoList;