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
    
    const reducer = (state, action) => {
        switch(action.type) {
            case ACTIONS.ADD:
                return { ...state, }
            case ACTIONS.EDIT:
                return state.map(todo => {
                    todo.id === action.payload.id ? { ...todo, todo: action.payload.textValue} : todo
            })            
            case ACTIONS.TICK:
                console.log('TICK: ' + state)
                return state.map(todo => {
                    todo.id === action.payload.id ? { ...todo, checked: !todo.checked } : todo
                })
            case ACTIONS.DELETE:
                console.log(state)
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
    // console.log('initialState: ' + Object.values(initialState))
   
    
    // const [state, dispatch] = useReducer(reducer, [Object.values(initialState)])
    const [state, dispatch] = useReducer(reducer, [Object.values(initialState)])

    return (
		<li className='toDoItem' key={id}>
			<input
                id={id}
				type='checkbox'
                value={state.checked}
				onChange={(e) => dispatch({type: ACTIONS.TICK, payload: e.target.value})}
				// onChange={() => dispatch({type: ACTIONS.TICK, payload: Object.values(initialState)})}//handleItemTick(id, toDoItem, checked)}
				// checked={checked}
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
						onClick={() => handleItemTick(id, toDoItem, checked)}
					>{toDoItem}
					</label>
					<FaEdit
						onClick={() => handleEditClick()}
						role='button'
						tabIndex={0}
						aria-label={`Edit ${toDoItem}`}
					/>
					<FaTrash
						onClick={() => handleItemDelete(id, toDoItem, checked)}
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