import { useEffect, useState } from "react";
import axios from "axios";
import "../css/app0811-weather.css"
import { IoMdUmbrella } from "react-icons/io";
//  圖片是從public(不用寫)

const App = () => {
	// 建立一個react變數: useState Hook
	// 存放各縣市資料
	// const [變數名稱, 更改變數名稱的方法] = useState(預設值)
	const [citys, setCitys] = useState([]);
	// useEffect() : 渲染後只呼叫一次json
	// useEffect() : 取得渲染後的dom元素(html標籤)，要寫在useffect
	useEffect(() => {
		// 非同步取資料async需搭配await
		(async () => {

			const jsondata = await axios.get('./src/json//F-C0032-001.json');

			// 取得各縣市名稱
			const { location } = jsondata.data.cwaopendata.dataset
			console.log(location);
			setCitys(location);


		})();
	}, []);


	// return 裡面要寫js語法要加{ ... }
	return (
		<>
			{
				citys.map((citys) => {
					return (
						<div key={citys.locationName}>
							<div className="container">
								<div className="locationName">
									{/* 縣市名稱 */}
									<p>{citys.locationName}</p>
								</div>
								{/* 卡片內容*3 */}
								<div className="card">
									{
										citys.weatherElement[0].time.map((item, index) => {
											return (
												<div className="card-body" key={index}>
													<p className="date">
														{/* 使用日期時間的函式 tolocaleString */}
														
														{
															new Date(item.startTime).toLocaleString(undefined, {
																day: 'numeric'
															})
														}
													</p>
													<p className="startTime">
														{
															new Date(item.startTime).toLocaleString(undefined, {
																hour: 'numeric',
																minute: 'numeric'
															})
														}
													</p>
													<p>~</p>
													<p className="endTime">
														{
															new Date(item.endTime).toLocaleString(undefined, {
																hour: 'numeric',
																minute: 'numeric'
															})
														}
													</p>
													<img src={`./weatherIcon/${item.parameter.parameterName}.svg`} className="icon" alt="..." />
													<p>{item.parameter.parameterName}</p>
													<p className="pop">
														<IoMdUmbrella />{citys.weatherElement[4].time[index].parameter.parameterName}%
													</p>
												</div>

											)
										})

									}


								</div>
							</div>

						</div>
					)
				})
			}
		</>
	)
}

export default App