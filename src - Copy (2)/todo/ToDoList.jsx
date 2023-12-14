import ToDoItem from "./ToDoItem"
import './toDoItem.css'

const ToDoList = ( {toDoItems, handleItemTick, handleItemDelete} ) => {
  return (
    <ul>
        {toDoItems.map((toDoItem) => (
            <ToDoItem
                key={toDoItem.id}
                toDoItem={toDoItem}
                handleItemTick={handleItemTick}
                handleItemDelete={handleItemDelete}
            />
        ))}
    </ul>
  )
}
export default ToDoList