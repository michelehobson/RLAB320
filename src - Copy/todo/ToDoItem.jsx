import { FaTrash } from "react-icons/fa";

const ToDoItem = ({ toDo, handleItemTick, handleItemDelete }) => {
	return (
		<li className='toDo'>
			<input
				type='checkbox'
				onChange={() => handleItemTick}
				checked={toDo.checked}
			/>
			<label
				style={toDo.checked && { textDecoration: "line-through" }}
				onDoubleClick={() => handleItemTick(toDo.id)}
			>
                {toDo.toDo}
            </label>
			<FaTrash 
                onClick={() => handleItemDelete(toDo.id)}
                role='button'
                tabIndex={0}
                aria-label={`Delete ${toDo.toDo}`}
            />
		</li>
	);
};
export default ToDoItem;
