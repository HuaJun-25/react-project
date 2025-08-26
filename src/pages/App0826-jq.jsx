import $ from 'jquery'
import { useEffect } from 'react'
import '../sass/App0826-1.scss'

const App = () => {

    useEffect(() => {

        // 當滑鼠移到圖片時圖片放大
        // $(this)當下正在操作的元素
        // 匿名函式:可以用this  箭頭函式:this改成原本目標名稱('.zoom')
        // 不確定用法可以直接帶名稱('.zoom')
        $('.zoom').on('mouseover', function () {
            $(this).addClass('imgScale');
        })

        // 當滑鼠離開圖片，圖片還原
        $('.zoom').on('mouseout', function () {
            $(this).removeClass('imgScale');
        })
    }, [])


    return (

        <div>
            <h3>useEffect-圖片縮放</h3>
            <a href="#" className='zoom'>
                <img src="./images2/p3.jpg" alt="" />
            </a>
        </div>

    )
}

export default App