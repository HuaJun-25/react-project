import React, { useState } from 'react'

// const Imgchange

const App = () => {
    const [curImg, setCurImg]=useState(0);
    const [curImg2, setCurImg2]=useState(0);
    const arrPhotos = [
        {
            imgName:"../images2/p1.jpg"
        },
        {
            imgName:"../images2/p2.jpg"
        },
        {
            imgName:"../images2/p3.jpg"
        },
        {
            imgName:"../images2/p4.jpg"
        },

    ]
    const arrPhotos2 = ["../images2/p5.jpg","../images2/p6.jpg","../images2/p7.jpg"]

  return (
    <>
    <h2>點擊小圖顯示大圖
    </h2>
        <div>
            <div>
                {/* 
                <img src="../images2/p1.jpg" alt="" width={120} height={80} style={{cursor:"pointer"}} />
                <img src="../images2/p2.jpg" alt="" width={120} height={80} style={{cursor:"pointer"}} />
                <img src="../images2/p3.jpg" alt="" width={120} height={80} style={{cursor:"pointer"}} />
                <img src="../images2/p4.jpg" alt="" width={120} height={80} style={{cursor:"pointer"}} />         
                */}

                {
                    arrPhotos.map((photo, index)=>{
                        return(
                            <img 
                            key={index} src={photo.imgName} alt="" 
                            width={120} height={80} style={{cursor:"pointer"}} 
                            // 滑鼠碰到，hover
                            // onMouseMove={()=>{
                            //     setCurImg(index)
                            // }}
                            // 點擊一下
                            onClick={()=>{
                                setCurImg(index)
                                let showPic=document.querySelector('.showimg');
                                showPic.style.display="block";
                            }}
                            />
                        )
                    })
                }
            </div>
            <div>
                <img className='showimg' src={arrPhotos[curImg].imgName} alt="" height={300} style={{display:"none"}} />
            </div>
        </div>

        <div>
            <div>
                {
                    arrPhotos2.map((photo, index)=>{
                        return(
                            <img 
                            key={index} src={photo} alt="" 
                            width={120} height={80} style={{cursor:"pointer"}} 
                            onMouseMove={()=>{
                                setCurImg2(index)
                            }}/>
                        )
                    })
                }
            </div>
            <div>
                <img src={arrPhotos2[curImg2]} alt="" height={300}  />
            </div>
        </div>
    </>
  )
}

export default App