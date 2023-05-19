import TodoItem from "./components/TodoItem/TodoItem";
import Header from "./components/Header/Header";

function App() {
    return (
        <div>
            <Header/>
            <ul className="home__list">
                <TodoItem name="reza"></TodoItem>
                <TodoItem name="gyut"></TodoItem>
                <TodoItem name="rgyuugeza"></TodoItem>
                <TodoItem name="rgyugeza"></TodoItem>
            </ul>

        </div>

    );
}

export default App;
