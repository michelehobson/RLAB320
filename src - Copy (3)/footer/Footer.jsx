import './footer.css'

const footer = ({ length }) => {
    const getYear = new Date().getFullYear()
  return (
    <footer className="footer">
        <p>{ length } Task { length === 1 ? 'Item' : 'Items'}</p>
        <p>Copyright &copy; {getYear}</p>
    </footer>

  )
}
export default footer