import { useEffect } from "react";
import axios from "axios";
import "../css/app0811-weather.css"
import { IoMdUmbrella } from "react-icons/io";
//  圖片是從public(不用寫)

const App = () => {
  // useEffect() : 渲染後只呼叫一次json
  useEffect(()=>{
    // 非同步取資料async需搭配await
    (async()=>{
      // 取得public中的json檔
      // const data = await axios.get('./F-C0032-001.json');

      // 非同步的處理還沒執行須再加()讓他執行
      const data = await axios.get('./src/json//F-C0032-001.json');
      console.log(data.data.cwaopendata.dataset);
    })();
  },[]);
  

  // 取得src中的json檔
  return (
    <>
      {/* 天氣預報 */}
      <div className="container">
        {/* 縣市名稱 */}
        <div className="locationName">
          <p>臺北市</p>
        </div> 
        {/* 卡片內容 */}
        <div className="card">
          <div className="card-body">
            <p className="date">11日</p>
            <p className="startTime">上午6:00</p>
            <p>~</p>
            <p className="endTime">下午6:00</p>
           
            <img src="./weatherIcon/多雲.svg" className="Wimg" alt="..." />
            <p>晴午後短暫雷陣雨</p>
            <p className="pop">
              <IoMdUmbrella />80%
            </p>
          </div>


        </div>
        

      </div>
    </>
  )
}

export default App