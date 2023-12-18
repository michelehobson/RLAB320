import "./addToDo.css";
import { FaPlus } from "react-icons/fa";
import { useRef } from "react";

const AddToDo = ({ newToDo, setNewToDo, handleAdd }) => {
	const inputRef = useRef();

	return (
		<form
			className='addToDoForm'
			onSubmit={handleAdd}
		>
			<input
				autoFocus
				ref={inputRef}
				type='text'
				placeholder='Add Task'
				required
				value={newToDo}
				onChange={(e) => setNewToDo(e.target.value)}
			/>
			<button
				type='submit'
				aria-label='Add To Do'
				onClick={() => inputRef.current.focus()}
			>
				<FaPlus />
			</button>
		</form>
	);
};
export default AddToDo;
