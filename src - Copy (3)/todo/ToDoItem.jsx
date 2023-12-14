import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import './toDoItem.css'

const ToDoItem = ({ toDoItem, handleItemTick, handleItemDelete }) => {
	return (
		<li className='toDoItem'>
			<input
				type='checkbox'
				onChange={() => handleItemTick(toDoItem.id)}
				checked={toDoItem.checked}
			/>
			<label
				style={toDoItem.checked ? { textDecoration: "line-through" } : null}
				onClick={() => handleItemTick(toDoItem.id)}
			>
                {toDoItem.toDoItem}
            </label>

			<FaEdit 
                onClick={() => handleItemTick(toDoItem.id)}
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
		</li>
	);
};
export default ToDoItem;
