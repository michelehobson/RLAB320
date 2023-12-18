import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

import "./toDoItem.css";
import { useEffect, useReducer, useRef, useState } from "react";

const ACTIONS = {
    TICK: 'tick',
    ADD : 'add',
    EDIT: 'edit',
    DELETE: 'delete'
}

const ToDoItem = ({ id, toDoItem, checked, handleItemDelete, handleItemEdit }) => {
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
    
    const reducer = (state, action) => {
        switch(action.type) {
            case ACTIONS.ADD:
                // NOT CODED
                return { ...state, }
            case ACTIONS.EDIT:
                // NOT CODED, STILL USING APP.JSX FOR EDIT
                return state.map(todo => {
                    todo.id === action.payload.id ? { ...todo, todo: action.payload.textValue} : todo
            })            
            case ACTIONS.TICK:
                // console.log('TICK: ' + state)
                return state.map(todo => {
                    if(todo.id === action.payload.id) {
                        return { ...todo, checked: !todo.checked}
                    }
                    return todo
                })
            case ACTIONS.DELETE:
                // console.log('DELETE: ' + state)
                // WON'T DELETE LINE 
                return state.filter(todo => todo.id !== action.payload.id)
            default:
                return state;
        }
    }
 
    const initialState = {
        id: id,
        toDoItem: toDoItem,
        checked: checked
    }

    const [state, dispatch] = useReducer(reducer, [Object.values(initialState)])

    return (
		<li className='toDoItem' key={id}>
			<input
				type='checkbox'
				onChange={() => dispatch({type: ACTIONS.TICK, payload: {id: id}})}
                // WILL TOGGLE CHECKBOX BUT DOES STATE IS NOT CHANGING
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
						onClick={() => dispatch({type: ACTIONS.TICK, payload: {id: id}})}
					>{toDoItem}
					</label>
					<FaEdit
						onClick={() => handleEditClick()}
						role='button'
						tabIndex={0}
						aria-label={`Edit ${toDoItem}`}
					/>
					<FaTrash
						onClick={()=> handleItemDelete(id, toDoItem, checked)}
						// onClick={()=> dispatch({type: ACTIONS.DELETE, payload: {id: id}})} // WILL NOT DELETE
						role='button'
						tabIndex={0 }
						aria-label={`Delete ${toDoItem}`}
					/>
				</>
			)}
		</li>
	);
};
export default ToDoItem;