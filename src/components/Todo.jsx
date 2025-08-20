import React, { useState } from 'react'
import CreateForm from './CreateForm'
import Todocontent from './Todocontent'

const Todo = () => {
    // 有n個todo，要用陣列存取
    // const [todos,setTodos]=useState(['繳停車費','對發票'])
    // 陣列內容若有增減時，索引值會異動，為避免異動資料時造成索引值錯亂，將陣列改為陣列物件
    // 而key值用亂數產生
    const [todos,setTodos] = useState(
        [
            { content:'繳停車費', id: Math.random(), isCompleted:false},
            { content:'對發票', id: Math.random(), isCompleted:false },
        ]
);
    {/* 建立 刪除todo :傳入被刪除的todo.id */}
    const delTodo=(id) =>{
        setTodos(todos.filter((todo)=>{
            return todo.id != id
        }))
    }
    // 建立切換isComplete屬性的函式
    // 檢查被點擊的項目id是否與陣列中id一樣
    // yes: 1.取出todo 2. isComplete屬性反向
    // no: 不變
    const toggleCompleted = (id)=>{
        setTodos(todos.map((todo)=>{
            return todo.id==id ? {...todo, isCompleted: !todo.isCompleted} : todo
        }))
    }


  return (
    <div className='wrapper'>
        <h2>待辦事項</h2>
        <CreateForm todos={todos} setTodos={setTodos}/>

        {/* 方法2
            <CreateForm addtodo={(newContent)=>{
            // 建立一個新的todo
            // 使用...
            setTodos([...todos,{ content:newContent, id: Math.random(), isOk:false}])
        }}/> */}



        {
            todos.map((todo)=>{
                // key要寫在子元素<Todocontent>，對.wrapper來說<Todocontent>的內容是孫元素
                return <Todocontent key={todo.id} todo={todo} delTodo={delTodo} toggleCompleted={toggleCompleted}/>
            })
        }
        

    </div>
  )
}

export default Todo