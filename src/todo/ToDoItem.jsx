import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

import "./toDoItem.css";
import { useEffect, useRef, useState } from "react";

const ToDoItem = ({ id, toDoItem, checked, handleItemTick, handleItemDelete, handleItemEdit }) => {
	const [singleToDo, setSingleToDo] = useState(toDoItem);
	const [edit, setEdit] = useState(false);
	const inputRef = useRef(null);

	useEffect(() => {
		if (edit) {
			inputRef.current.focus();
		}
	}, [edit]);

	const handleEditClick = () => {
		setEdit(true);
	};

	const handleEditSave = () => {
		handleItemEdit(id, singleToDo);
		setEdit(false);
	};

	const handleEditCancel = () => {
		setSingleToDo(toDoItem);
		setEdit(false);
	};
    
	return (
		<li className='toDoItem' key={id}>
			<input
				type='checkbox'
				onChange={() => handleItemTick(id)}
				checked={checked}
                id={id}
			/>

			{edit ? (
				<>
					<input
						ref={inputRef}
						type='text'
						className='edit'
						value={singleToDo}
						onChange={(e) => setSingleToDo(e.target.value)}
					/>
					<button className='editBtn editBtnLeft' onClick={handleEditSave}>Save</button>
					<button className='editBtn' onClick={handleEditCancel}>Cancel</button>
				</>

			) : (

				<>
					<label
						style={checked ? { textDecoration: "line-through" } : null}
						onClick={() => handleItemTick(id)}
					>{toDoItem}
					</label>
					<FaEdit
						onClick={() => handleEditClick()}
						role='button'
						tabIndex={0}
						aria-label={`Edit ${toDoItem}`}
					/>
					<FaTrash
						onClick={() => handleItemDelete(id)}
						role='button'
						tabIndex={1}
						aria-label={`Delete ${toDoItem}`}
					/>
				</>
			)}
		</li>
	);
};
export default ToDoItem;
