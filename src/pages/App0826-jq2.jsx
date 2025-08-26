import { useState } from 'react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import '../sass/app0826-2.scss'


const App = () => {
    const [currentIndex, setCurrentIndex] = useState(0) // 預設為第一張圖

    const slides = [
        { url: './images2/p3.jpg' },
        { url: './images2/p6.jpg' },
        { url: './images2/p8.jpg' },
        { url: './images2/p5.jpg' },
    ]

    // 按鈕(按鈕的方向,觸發事件)
    const Arrow = ({ direction, onclick }) => {
        return (
            <div>
                {
                    direction === 'left'
                        ? (
                            <FaArrowLeft className='icon' onclick={onclick} /> // 左按鈕
                        )
                        : (
                            <FaArrowRight className='icon' onclick={onclick} />// 右按鈕
                        )
                }
            </div>

        )
    }

    // 上一張: 切換目前圖片索引位置
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => {
            // 當是第一張的時候就到最後一張，不是就到前一張
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        })
    }
    // 下一張
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => {
            // 當是最後一張的時候就到第一張，不是就到下一張
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        })
    }
    return (
        <div className='wrap'>
            <h3>輪播</h3>
            <div className="slide">
                <div className="slideImg" style={{
                    backgroundImage: `url(${slides[currentIndex].url})`
                }}>
                    {/* 顯示圖片區 */}
                    <Arrow direction={"left"} onclick={prevSlide} />
                    <Arrow direction={"right"} onclick={nextSlide} />
                </div>
            </div>
        </div>

    )
}

export default App