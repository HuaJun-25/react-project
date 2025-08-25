import React from 'react'

const App = () => {

    const arrcitys = [
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
            <div>
                <h3>陣列物件資料存取</h3>
                <button onClick={()=>{
                    // 陣列物件轉字串
                    let strCity = JSON.stringify(arrcitys)
                    // 寫入
                    window.localStorage.setItem('citys',strCity)
                }}>寫入</button>
                <button onClick={()=>{
                    // 取出資料
                    let getData = window.localStorage.getItem('citys')
                    // 字串轉陣列物件
                    let getArrData = JSON.parse(getData)
                }}>讀取</button>
            </div>
        </>
    )
}

export default App