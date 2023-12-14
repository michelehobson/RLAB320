import './header.css'
const Header = ({ title='Your To Do List'}) => {
  return (
    <header className="header">
        <h1>{ title }</h1>
    </header>
  )
}
export default Header