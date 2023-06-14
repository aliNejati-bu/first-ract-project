import React from "react";

import TodoList from "../TodoList/TodoList";
import "./Main.css";
import Container from "../Container/Container";
import NewTodoForm from "../NewTodoForm/NewTodoForm";

const Main = ({onAddList: onAddItem, todoItems, onDeleteItem}) => {
    const newTodoSubmitHandler = (name) => {
        onAddItem(name);
    };

    const deleteHandler = (id) => {
        onDeleteItem(id);
    };

    return (<main className="home">
        <Container>
            <div className="home__items_wrapper">
                <h2 className="home__add_title">
                    Add Item
                </h2>

                <NewTodoForm onNewSubmit={newTodoSubmitHandler}/>

                <h2 className="home__add_title">
                    Items
                </h2>

                <TodoList items={todoItems} onDeleteItem={deleteHandler}></TodoList>
            </div>
        </Container>
    </main>);
}

export default Main;