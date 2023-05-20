import React from "react";

import './TodoItem.css';
import Button from "../button/Button";

const TodoItem = (props) => {

    const deleteHandler = () => {
        props.onDeleteItem(props.children.id);
    };

    return (
        <li className="home__list_item">
            <span>{props.children.name}</span>
            <Button onClick={deleteHandler} btnType='delete'>X</Button>
        </li>
    );
}

export default TodoItem;