// Write your code here
import './index.css'

const TodoItem = props => {
  const {eachuser, onDelete} = props
  const {title, id} = eachuser

  const onDel = () => {
    onDelete(id)
  }
  return (
    <li className="ll">
      <h1 className="h">Simple Todos</h1>
      <div className="roww">
        <p className="p">{title}</p>
        <button type="button" className="bt" onClick={onDel}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
