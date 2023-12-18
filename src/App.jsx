import {useEffect, useState} from "react";
import {v4 as uuid} from 'uuid';
import "./App.css";
import AddToDo from "./addToDo/AddToDo";
import Content from "./content/Content";
import Header from "./header/Header";
import Search from './search/Search';

function App() {

    const [toDoItems, setToDoItems] = useState(JSON.parse(localStorage.getItem("HobsonToDoList")) || []	);
    const [newToDo, setNewToDo] = useState("");
    const [search, setSearch] = useState("");
    
    useEffect(() => {
		localStorage.setItem("HobsonToDoList", JSON.stringify(toDoItems));
	}, [toDoItems]);

	const addToDo = (toDoItem) => {
		const id = uuid();
		const tmp = { id, checked: false, toDoItem };
		const toDoList = [tmp, ...toDoItems];
		setToDoItems(toDoList);        
	};

    const handleItemDelete = (id) => {
        const toDoList = toDoItems.filter((toDoItem) => toDoItem.id !== id)
        setToDoItems(toDoList)
    }

    const handleItemEdit = (id, textValue) => {
        const toDoList = toDoItems.map((toDoItem) =>
            toDoItem.id === id ? { ...toDoItem, toDoItem: textValue} : toDoItem
        )
        setToDoItems(toDoList)
    }

	const handleAdd = (e) => {
		e.preventDefault();
		if (!newToDo) return;
        addToDo(newToDo)
		setNewToDo('');
	};

	return (
		<div className='App'>
			<Header title='To Do List' />
			<AddToDo
				newToDo={newToDo}
				setNewToDo={setNewToDo}
				handleAdd={handleAdd}
			/>
            <Search
                search={search}
                setSearch={setSearch}
            />
			<Content
                toDoItems={toDoItems.filter(toDoItem => ((toDoItem.toDoItem).toLowerCase().includes(search.toLowerCase())))}
                handleItemDelete={handleItemDelete}
                handleItemEdit= {handleItemEdit}
			/>
		</div>
	);
}

export default App;
