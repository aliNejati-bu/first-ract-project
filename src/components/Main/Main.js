import React, {useState} from "react";

import TodoList from "../TodoList/TodoList";
import "./Main.css";
import Container from "../Container/Container";
import NewTodoForm from "../NewTodoForm/NewTodoForm";

function Main() {
    const [todoItems, setTodoItems] = useState([{
        name: 'Reza', id: 'e1'
    }, {
        name: 'Mohammad', id: 'e2'
    }, {
        name: 'Sadegh', id: 'e3'
    }, {
        name: 'Ali', id: 'e4'
    }]);

    const deleteHandler = (id) => {
        setTodoItems((prevState) => {
            return prevState.filter(x => x.id !== id);
        });
    };

    return (<main className="home">
        <Container>
            <div className="home__items_wrapper">
                <h2 className="home__add_title">
                    Add Item
                </h2>

                <NewTodoForm onNewSubmit={console.log}/>

                <h2 className="home__add_title">
                    Items
                </h2>

                <TodoList items={todoItems} onDeleteItem={deleteHandler}></TodoList>
            </div>
        </Container>
    </main>);
}

export default Main;