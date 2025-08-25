import React from 'react'

const App = () => {

    const citys = [
        {
            cityId: 1,
            cityName: '東京',
        },
        {
            cityId: 2,
            cityName: '倫敦',
        }
    ]

    return (
        <>
            <h1>本地端存取資料-Local Storage</h1>

            <div>
                <button
                    onClick={() => {
                        // 寫入語法: window.localStorage.setItem('key','value')
                        // key和value要用字串''，其他型別要轉成字串再放進來
                        // 相同名稱會被覆蓋
                        window.localStorage.setItem('book1', 'HTML');
                        window.localStorage.setItem('book2', 'CSS');
                        window.localStorage.setItem('book3', 'REACT');
                    }}>寫入</button>

                <button onClick={() => {
                    // 指定key名稱
                    // console.log(window.localStorage.getItem('book2'));
                    // 使用迴圈讀取(下往上反向讀取)
                    for (let i = 0; i < window.localStorage.length; i++) {
                        // let key = window.localStorage.key(i);
                        console.log(window.localStorage.getItem(window.localStorage.key(i)));
                    }
                }}>讀取</button>

                <button onClick={() => {
                    window.localStorage.removeItem('book2');
                }}>刪除指定資料</button>
                <button onClick={() => {
                    window.localStorage.clear();
                }}>刪除全部</button>
            </div>

        </>
    )
}

export default App