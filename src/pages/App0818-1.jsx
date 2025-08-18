import React, { useState } from 'react'

// 建立元件function
function MyComponent() {
    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(count + 1);
    }
    return (
        // handleClick函式不用加():handleClick()會立即執行
        // 呼叫函式打名稱就好
        <button id='btn1' onClick={handleClick}>點擊{count}</button>
    )
}


const App = () => {

    // const [count,setCount]=useState(0);
    const [txt, setTxt] = useState('user');
    const [select, setSelect] = useState("");
    const oplist = ['HTML', 'CSS', 'JaveScript', 'React']; // 建立下拉清單項目
    const oplistValue = ['html', 'css', 'js', 'react'];  // 建立下拉清單內容

    const [selectmonth, setSelectMonth] = useState("");
    const opmonth = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];

    return (
        <>
            <p>點擊按鈕</p>
            <div>
                {/* <button id='btn1' onClick={()=>{
            // count++;
            setCount(count+1);
            console.log(count);
        }}>點擊{count}</button> */}
                <MyComponent />
            </div>
            <hr />
            <p>捕捉文字方塊內容</p>
            <div>
                <input type="text" value={txt} onChange={(e) => {
                    setTxt(e.target.value);
                }} />
                <button onClick={() => {
                    alert(`帳號: ${txt}`);
                }}>送出</button>
            </div>
            <hr />
            <p>下拉式方塊</p>
            <div>
                <select name="" id="" value={select} onChange={(e) => {
                    setSelect(e.target.value);
                    console.log(e.target.value);
                }}>
                    <option value="" disabled>選擇</option>
                    {
                        oplist.map((item, index) => {
                            return <option key={item} value={oplistValue[index]}>{item}</option>

                        })
                    }
                    {/* <option value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="js">JS</option>
            <option value="react">React</option> */}
                </select>
                <p>選擇: {select}</p>
            </div>
            <div>
                <select name="" id="" value={select} onChange={(e) => {
                    setSelectMonth(e.target.value);
                    console.log(e.target.value);
                }}>
                    <option value="" disabled>選擇</option>
                    {
                        opmonth.map((item, index) => {
                            return <option key={item} value={opmonth[index]}>{item}</option>

                        })
                    }
                    {/* <option value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="js">JS</option>
            <option value="react">React</option> */}
                </select>
                <p>選擇: {selectmonth}</p>
            </div>
        </>
    )
}

export default App