import TodoItem from "../TodoItem/TodoItem";

function TodoList(){
     return (
         <ul className="home__list">
             <TodoItem name="reza"></TodoItem>
             <TodoItem name="gyut"></TodoItem>
             <TodoItem name="rgyuugeza"></TodoItem>
             <TodoItem name="rgyugeza"></TodoItem>
         </ul>
     );
}

export default TodoList;