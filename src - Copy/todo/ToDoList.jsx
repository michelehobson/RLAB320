import ToDoItem from "./ToDoItem"

const ToDoList = ( {toDoItems, handleItemTick, handleItemDelete} ) => {
  return (
    <ul>
        {toDoItems.map((toDo) => {
            <ToDoItem
                key={toDo.id}
                toDo={toDo}
                handleItemTick={handleItemTick}
                handleItemDelete={handleItemDelete}
            />
        })}
    </ul>
  )
}
export default ToDoList