import ToDoItem from "./ToDoItem"
import './toDoItem.css'
import { v4 as uuid} from 'uuid';


const ToDoList = ( {toDoItems, handleItemTick, handleItemDelete, handleItemEdit } ) => {

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
                key={uuid()}
                toDoItem={toDoItem}
                handleItemTick={handleItemTick}
                handleItemDelete={handleItemDelete}
                handleItemEdit= {handleItemEdit}
            />
        ))}
    </ul>
  )
}
export default ToDoList