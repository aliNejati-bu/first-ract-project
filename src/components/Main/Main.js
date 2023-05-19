import TodoList from "../TodoList/TodoList";
import "./Main.css";
import Button from "../button/Button";
import Container from "../Container/Container";

function Main() {
    return (
        <main className="home">
            <Container>
                <div className="home__items_wrapper">
                    <h2 className="home__add_title">
                        Add Item
                    </h2>
                    <form>
                        <div className="home__form_wrapper">
                            <input id="form-input" type="text" className="input" placeholder="Item Name Here..."/>
                            <Button btnType="submit">Add</Button>
                        </div>
                    </form>

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