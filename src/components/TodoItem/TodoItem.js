import './TodoItem.css';
import Button from "../button/Button";

function TodoItem(props) {
    return (
        <li className="home__list_item">
            <span>{props.children}</span>
            <Button btnType='delete'>X</Button>
        </li>
    );
}

export default TodoItem;