import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";
import Container from "./components/Container/Container";

function App() {
    return (
        <div>
            <Header/>
            <Container>
                <TodoList/>
            </Container>
        </div>

    );
}

export default App;
