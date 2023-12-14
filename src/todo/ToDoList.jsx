import ToDoItem from "./ToDoItem"
import './toDoItem.css'

const ToDoList = ( {toDoItems, handleItemTick, handleItemDelete, handleItemEdit } ) => {
  return (
    <ul>
        {toDoItems.map((toDoItem) => (
            <ToDoItem
                key={toDoItem.id}
                toDoItem={toDoItem}
                handleItemTick={handleItemTick}
                handleItemDelete={handleItemDelete}
                handleItemEdit={handleItemEdit}
            />
        ))}
    </ul>
  )
}
export default ToDoList