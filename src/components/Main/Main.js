import React, {useState} from "react";

import TodoList from "../TodoList/TodoList";
import "./Main.css";
import Button from "../button/Button";
import Container from "../Container/Container";
import NewTodoForm from "../NewTodoForm/NewTodoForm";

function Main() {

    return (
        <main className="home">
            <Container>
                <div className="home__items_wrapper">
                    <h2 className="home__add_title">
                        Add Item
                    </h2>

                    <NewTodoForm onNewSubmit={console.log   }/>

                    <h2 className="home__add_title">
                        Items
                    </h2>

                    <TodoList></TodoList>
                </div>
            </Container>
        </main>
    );
}

export default Main;