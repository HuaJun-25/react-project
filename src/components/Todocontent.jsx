import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const Todocontent = ({todo,delTodo,toggleCompleted}) => {
  return (
    <div className={`todocontent ${todo.isCompleted?'completed':''}`}>
        {/* <p>停車費</p> */}
        <p onClick={()=>{toggleCompleted(todo.id)}}>{todo.content}</p>
        <div className="icon">
        <FaEdit />
        <MdDeleteForever onClick={()=>{
            delTodo(todo.id)
        }}/>
        </div>
    </div>
  )
}

export default Todocontent