import React, { useEffect, useState } from 'react'
import { useRef } from 'react'

const App = () => {

    // useRef變數給input標籤
    // 相當於document.querySelect
   // const inputRef = useRef(null);

    function btnHandler() {
        // 查看ref物件
        console.log(inputRef)
        // 查看ref值
        console.log(inputRef.current.value)
        // 查看ref的型別
        console.log(inputRef.current.type)

        // 改變型別
        inputRef.current.type = 'password'
        console.log(inputRef.current.type)
    }

    // 關閉密碼
    function btnClose() {
        inputRef.current.type = 'password';
    }

    //顯示密碼
    function btnShow() {
        inputRef.current.type = 'text';
    }

    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    function inputcolor(no){
        inputRef1.current.style.backgroundColor= '';
        inputRef2.current.style.backgroundColor= '';
        inputRef3.current.style.backgroundColor= '';

        if (no===1){
            inputRef1.current.style.backgroundColor= '#e9bfbf';
        } else if (no===2){
            inputRef2.current.style.backgroundColor= '#e9bfbf';
        }else if (no===3){
            inputRef3.current.style.backgroundColor= '#e9bfbf';
        }
    } 
 
    const [inputValue, setInputValue] = useState('');
    const count = useRef(0);
    useEffect(()=>{
        count.current = count.current + 1;
        console.log(count.current);

    })


    return (
        <>
            <div className="wrap">
                <h1>useRef</h1>
                {/* 使用useRef */}
                <input type="text" ref={inputRef} />
                <div>
                    <button onClick={btnHandler}>click</button>
                </div>
                <div>
                    <span style={{ fontSize: '20px', fontWeight: 'bold' }}>開關密碼 </span>
                    <button onClick={btnClose}>關閉密碼</button>
                    <button onClick={btnShow}>查看密碼</button>
                </div>
            </div>
            {/* <div>
                1<input ref={inputRef1} type="text" onFocus={inputcolor(1)}/><br />
                2<input ref={inputRef2} type="text" onFocus={inputcolor(2)}/><br />
                3<input ref={inputRef3} type="text" onFocus={inputcolor(3)}/><br />
            </div> */}

            <div>
                <h3>次數異動</h3>
                <input 
                    type="text"
                    value={inputValue}
                    onChange={(e)=>setInputValue(e.target.value)} />
                <h3>次數:{count.current}</h3>
            </div>
        </>
    )
}

export default App