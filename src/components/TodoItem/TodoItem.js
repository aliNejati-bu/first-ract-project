import './TodoItem.css';
import Button from "../button/Button";

function TodoItem({name}) {
    return (
        <li className="home__list_item">
            <span>{name}</span>
            <Button btnType='delete' content='X'></Button>
        </li>
    );
}

export default TodoItem;