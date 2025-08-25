import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import EditForm from "./EditForm";

const Todocontent = ({ todo, delTodo, toggleCompleted, toggleisEdit, editTodo }) => {
  return (
    todo.isEdit ? <EditForm todo={todo} editTodo={editTodo}/>

      : <div className={`todocontent ${todo.isCompleted ? 'completed' : ''}`}>
        {/* <p>停車費</p> */}
        <p onClick={() => { toggleCompleted(todo.id) }}>{todo.content}</p>
        <div className="icon">
          <FaEdit onClick={()=>{toggleisEdit(todo.id)}}/>
          <MdDeleteForever onClick={() => { delTodo(todo.id) }}
          />
        </div>
      </div>
  )
}

export default Todocontent