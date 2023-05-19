import "./Button.css";

function Button(props) {

    let className = "";
    if (props.btnType === 'submit') {
        className = 'btn btn--submit';
    } else {
        className = 'btn btn--delete';
    }


    return (
        <button className={className} onClick={props.onClick}>{props.children}</button>
    );
}

export default Button;