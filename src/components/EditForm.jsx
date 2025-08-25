import { useState } from "react"

const EditForm = ({ todo, editTodo }) => {

    const [txt, setTxt] = useState(todo.content);

    // 把onclick寫成一個函式
    function editData() {
        // editTodo(todo.id, txt);
        let myInput = document.getElementById("myInput") //取得輸入框位置
        myInput.focus();
        if (txt.trim().length == 0) {
            alert('請輸入內容');
        } else {
            editTodo(todo.id, txt);
        }
    }

    return (
        <>
            <form className='create-form'>
                <input id="myInput" type="text" placeholder='輸入待辦事項' value={txt} onChange={(e) => {
                    setTxt(e.target.value.trim())
                }} />
                <button type='button' onClick={editData}>完成</button>
            </form>
        </>
    )
}


// const CreateForm = ({addtodo}) => {

//     const [txt, setTxt] = useState('');

//     return (
//         <>
//             <form className='create-form'>
//                 <input id="myInput" type="text" placeholder='輸入待辦事項' value={txt} onChange={(e) => {
//                     setTxt(e.target.value)
//                 }} />
//                 <button type='button' onClick={()=>{
//                     addtodo(txt)
//                     setTxt('') //清除輸入框內容
//                     let myInput = document.getElementById("myInput") //取得輸入框位置
//                     myInput.focus(); //讓滑鼠移至輸入框位置
//                 }}>加入</button>
//             </form>
//         </>
//     )
// }

export default EditForm