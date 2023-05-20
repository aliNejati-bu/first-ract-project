import React, {useState} from "react";

import Button from "../button/Button";
import "./NewTodoForm.css";

const NewTodoForm = (props) => {
    const [todoName, setTodoName] = useState('');

    const firstTextBoxHandler = (ev) => {
        setTodoName(ev.target.value);
    }

    const formSubmitHandler = (ev) => {
        ev.preventDefault();
        props.onNewSubmit(todoName);
        setTodoName('');
    };

    return <form onSubmit={formSubmitHandler}>
        <div className="home__form_wrapper">
            <input id="form-input" value={todoName} onChange={firstTextBoxHandler} type="text"
                   className="input"
                   placeholder="Item Name Here..."/>
            <Button btnType="submit">Add</Button>
        </div>
    </form>;
}

export default NewTodoForm;