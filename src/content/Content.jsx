import ToDoList from "../todo/ToDoList"
import './content.css'

const Content = ({ toDoItems, handleItemDelete, handleItemEdit }) => {
  return (
    <main className="main">
        {toDoItems.length ? (
            <ToDoList 
                toDoItems={toDoItems}
                handleItemDelete={handleItemDelete}
                handleItemEdit= {handleItemEdit}
            />
        ) : (
            <p className="content">Bravo! You deserve a nap!!!</p>
        )}
    </main>
  )
}
export default Content

