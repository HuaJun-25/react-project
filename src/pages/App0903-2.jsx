import React, { useRef } from 'react'

const App = () => {

    const greenRef=useRef(null);
    const yellowRef=useRef(null);

    function gotoGreen(){
        window.scrollTo({
            top:greenRef.current.offsetTop,
            // 轉場
            behavior:'smooth'
        })
    }

        function gotoYellow(){
        window.scrollTo({
            top:yellowRef.current.offsetTop,
            // 轉場
            behavior:'smooth'
        })
    }

  return (
    <>
    <div>
        <h2>滑動到指定位置</h2>
        <div ref={yellowRef}
        style={{backgroundColor:'#f1e182',height:'1000px'}}>
            <button onClick={gotoGreen}>green</button>
        </div>
        <div ref={greenRef}
        style={{backgroundColor:'#73e298',height:'1000px'}}>
            <button onClick={gotoYellow}>yellow</button>
        </div>
    </div>

    </>
  )
}

export default App