import "./Button.css";

function Button({content, btnType}) {

    let className = "";
    if (btnType === 'submit') {
        className = 'btn btn--submit';
    } else {
        className = 'btn btn--delete';
    }

    return (
        <button className={className}>{content}</button>
    );
}

export default Button;