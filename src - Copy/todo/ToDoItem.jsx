import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { RiEdit2Fill } from "react-icons/ri";

import "./toDoItem.css";
import { useEffect, useRef, useState } from "react";

const ToDoItem = ({ toDoItem, handleItemTick, handleItemDelete, handleItemEdit }) => {
	// const [toDoItems, setToDoItems] = useState(JSON.parse(localStorage.getItem("HobsonToDoList")) || []);
	const [toDoItem, setToDoItems] = useState(localStorage.setItem("HobsonToDoList", JSON.stringify(toDoItem)));

	const [edited, setEdited] = useState(false);
	const inputRef = useRef(null);

	// useEffect(() => {
	// 	if (edited && inputRef.current) {
	// 		inputRef.current.focus();
	// 		console.log("INSIDE USE EFFECT");
	// 	}
	// }, [edited]);

    // useEffect(() => {
	// 	localStorage.setItem("HobsonToDoList", JSON.stringify(toDoItems));
	// }, [toDoItems]);

	const handleEditClick = () => {
		console.log("SETTING setEdited TRUE");
		setEdited(true);
	};

	const handleEditSave = () => {
		console.log("HANDLE EDIT SAVE");
		handleItemEdit(toDoItem.id, toDoItem.toDoItem);
		setEdited(false);
	};

	return (
		<li className='toDoItem'>
			<input
				type='checkbox'
				onChange={() => handleItemTick(toDoItem.id)}
				checked={toDoItem.checked}
			/>

			{edited ? (
				<>
					<input
						type='text'
						ref={inputRef}
						className='edit'
						value={toDoItem.toDoItem}
						onChange={(e) => setToDoItems(e.target.value)}
					/>
					<button
						onClick={handleEditSave(toDoItem.id, toDoItem.toDoItem)}
					>
						Save
					</button>
				</>
			) : (
				<>
					<label
						style={
							toDoItem.checked
								? { textDecoration: "line-through" }
								: null
						}
						onClick={() => handleItemTick(toDoItem.id)}
					>
						{toDoItem.toDoItem}
					</label>
					<RiEdit2Fill
						onClick={() =>
							handleEditClick(toDoItem.id, toDoItem.toDoItem)
						}
						role='button'
						tabIndex={0}
						aria-label={`Edit ${toDoItem.toDoItem}`}
					/>
					<FaTrash
						onClick={() => handleItemDelete(toDoItem.id)}
						role='button'
						tabIndex={0}
						aria-label={`Delete ${toDoItem.toDoItem}`}
					/>
				</>
			)}
		</li>
	);
};
export default ToDoItem;
