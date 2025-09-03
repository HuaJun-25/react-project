import React, { useEffect, useState } from 'react'
import { useRef } from 'react'

const App = () => {

    const inputRef = useRef();

    function focusInput(){
        inputRef.current.focus();
        inputRef.current.style.backgroundColor='#919191ff';
    } 
    return (
        <>
            <div>
                <h3>取得游標</h3>
                <label htmlFor="input1">帳號</label>
                <input type="text" id="input1" ref={inputRef}/>
                <button onClick={focusInput}>取得游標</button>
            </div>
        </>
    )
}

export default App