import ToDoItem from "./ToDoItem"
import './toDoItem.css'


const ToDoList = ( {toDoItems, handleItemDelete, handleItemEdit } ) => {

    const data = [
        {checked: false, toDoItem: 'Go Shopping'},
        {checked: false, toDoItem: 'Organize Garage'},
        {checked: false, toDoItem: 'Feed Chickens'},
        {checked: false, toDoItem: 'Go For a Walk'},
        {checked: false, toDoItem: 'Put Yacht On Water'},
    ]
  return (
    <ul>
        {toDoItems.map((toDoItem) => (
            <ToDoItem
                key={toDoItem.id}
                id={toDoItem.id}
                checked={toDoItem.checked}
                toDoItem={toDoItem.toDoItem}
                handleItemDelete={handleItemDelete}
                handleItemEdit= {handleItemEdit}
            />
        ))}
    </ul>
  )
}
export default ToDoList