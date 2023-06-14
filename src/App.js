import React, {useState} from "react";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
    const [todoItems, setTodoItems] = useState([{
        name: 'Reza', id: 'e1'
    }, {
        name: 'Mohammad', id: 'e2'
    }, {
        name: 'Sadegh', id: 'e3'
    }, {
        name: 'Ali', id: 'e4'
    }]);

    const [searchedWord, setSearchedWord] = useState('');

    const newItemHandler = (name) => {
        setTodoItems((prevState) => {
            if (name !== '')
                return [...prevState,
                    {
                        name,
                        id: Math.random().toString()
                    }
                ];
            return prevState
        });
    }

    const deleteItemHandler = (id) => {
        setTodoItems((prevState) => {
            return prevState.filter(x => x.id !== id);
        });
    }

    const searchHandler = (s) => {
        setSearchedWord(s);
    };

    const items = todoItems.filter(x => x.name.toLowerCase().includes(searchedWord.toLowerCase()));
    return (
        <div>
            <Header onChangeSearch={searchHandler}/>
            <Main onAddList={newItemHandler} todoItems={items} onDeleteItem={deleteItemHandler}/>
        </div>

    );
}

export default App;
