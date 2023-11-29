// Write your code here
import './index.css'

const TodoItem = props => {
  const {user, onDelete} = props
  const {title, id} = user

  const onDel = () => {
    onDelete(id)
  }
  return (
    <div>
      <li className="ll">
        <div className="roww">
          <p className="p">{title}</p>
          <button type="button" className="bt" onClick={onDel}>
            Delete
          </button>
        </div>
      </li>
    </div>
  )
}

export default TodoItem
