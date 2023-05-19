import React, {useState} from "react";

import './TodoItem.css';
import Button from "../button/Button";

function TodoItem(props) {
    let t = props.children;
    const [a, setA] = useState(t);

    const deleteHandler = () => {
        setA('------------------------------------------');
    }
    return (
        <li className="home__list_item">
            <span>{a}</span>
            <Button btnType='delete' onClick={deleteHandler}>X</Button>
        </li>
    );
}

export default TodoItem;